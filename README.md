# MTA transit module for MagicMirror²

## 🛡 Badges
<!-- Social info -->
![follow on Twitte](https://img.shields.io/twitter/follow/elaniobro?style=social&logo=twitter)  ![GitHub followers](https://img.shields.io/github/followers/elaniobro?style=social)
<!-- Application info -->
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/elaniobro/MMM-nyc-transit)    [![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)  ![GitHub top language](https://img.shields.io/github/languages/top/elaniobro/MMM-nyc-transit)    ![GitHub](https://img.shields.io/github/license/elaniobro/MMM-nyc-transit) <!-- Github status -->
![GitHub issues](https://img.shields.io/github/issues/elaniobro/MMM-nyc-transit)  ![GitHub issues](https://img.shields.io/github/issues-closed/elaniobro/MMM-nyc-transit)![GitHub pull requests](https://img.shields.io/github/issues-pr/elaniobro/MMM-nyc-transit)  ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/elaniobro/MMM-nyc-transit)

<!-- ![](./mmm-nyc-transit.gif) -->

![](https://user-images.githubusercontent.com/710847/80649891-dab42300-8a40-11ea-96ac-f76926f1b109.png)

## ℹ️ How to use this module

1. clone this repo into your moducles directory with the following command: `git clone https://github.com/Elaniobro/MMM-nyc-transit`
2. install all the npm modules with either `yarn install` or `npm install`
3. update your [MagicMirror² Config](https://github.com/MagicMirrorOrg/MagicMirror/blob/master/config/config.js.sample), by adding the following object:

### 🚇 Train Configuration (no API key required)

The MTA Subway Real-Time feeds are **free and open** — no API key is needed for train data.

```javascript
  {
    module: 'MMM-nyc-transit',
    position: "top_bar",
    header: "Next Train",
    config: {
      displayType: 'list',
      mtaType: 'train',
      stations: [
        {
          stationId: 237,
          walkingTime: 5,
          dir: {
              upTown: false,
              downTown: true
          }
        },
        {
          stationId: 177,
          walkingTime: 5,
          dir: {
            upTown: true,
            downTown: false
          }
        }
      ],
      updateInterval: 300000
    }
  }
```

### 🚌 Bus Configuration (API key required)

Bus data uses the MTA Bus Time API, which **requires an API key**. See [MTA API Key](#-mta-api-key) below for how to get one.

```javascript
  {
    module: 'MMM-nyc-transit',
    position: "top_bar",
    header: "Next Bus",
    config: {
      apiKey: 'YOUR_BUS_TIME_API_KEY',
      displayType: 'list',
      mtaType: 'bus',
      stations: [
        {
          stationId: 308209,
          walkingTime: 3,
          dir: {
            upTown: true,
            downTown: false
          }
        }
      ],
      updateInterval: 300000
    }
  }
```

## 🛠️ Config

| Option | Description | Default | Required |
|---|---|---|---|
| `module` | The name of the module you are installing. | `'MMM-nyc-transit'` | Yes |
| `position` | Where the module appears. See [MM documentation](https://docs.magicmirror.builders/modules/configuration.html) for options. | `'top_bar'` | Yes |
| `header` | Display name for your module on screen. | `'Next Train'` | No |
| `displayType` | `'list'` or `'marquee'` (scrolling). List works best on side positions, marquee on top. | `'marquee'` | No |
| `apiKey` | Your MTA API key. **Only required for `mtaType: 'bus'`**. Not needed for trains. | `undefined` | Bus only |
| `mtaType` | Type of transit data to display: `'train'` or `'bus'`. | `'train'` | No |
| `stations` | Array of station config objects (see below). | — | Yes |
| `updateInterval` | How often to refresh data, in milliseconds. | `300000` (5 min) | No |

### Station Object

| Option | Description | Required |
|---|---|---|
| `stationId` | The numeric station/complex ID. Find yours in the [Station List](#-station-list). | Yes |
| `walkingTime` | Minutes to walk to the station. Pads the realtime arrival times so you only see trains you can catch. | Yes |
| `dir` | Object with `upTown` (boolean) and `downTown` (boolean) to filter direction. | Yes |

## 🔑 MTA API Key

### Subway / Train (`mtaType: 'train'`)

**No API key is required.** The MTA Subway Real-Time Data Feeds (GTFS-RT) are open and free to access without authentication.

You can browse the available subway feeds on the [MTA Subway Real-Time Feeds](https://api.mta.info/#/subwayRealTimeFeeds) page.

### Bus (`mtaType: 'bus'`)

An API key **is required** for MTA Bus Time data. To get one:

1. Visit the [MTA Bus Time Developer Portal](https://bustime.mta.info/wiki/Developers/Index)
2. Submit the API key request form
3. You will receive your key via email (typically within ~30 minutes)

## 📡 Data Sources

This module pulls real-time data from two different MTA APIs depending on the `mtaType` you configure:

| `mtaType` | API | Format | Auth | Documentation |
|---|---|---|---|---|
| `'train'` | MTA Subway GTFS-RT Feeds | [GTFS-Realtime](https://gtfs.org/realtime/) (Protocol Buffers) | None (open access) | [Subway Real-Time Feeds](https://api.mta.info/#/subwayRealTimeFeeds) |
| `'bus'` | MTA Bus Time (SIRI / GTFS-RT) | SIRI XML / JSON | API key required | [Bus Time Developer Portal](https://bustime.mta.info/wiki/Developers/Index) |

### Subway Feed URLs

The subway feeds are grouped by line. This module automatically selects the correct feed based on the lines serving your configured station(s):

| Lines | Feed |
|---|---|
| 1, 2, 3, 4, 5, 6, S | `nyct/gtfs` |
| A, C, E, H (Rockaway Shuttle) | `nyct/gtfs-ace` |
| N, Q, R, W | `nyct/gtfs-nqrw` |
| B, D, F, M | `nyct/gtfs-bdfm` |
| L | `nyct/gtfs-l` |
| G | `nyct/gtfs-g` |
| J, Z | `nyct/gtfs-jz` |
| 7 | `nyct/gtfs-7` |
| SIR (Staten Island Railway) | `nyct/gtfs-si` |

All feeds are served from `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/`. For the full interactive list, see [api.mta.info/#/subwayRealTimeFeeds](https://api.mta.info/#/subwayRealTimeFeeds).

## 🚆 Station List

Find the corresponding `Name` and `id` in the [STATION_LIST.md](STATION_LIST.md) object to insert into the config array.

## ✨ Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please open an issue](https://github.com/elaniobro/mmm-nyc-transit/issues)

## 👨🏻 Author

**Elan Trybuch**

* [github](https://www.github.com/elaniobro)
* [twitter](https://www.twitter.com/elaniobro)

### ⚖️ License

This project is licensed under the MIT License - see the LICENSE.md file for details

### 🙏🏽 Acknowledgments

* [Eric Lewis](https://github.com/ericandrewlewis/mta-realtime-subway-departures)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://elan.trybuch.com"><img src="https://avatars0.githubusercontent.com/u/710847?v=4?s=100" width="100px;" alt="Elan Trybuch"/><br /><sub><b>Elan Trybuch</b></sub></a><br /><a href="#design-elaniobro" title="Design">🎨</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=elaniobro" title="Code">💻</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/pulls?q=is%3Apr+reviewed-by%3Aelaniobro" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=elaniobro" title="Documentation">📖</a> <a href="#maintenance-elaniobro" title="Maintenance">🚧</a> <a href="#infra-elaniobro" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.ericandrewlewis.com"><img src="https://avatars2.githubusercontent.com/u/1087646?v=4?s=100" width="100px;" alt="Eric Lewis"/><br /><sub><b>Eric Lewis</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=ericandrewlewis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Kendiggity973"><img src="https://avatars2.githubusercontent.com/u/54965526?v=4?s=100" width="100px;" alt="Kendiggity973"/><br /><sub><b>Kendiggity973</b></sub></a><br /><a href="#ideas-Kendiggity973" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3AKendiggity973" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dahlio"><img src="https://avatars0.githubusercontent.com/u/52632238?v=4?s=100" width="100px;" alt="dahlio"/><br /><sub><b>dahlio</b></sub></a><br /><a href="#ideas-dahlio" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Adahlio" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jon7187"><img src="https://avatars1.githubusercontent.com/u/744623?v=4?s=100" width="100px;" alt="jon7187"/><br /><sub><b>jon7187</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Ajon7187" title="Bug reports">🐛</a> <a href="#ideas-jon7187" title="Ideas, Planning, & Feedback">🤔</a> <a href="#example-jon7187" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nipper2000h"><img src="https://avatars3.githubusercontent.com/u/60026688?v=4?s=100" width="100px;" alt="nipper2000h"/><br /><sub><b>nipper2000h</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Anipper2000h" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kurtraschke.com"><img src="https://avatars2.githubusercontent.com/u/118546?v=4?s=100" width="100px;" alt="Kurt Raschke"/><br /><sub><b>Kurt Raschke</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Akurtraschke" title="Bug reports">🐛</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=kurtraschke" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://undecidable.net/joolean/"><img src="https://avatars.githubusercontent.com/u/799596?v=4?s=100" width="100px;" alt="Julian Graham"/><br /><sub><b>Julian Graham</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Ajoolean" title="Bug reports">🐛</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=joolean" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KristjanESPERANTO"><img src="https://avatars.githubusercontent.com/u/35647502?v=4?s=100" width="100px;" alt="Kristjan ESPERANTO"/><br /><sub><b>Kristjan ESPERANTO</b></sub></a><br /><a href="#maintenance-KristjanESPERANTO" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
