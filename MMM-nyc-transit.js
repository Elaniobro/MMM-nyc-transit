/* Magic Mirror
 * Module: MMM-NYC-transit
 *
 * By Elan Trybuch https://github.com/elaniobro
 * MIT Licensed.
 */

Module.register('MMM-nyc-transit', { /*eslint-disable-line*/
    // Default module config.
    defaults: {
        displayType: 'marquee',
        mtaType: 'train',
        stations: [
            {
                stationId: 237,
                walkingTime: 5,
                dir: {
                    upTown: true,
                    downTown: true
                }
            },
            {
                stationId: 238,
                walkingTime: 5,
                dir: {
                    upTown: true,
                    downTown: true
                }
            }
        ],
        updateInterval: 300000 // every 5 min
    },

    getStyles: function () {
        return ['MMM-nyc-transit.css'];
    },

    start: function () {
        this.getDepartures();
        this.scheduleUpdate();
    },

    getDom: function () {
        var data = this.result; // the data is not ready
        var wrapper = document.createElement('div');
        var marquee = document.createElement('marquee');
        var list = document.createElement('ul');
        var isList = this.config.displayType !== 'marquee';

        wrapper.className = 'MMM-nyc-transit';
        list.className = 'mta__train--list';
        marquee.className = 'mta__train--marquee';

        if (data) {
            var downTown = data[0].downTown;
            var upTown = data[1].upTown;

            if (Object.keys(data).length === 0 && data.constructor === Object) {
                return wrapper;
            }

            if(isList){
                var trainHashMap = {
                    downTown: [],
                    upTown: []
                };

                downTown.forEach((train) => {
                    if (!trainHashMap.downTown[train.routeId]) {
                        trainHashMap.downTown[train.routeId] = {
                            time: [train.time],
                            dest: train.destination
                        };

                    } else {
                        trainHashMap.downTown[train.routeId].time.push(train.time);
                    }
                });

                for (var dKey in trainHashMap.downTown) {
                    var dHtml = '';
                    var downTownListItem = document.createElement('li');

                    dHtml = dHtml + '<span class="mta mta__train mta__train--logo mta__train--line-' + dKey.toLowerCase() + '">' + dKey + '</span>' + trainHashMap.downTown[dKey].dest + '<span class="mta mta_train mta__train--time mta_train-time__' + dKey.toLowerCase() + '"> ' + trainHashMap.downTown[dKey].time.slice(0,3).map((trainTime) => ' ' + trainTime + 'min') + ' </span>'; /*eslint-disable-line*/

                    downTownListItem.className = 'mta__train--item';
                    downTownListItem.innerHTML = dHtml;

                    list.appendChild(downTownListItem);
                }

                upTown.forEach((train) => {
                    if (!trainHashMap.upTown[train.routeId]) {
                        trainHashMap.upTown[train.routeId] = {
                            time: [train.time],
                            dest: train.destination
                        };

                    } else {
                        trainHashMap.upTown[train.routeId].time.push(train.time);
                    }
                });

                for (var uKey in trainHashMap.upTown) {
                    var uHtml = '';
                    var upTownListItem = document.createElement('li');

                    uHtml = uHtml + '<span class="mta mta__train mta__train--logo mta__train--line-' + uKey.toLowerCase() + '">' + uKey + '</span>' + trainHashMap.upTown[uKey].dest + '<span class="mta mta_train mta__train--time mta_train-time__' + uKey.toLowerCase() + '"> ' + trainHashMap.upTown[uKey].time.slice(0, 3).map((trainTime) => ' ' + trainTime + 'min') + '</span>'; /*eslint-disable-line*/

                    upTownListItem.className = 'mta__train--item';
                    upTownListItem.innerHTML = uHtml;

                    list.appendChild(upTownListItem);
                }

                wrapper.appendChild(list);

                return wrapper;
            } else{

                for (var upMarKey in upTown) {

                    if (!Object.prototype.hasOwnProperty.call(upTown, upMarKey)) { continue; }

                    var upMarHtml = '';
                    var upTownMarListItem = document.createElement('span');

                    upMarHtml = upMarHtml + '<span class="mta mta__train mta__train--logo mta__train--line-' + upTown[upMarKey].routeId.toLowerCase() + '">' + upTown[upMarKey].routeId.toLowerCase() + '</span><span class="mta mta_train mta__train--time mta_train-time__' + upMarKey + '">' + upTown[upMarKey].time + 'min</span> | <span class="mta mta_train mta__train--destination">' + upTown[upMarKey].destination + '</span>'; /*eslint-disable-line*/

                    upTownMarListItem.className = 'mta__train--item';
                    upTownMarListItem.innerHTML = upMarHtml;
                    marquee.appendChild(upTownMarListItem);
                }

                for (var downMarKey in downTown) {

                    if (!Object.prototype.hasOwnProperty.call(downTown, downMarKey)) { continue; }
                    var downMarHtml = '';
                    var downTownMarListItem = document.createElement('span');

                    downMarHtml = downMarHtml + '<span class="mta mta__train mta__train--logo mta__train--line-' + downTown[downMarKey].routeId.toLowerCase() + '">' + downTown[downMarKey].routeId.toLowerCase() + '</span><span class="mta mta_train mta__train--time mta_train-time__' + (parseFloat(downMarKey) + 4) + '">' + downTown[downMarKey].time + 'min</span> | <span class="mta mta_train mta__train--destination">' + downTown[downMarKey].destination + '</span>'; /*eslint-disable-line*/

                    downTownMarListItem.className = 'mta__train--item';
                    downTownMarListItem.innerHTML = downMarHtml;
                    marquee.appendChild(downTownMarListItem);
                }

                wrapper.appendChild(marquee);

                return wrapper;
            }
        }

        return wrapper;
    },

    getDepartures: function() {
        var config = this.config;

        this.sendSocketNotification('GET_DEPARTURES', config);
    },

    scheduleUpdate: function (delay) {
        var loadTime = this.config.updateInterval;
        var that = this;

        if (typeof delay !== 'undefined' && delay >= 0) {
            loadTime = delay;
        }

        setInterval(function () {
            that.getDepartures();
        }, loadTime);
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === 'TRAIN_TABLE') {
            console.log('socketNotificationReceived: "TRAIN_TABLE": ', this.result); /*eslint-disable-line*/

            this.result = payload;
            this.updateDom(self.config.fadeSpeed);
        }
    }
});
