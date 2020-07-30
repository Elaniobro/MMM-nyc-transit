# MTA transit module for Magic Mirror


## 🛡Badges
<!-- Social info -->
![follow on Twitte](https://img.shields.io/twitter/follow/elaniobro?style=social&logo=twitter)  ![GitHub followers](https://img.shields.io/github/followers/elaniobro?style=social)
<!-- Application info -->
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/elaniobro/MMM-nyc-transit)    [![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)  ![GitHub top language](https://img.shields.io/github/languages/top/elaniobro/MMM-nyc-transit)    ![GitHub](https://img.shields.io/github/license/elaniobro/MMM-nyc-transit) <!-- Github status -->
![GitHub issues](https://img.shields.io/github/issues/elaniobro/MMM-nyc-transit)  ![GitHub issues](https://img.shields.io/github/issues-closed/elaniobro/MMM-nyc-transit)![GitHub pull requests](https://img.shields.io/github/issues-pr/elaniobro/MMM-nyc-transit)  ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/elaniobro/MMM-nyc-transit)

<!-- ![](./mmm-nyc-transit.gif) -->

![](https://user-images.githubusercontent.com/710847/80649891-dab42300-8a40-11ea-96ac-f76926f1b109.png)

## 🌐 Languages and Tools:

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />](https://code.visualstudio.com/)
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />](https://html.spec.whatwg.org/)
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />](https://www.w3.org/Style/CSS/#specs)
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />](https://nodejs.org/)
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />](https://git-scm.com/)
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />](https://www.github.com)
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />](https://www.iterm2.com/)

<br/>
<br/>
---

## ℹ️ How to use this module
1. clone this repo into your moducles directory with the following command: `git clone https://github.com/Elaniobro/MMM-nyc-transit.git`
1. install all the npm modules with either `yarn install` or `npm install`
1. update your [Magic Mirror Config](https://github.com/MichMich/MagicMirror/blob/master/config/config.js.sample), by adding the following object:
```javascript
  {
    module: 'MMM-nyc-transit',
    position: "top_bar",
    header: "Next Train",
    config: {
      apiKey: 'YOUR_KEY_HERE',
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

## 🛠️ Config
* `module` the name of the module you are installing.
* `position` where you want the mmm-nyc-transit module to appear.
  * <span style="font-size: 12px; color: #999; font-weight: bold">_note: configurable, see MM documentation_</span>
* `header` display name for what you want to call your module on screen
  * <span style="font-size: 12px; color: #999; font-weight: bold">_note: optional_</span>
* `displayType` choose between scrolling marquee (default) or list
  * `list` - shows next 3 trains for each line, both uptown and downtown
    * <span style="font-size: 12px; color: #999; font-weight: bold">_note: works best on side_</span>
  * `marquee` - shows next 6 trains, 3 for uptown and 3 for downtown
    * <span style="font-size: 12px; color: #999; font-weight: bold">_note: works best on top_</span>
* `apiKey` see [mta api Key](#🔑-mta-api-Key) on where to obtain yours.
* `mtaType` _coming soon, choose bus and or train_
* `stations` array to store each station config.
  * `stationId` find your [station(s)](#🚆-station) id(s).
  * `walkingTime` allows you to pad the realtime data time, with travel time to the station.
  * `dir` object to hold which directions of the train to show
    * `upTown` boolean value
    * `downTown` boolean value
* `updateInterval` default is set to 5 minutes
  * __low interval will result in your MTA api key timing out__

## 🔑 MTA API Key:
You will need to sign up for the MTA Real-Time Data Feeds API. To get a key, please visit their website: [api.mta.info](https://api.mta.info/).


## 🚆 Station List:
Find the corresponding `Name` and `id` in the <a href="./STATION_LIST.md">STATION_LIST.md</a> object to insert into the config array.


## ✨ Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please open an issue](https://github.com/elaniobro/mmm-nyc-transit/issues)

## 👨🏻 Author
**Elan Trybuch**
* [github](https://www.github.com/elaniobro)
* [twitter](https://www.twitte.com/elaniobro)

### ⚖️ License
This project is licensed under the MIT License - see the LICENSE.md file for details

### 🙏🏽 Acknowledgments
* [Eric Lewis](https://github.com/ericandrewlewis/mta-realtime-subway-departures/blob/master/package.json)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://elan.trybuch.com"><img src="https://avatars0.githubusercontent.com/u/710847?v=4" width="100px;" alt=""/><br /><sub><b>Elan Trybuch</b></sub></a><br /><a href="#design-elaniobro" title="Design">🎨</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=elaniobro" title="Code">💻</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/pulls?q=is%3Apr+reviewed-by%3Aelaniobro" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=elaniobro" title="Documentation">📖</a> <a href="#maintenance-elaniobro" title="Maintenance">🚧</a> <a href="#infra-elaniobro" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://www.ericandrewlewis.com"><img src="https://avatars2.githubusercontent.com/u/1087646?v=4" width="100px;" alt=""/><br /><sub><b>Eric Lewis</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=ericandrewlewis" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Kendiggity973"><img src="https://avatars2.githubusercontent.com/u/54965526?v=4" width="100px;" alt=""/><br /><sub><b>Kendiggity973</b></sub></a><br /><a href="#ideas-Kendiggity973" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3AKendiggity973" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/dahlio"><img src="https://avatars0.githubusercontent.com/u/52632238?v=4" width="100px;" alt=""/><br /><sub><b>dahlio</b></sub></a><br /><a href="#ideas-dahlio" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Adahlio" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/jon7187"><img src="https://avatars1.githubusercontent.com/u/744623?v=4" width="100px;" alt=""/><br /><sub><b>jon7187</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Ajon7187" title="Bug reports">🐛</a> <a href="#ideas-jon7187" title="Ideas, Planning, & Feedback">🤔</a> <a href="#example-jon7187" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/nipper2000h"><img src="https://avatars3.githubusercontent.com/u/60026688?v=4" width="100px;" alt=""/><br /><sub><b>nipper2000h</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Anipper2000h" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://kurtraschke.com"><img src="https://avatars2.githubusercontent.com/u/118546?v=4" width="100px;" alt=""/><br /><sub><b>Kurt Raschke</b></sub></a><br /><a href="https://github.com/Elaniobro/MMM-nyc-transit/issues?q=author%3Akurtraschke" title="Bug reports">🐛</a> <a href="https://github.com/Elaniobro/MMM-nyc-transit/commits?author=kurtraschke" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
