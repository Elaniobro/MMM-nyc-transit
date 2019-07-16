/* Magic Mirror
 * Module: MMM-NYC-transit
 *
 * By Elan Trybuch https://github.com/elaniobro
 * MIT Licensed.
 */
Module.register('MMM-nyc-transit', { /*eslint-disable-line*/
    // Default module config.
    defaults: {
        apikey: 'YOUR_KEY_HERE',
        mtaType: 'train',
        stations: [318, 611],
        updateInterval: 300000, // every 5 min
        walkingTime: 0,
    },

    getStyles: function () {
        return ['MMM-nyc-transit.css'];
    },

    start: function () {
        this.getDepartures();
        this.scheduleUpdate();
    },

    getDom: function () {
        var wrapper = document.createElement('div');
        var marquee = document.createElement('marquee');
        var data = this.result; // the data is not ready

        wrapper.className = 'MMM-nyc-transit';
        marquee.className = 'mta';

        if (this.result) {

            var downTown = data[0].downTown;
            var upTown = data[1].upTown;

            if (Object.keys(data).length === 0 && data.constructor === Object) {
                return wrapper;
            }

            for (var uKey in upTown) {

                if (!Object.prototype.hasOwnProperty.call(upTown, uKey)) { continue; }

                var uHtml = '';
                var upTownListItem = document.createElement('span');

                uHtml = uHtml + '<span class="mta mta__train mta__train--logo mta__train--line-' + upTown[uKey].routeId.toLowerCase() + '">' + upTown[uKey].routeId.toLowerCase() + '</span><span class="mta mta_train mta__train--time mta_train-time__' + uKey + '">' + upTown[uKey].time + 'min</span> | <span class="mta mta_train mta__train--destination">' + upTown[uKey].destination + '</span>'; /*eslint-disable-line*/

                upTownListItem.className = 'mta__train--item';
                upTownListItem.innerHTML = uHtml;
                marquee.appendChild(upTownListItem);
            }

            for (var dKey in downTown) {

                if (!Object.prototype.hasOwnProperty.call(downTown, dKey)) { continue; }
                var dHtml = '';
                var downTownListItem = document.createElement('span');

                dHtml = dHtml + '<span class="mta mta__train mta__train--logo mta__train--line-' + downTown[dKey].routeId.toLowerCase() + '">' + downTown[dKey].routeId.toLowerCase() + '</span><span class="mta mta_train mta__train--time mta_train-time__' + (parseFloat(dKey) + 4) + '">' + downTown[dKey].time + 'min</span> | <span class="mta mta_train mta__train--destination">' + downTown[dKey].destination + '</span>'; /*eslint-disable-line*/

                downTownListItem.className = 'mta__train--item';
                downTownListItem.innerHTML = dHtml;
                marquee.appendChild(downTownListItem);
            }

            wrapper.appendChild(marquee);

            return wrapper;
        } else {
            return wrapper;
        }
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
