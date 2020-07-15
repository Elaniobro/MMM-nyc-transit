/* Magic Mirror
 * Module: MMM-NYC-transit
 *
 * By Elan Trybuch https://github.com/elaniobro
 * MIT Licensed.
 */

Module.register('MMM-nyc-transit', {  /*eslint-disable-line*/
  resutl: {},
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
    var targetNode = document.querySelector(
      '.region.' + this.config.position.split('_').join('.') + ' .container'
    )
    // set up mutation observer config options
    var config = { attributes: true, childList: true, subtree: true }
    // call back function for mutation observer
        var callback = function (mutationsList, observer) { /*eslint-disable-line*/
      // Use traditional 'for loops' for IE 11
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var trainTimes = document.querySelectorAll(
            '.mta__train--time span'
          )

          trainTimes.forEach((train) => {
            // Get the train time as a Number type
            var duration = Number(train.textContent
              .split(' ')[1]
              .split('min')[0])
            var timer = duration * 60
            var minutes
            var seconds

            // Compare duration to walkingtime
            if( duration <= Number(train.dataset.walkingTime)){
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

    if (Object.keys(data).length === 0 && data.constructor === Object) {
        return wrapper;
    }

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
          if (!trainHashMap.downTown[train.routeId]) {
            trainHashMap.downTown[train.routeId] = {
              time: [train.time],
              dest: train.destination,
              walkingTime: train.walkingTime
            }
          } else {
            trainHashMap.downTown[train.routeId].time.push(
              train.time
            )
          }
        })

        for (var dKey in trainHashMap.downTown) {
          var dHtml = ''
          var downTownListItem = document.createElement('li')

          dHtml =
            dHtml +
            '<span class="mta mta__train mta__train--logo mta__train--line-' +
            dKey.toLowerCase() +
            '">' +
            dKey +
            '</span>' +
            trainHashMap.downTown[dKey].dest +
            '<span class="mta mta_train mta__train--time mta__train-time__' +
            dKey.toLowerCase() +
            '"> ' +
            trainHashMap.downTown[dKey].time
              .slice(0, 3)
              .map(
                (trainTime, i) =>
                  '<span data-walking-time=\'' +
                        trainHashMap.downTown[dKey].walkingTime +
                        '\' class=\'train-time__downTown-' +
                        dKey.toLowerCase() +
                        '--' +
                        i +
                        '\'> ' +
                        trainTime +
                        'min</span>'
              ) +
            " </span>"; /*eslint-disable-line*/
          downTownListItem.className = 'mta__train--item'
          downTownListItem.innerHTML = dHtml

          list.appendChild(downTownListItem)
        }

        upTown.forEach((train) => {
          if (!trainHashMap.upTown[train.routeId]) {
            trainHashMap.upTown[train.routeId] = {
              time: [train.time],
              dest: train.destination,
              walkingTime: train.walkingTime
            }
          } else {
            trainHashMap.upTown[train.routeId].time.push(
              train.time
            )
          }
        })

        for (var uKey in trainHashMap.upTown) {
          var uHtml = ''
          var upTownListItem = document.createElement('li')

          uHtml =
            uHtml +
            '<span class="mta mta__train mta__train--logo mta__train--line-' +
            uKey.toLowerCase() +
            '">' +
            uKey +
            '</span>' +
            trainHashMap.upTown[uKey].dest +
            '<span class="mta mta_train mta__train--time mta_train-time__' +
            uKey.toLowerCase() +
            '"> ' +
            trainHashMap.upTown[uKey].time
              .slice(0, 3)
              .map(
                (trainTime, i) =>
                  '<span data-walking-time=\'' +
                        trainHashMap.upTown[uKey].walkingTime +
                        '\' class=\'train-time__upTown-' +
                        uKey.toLowerCase() +
                        '--' +
                        i +
                        '\'> ' +
                        trainTime +
                        'min</span>'
              ) +
            " </span>"; /*eslint-disable-line*/

          upTownListItem.className = 'mta__train--item'
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

          upMarHtml =
            upMarHtml +
            '<span class="mta mta__train mta__train--logo mta__train--line-' +
            upTown[upMarKey].routeId.toLowerCase() +
            '">' +
            upTown[upMarKey].routeId.toLowerCase() +
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
            downTown[downMarKey].routeId.toLowerCase() +
            '">' +
            downTown[downMarKey].routeId.toLowerCase() +
            '</span><span class=\'mta mta_train mta__train--time mta_train-time__\'' +
            (parseFloat(downMarKey) + 4) +
            '">' +
            '<span class="mta mta_train mta__train--time mta__train-time__' +
            downMarKey.toLowerCase() +
            '"> ' +
            '<span data-walking-time=\'' +
            downTown[downMarKey].walkingTime +
            '\' class=\'train-time__downTown-' +
            downTown[downMarKey].routeId.toLowerCase() +
            '--' +
            downMarKey.toLowerCase() +
            '\'> ' +
            downTown[downMarKey].time +
            'min</span>'

            " </span>"; /*eslint-disable-line*/

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

  startTimer: function (duration, display) {
    var timer = duration,
      minutes,
      seconds

    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      display.textContent = minutes + ':' + seconds

      if (--timer < 0) {
        timer = duration
      }
    }, 1000)
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === 'TRAIN_TABLE') {
      // eslint-disable-next-line no-console
      console.log(
        'socketNotificationReceived: "TRAIN_TABLE": ',
        this.result
      )

      this.result = payload
      this.updateDom()
    } else if (notification === 'DOM_OBJECTS_CREATED') {
      // eslint-disable-next-line no-console
      console.log(
        'Dom Objects Created'
      )
    }
  },
})
