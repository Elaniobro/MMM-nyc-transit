/* Magic Mirror
 * Module: MMM-NYC-transit
 *
 * By Elan Trybuch https://github.com/elaniobro
 * MIT Licensed.
 */
var NodeHelper = require('node_helper');
var { createClient } = require('mta-realtime-subway-departures');
var fs = require('fs-extra');
var mtaStationIds = require('mta-subway-stations');

module.exports = NodeHelper.create({
    start: function () {
        console.log(this.name + ' helper method started...'); /*eslint-disable-line*/
    },

    getDepartures: function (config) {
        var apiKey = config.apiKey;
        var client = createClient(apiKey);
        var self = this;
        var stations = config.stations;
        var stationIds = {};
        var walkingTime = config.walkingTime;
        var isList = config.displayType !== 'marquee';

        fs.readFile(`${__dirname}/node_modules/mta-subway-complexes/complexes.json`, 'utf8')
            .then((data)=> {
                stationIds = JSON.parse(data);
            })
            .catch((err) => {
                throw new Error(err);
            });

        client.departures(stations)
            .then((responses) => {
                var upTown = [];
                var downTown = [];

                if (responses.length === undefined){
                    var temp = responses;
                    responses = [];

                    responses.push(temp);
                }

                responses.forEach((response) => {
                    response.lines.forEach((line) => {
                        // Southbound Departures
                        line.departures.S.forEach((i) => {
                            for (var key in mtaStationIds) {
                                if (i.destinationStationId === key) {
                                    i.destinationStationId = mtaStationIds[key]['Complex ID'];
                                }
                            }

                            upTown.push({
                                'routeId': i.routeId,
                                'time': this.getDate(i.time, walkingTime),
                                'destination': (i.destinationStationId === '281') ?
                                    stationIds['606'].name :
                                    stationIds[i.destinationStationId].name
                            });
                        });
                        // Nothbound Departures
                        line.departures.N.forEach((i) => {
                            for (var key in mtaStationIds) {
                                if (i.destinationStationId === key) {
                                    i.destinationStationId = mtaStationIds[key]['Complex ID'];
                                }
                            }

                            downTown.push({
                                'routeId': i.routeId,
                                'time': this.getDate(i.time, walkingTime),
                                'destination': (i.destinationStationId === '281') ?
                                    stationIds['606'].name :
                                    stationIds[i.destinationStationId].name
                            });
                        });
                    });
                });
                if(isList) {
                    self.sendSocketNotification('TRAIN_TABLE', [{ downTown: downTown.filter(train => train.time > 0).slice(0, 9) }, { upTown: upTown.filter(train => train.time > 0).slice(0, 9) }]);
                } else {
                    self.sendSocketNotification('TRAIN_TABLE', [{ downTown: downTown.filter(train => train.time > 0).slice(0, 3) }, { upTown: upTown.filter(train => train.time > 0).slice(0, 3) }]);
                }

            })
            .catch(err => {
                throw new Error(err);
            });
    },

    getDate: function (time, walkingTime) {
        // time is a unix_timestamp
        var now = Math.round((new Date()).getTime() / 1000);
        var secdiff = time - now;
        var mindiff = Math.floor(secdiff / 60);

        mindiff = '0' + mindiff % 60;

        // Will display time in minutes format
        var formattedTime = Number(mindiff.substr(-2));

        return formattedTime - walkingTime;
    },

    //Subclass socketNotificationReceived received.
    socketNotificationReceived: function (notification, config) {
        if (notification === 'GET_DEPARTURES') {
            this.getDepartures(config);
        }
    }
});
