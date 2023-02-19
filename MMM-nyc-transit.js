/* MagicMirror²
 * Module: MMM-NYC-transit
 *
 * By Elan Trybuch https://github.com/elaniobro
 * MIT Licensed.
 */

Module.register('MMM-nyc-transit', { /*eslint-disable-line*/
  // Default module config.
  defaults: {
    displayType: 'marquee',
    header: 'Next Train',
    module: 'MMM-nyc-transit',
    mtaType: 'train',
    position: 'top_bar',
    stations: [
      {
        dir: {
          upTown: true,
          downTown: true,
        },
        stationId: 237,
        walkingTime: 5,
      },
      {
        dir: {
          upTown: true,
          downTown: true,
        },
        stationId: 238,
        walkingTime: 5,
      },
    ],
    updateInterval: 300000, // every 5 min
  },

  getStyles: function () {
    return ['MMM-nyc-transit.css']
  },

  start: function () {
    this.getDepartures()
    this.scheduleUpdate()
  },

  getDom: function () {
    // Set up targetnode based on position set in config
    var targetNode = document.querySelector('.region.' + this.config.position.split('_').join('.') + ' .container')
    // set up mutation observer config options
    var config = { attributes: true, childList: true, subtree: true }
    // call back function for mutation observer
    var callback = function (mutationsList, observer) { /*eslint-disable-line*/
      // Use traditional 'for loops' for IE 11
      for (var mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var trainTimes = document.querySelectorAll('.mta__train--time span')

          trainTimes.forEach((train) => {
            // Get the train time as a Number type
            var duration = Number(
              train.textContent.split(' ')[1].split('min')[0]
            )
            var timer = duration * 60
            var minutes
            var seconds

            // Compare duration to walkingtime
            if (duration <= Number(train.dataset.walkingTime)) {
              setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10)

                // minutes = minutes < 10 ? minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds
                train.textContent = minutes + ':' + seconds + 'min'

                if (--timer < 0) {
                  timer = duration
                }
              }, 1000)
            }
          })
        }
      }
    }
    var observer = new MutationObserver(callback)
    var data = this.result // the data is not ready
    var wrapper = document.createElement('div')
    var marquee = document.createElement('marquee')
    var list = document.createElement('ul')
    var isList = this.config.displayType !== 'marquee'

    wrapper.className = 'MMM-nyc-transit'
    list.className = 'mta__train--list'
    marquee.className = 'mta__train--marquee'

    if (data) {
      var downTown = data[0].downTown
      var upTown = data[1].upTown

      if (Object.keys(data).length === 0 && data.constructor === Object) {
        return wrapper
      }

      if (isList) {
        var trainHashMap = {
          downTown: [],
          upTown: [],
        }

        downTown.forEach((train) => {
          if (!trainHashMap.downTown[this.isSIR(train.routeId)]) {
            trainHashMap.downTown[this.isSIR(train.routeId)] = {
              time: [train.time],
              dest: train.destination,
              walkingTime: train.walkingTime,
            }
          } else {
            trainHashMap.downTown[
              this.isSIR(train.routeId)
            ].time.push(train.time)
          }
        })

        for (var dKey in trainHashMap.downTown) {
          var dHtml = ''
          var downTownListItem = document.createElement('li')
          dHtml =
              dHtml +
              '<span class="mta mta__train mta__train--logo mta__train--line-' +
              dKey.toLowerCase().split("")[0] +
              " mta__train--line-" +
              this.isExpress(dKey) +
              '"><span class="' +
              this.isExpress(dKey) +
              '">' +
              dKey.toLowerCase().split("")[0] +
              "</span></span>" +
              trainHashMap.downTown[dKey].dest +
              '<span class="mta mta_train mta__train--time mta__train-time__' +
              dKey.toLowerCase() +
              '"> ' +
              trainHashMap.downTown[dKey].time
                  .slice(0, 3)
                  .map(
                      (trainTime, i) =>
                          "<span data-walking-time='" +
                          trainHashMap.downTown[dKey].walkingTime +
                          "' class='train-time__downTown-" +
                          dKey.toLowerCase() +
                          "--" +
                          i +
                          "'> " +
                          trainTime +
                          "min</span>"
                  ) +
              " </span>"; /*eslint-disable-line*/
          downTownListItem.className = 'mta__train--item mta__train--item-' + this.isExpress(dKey)
          downTownListItem.innerHTML = dHtml

          list.appendChild(downTownListItem)
        }

        upTown.forEach((train) => {
          if (!trainHashMap.upTown[this.isSIR(train.routeId)]) {
            trainHashMap.upTown[this.isSIR(train.routeId)] = {
              time: [train.time],
              dest: train.destination,
              walkingTime: train.walkingTime,
            }
          } else {
            trainHashMap.upTown[
              this.isSIR(train.routeId)
            ].time.push(train.time)
          }
        })

        for (var uKey in trainHashMap.upTown) {
          var uHtml = ''
          var upTownListItem = document.createElement('li')

          uHtml =
              uHtml +
              '<span class="mta mta__train mta__train--logo mta__train--line-' +
              uKey.toLowerCase().split("")[0] +
              " mta__train--line-" +
              this.isExpress(uKey) +
              '"><span class="' + this.isExpress(uKey) + '">' +
              uKey.toLowerCase().split("")[0] +
              "</span></span>" +
              trainHashMap.upTown[uKey].dest +
              '<span class="mta mta_train mta__train--time mta_train-time__' +
              uKey.toLowerCase() +
              '"> ' +
              trainHashMap.upTown[uKey].time
                  .slice(0, 3)
                  .map(
                      (trainTime, i) =>
                          "<span data-walking-time='" +
                          trainHashMap.upTown[uKey].walkingTime +
                          "' class='train-time__upTown-" +
                          uKey.toLowerCase() +
                          "--" +
                          i +
                          "'> " +
                          trainTime +
                          "min</span>"
                  ) +
              " </span>"; /*eslint-disable-line*/

          upTownListItem.className = 'mta__train--item  mta__train--item-' + this.isExpress(uKey);
          upTownListItem.innerHTML = uHtml

          list.appendChild(upTownListItem)
        }

        wrapper.appendChild(list)

        return wrapper
      } else {
        for (var upMarKey in upTown) {
          if (
            !Object.prototype.hasOwnProperty.call(upTown, upMarKey)
          ) {
            continue
          }

          var upMarHtml = ''
          var upTownMarListItem = document.createElement('span')


          upMarHtml = upMarHtml +
            '<span class="mta mta__train mta__train--logo mta__train--line-' +
            upTown[upMarKey].routeId.toLowerCase().split("")[0] +
            ' mta__train--line-' + this.isExpress(upTown[upMarKey].routeId) + '">' +
            '<span class="' + this.isExpress(upTown[upMarKey].routeId) + '">' +
            upTown[upMarKey].routeId.toLowerCase().split("")[0] +
            "</span></span>" +
            '</span><span class=\'mta mta_train mta__train--time mta_train-time__\'' +
            (parseFloat(upMarKey) + 4) +
            '">' +
            '<span class="mta mta_train mta__train--time mta__train-time__' +
            upMarKey.toLowerCase() +
            '"> ' +
            '<span data-walking-time=\'' +
            upTown[upMarKey].walkingTime +
            '\' class=\'train-time__upTown-' +
            upTown[upMarKey].routeId.toLowerCase() +
            '--' +
            upMarKey.toLowerCase() +
            '\'> ' +
            upTown[upMarKey].time +
            'min</span>';

          (" </span>"); /*eslint-disable-line*/

          upTownMarListItem.className = 'mta__train--item'
          upTownMarListItem.innerHTML = upMarHtml
          marquee.appendChild(upTownMarListItem)
        }

        for (var downMarKey in downTown) {
          if (
            !Object.prototype.hasOwnProperty.call(
              downTown,
              downMarKey
            )
          ) {
            continue
          }
          var downMarHtml = ''
          var downTownMarListItem = document.createElement('span')

          downMarHtml =
              downMarHtml +
              '<span class="mta mta__train mta__train--logo mta__train--line-' +
              downTown[downMarKey].routeId.toLowerCase().split("")[0] +
              " mta__train--line-" +
              this.isExpress(downTown[downMarKey].routeId) +
              '">' +
              '<span class="' +
              this.isExpress(downTown[downMarKey].routeId) +
              '">' +
              downTown[downMarKey].routeId.toLowerCase().split("")[0] +
              "</span></span>" +
              "</span><span class='mta mta_train mta__train--time mta_train-time__'" +
              (parseFloat(downMarKey) + 4) +
              '">' +
              '<span class="mta mta_train mta__train--time mta__train-time__' +
              downMarKey.toLowerCase() +
              '"> ' +
              "<span data-walking-time='" +
              downTown[downMarKey].walkingTime +
              "' class='train-time__downTown-" +
              downTown[downMarKey].routeId.toLowerCase() +
              "--" +
              downMarKey.toLowerCase() +
              "'> " +
              downTown[downMarKey].time +
              "min</span>";

          (" </span>"); /*eslint-disable-line*/

          downTownMarListItem.className = 'mta__train--item'
          downTownMarListItem.innerHTML = downMarHtml
          marquee.appendChild(downTownMarListItem)
        }

        wrapper.appendChild(marquee)

        return wrapper
      }
    }
    // observer mutation on targetNode with config obj
    observer.observe(targetNode, config)

    return wrapper
  },
  isExpress: function (id) {
    return id.split('').length === 2 ? 'express' : ''
  },
  isSIR: function (id) {
    return id === 'SI' ? 'SIR' : id === 'SS' ? 'SIR' : id
  },

  getDepartures: function () {
    var config = this.config

    this.sendSocketNotification('GET_DEPARTURES', config)
  },

  scheduleUpdate: function (delay) {
    var loadTime = this.config.updateInterval
    var that = this

    if (typeof delay !== 'undefined' && delay >= 0) {
      loadTime = delay
    }

    setInterval(function () {
      that.getDepartures()
    }, loadTime)
  },

  stationArrayEquals: function (stationsLeft, stationsRight) {
    if (stationsLeft.length !== stationsRight.length) {
      return false
    } else {
      for (var i = 0; i < stationsLeft.length; i++) {
        if (stationsLeft[i] !== stationsRight[i]) {
          return false
        }
      }

      return true
    }
  },

  socketNotificationReceived: function (notification, payload) {
    var myStations = this.config.stations.map((obj) => obj.stationId)

    if (notification === 'TRAIN_TABLE' && this.stationArrayEquals(payload['stations'], myStations)) {
      // eslint-disable-next-line no-console
      console.log('socketNotificationReceived: "TRAIN_TABLE": ', this.result)

      this.result = payload['data']
      this.updateDom(this.config.fadeSpeed)
    } else if (notification === 'DOM_OBJECTS_CREATED') {
      // eslint-disable-next-line no-console
      console.log('Dom Objects Created')
    }
  },
})
