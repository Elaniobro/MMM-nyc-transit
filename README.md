# MTA transit module for Magic Mirror
![](./mmm-nyc-transit.gif)
## ℹ️ How to use this module
1. clone this repo with the following command: `git clone https://github.com/Elaniobro/MMM-nyc-transit.git`
1. install all the npm modules with either `yarn install` or `npm install`
1. update your [Magic Mirror Config](https://github.com/MichMich/MagicMirror/blob/master/config/config.js.sample), by adding the following object:
```javascript
  {
    module: 'MMM-nyc-transit',
    position: "top_bar",
    header: "Next Train",
    config: {
      apiKey: 'YOUR_KEY_HERE',
      mtaType: 'train',
      stations: [237,238],
      updateInterval: 300000,
      walkingTime: 5,
    }
  }
```
1. enjoy!

## 🛠️ Config
* `module` the name of the module you are installing.
* `position` where you want the mmm-nyc-transit module to appear. (**note: works best on top**)
* `header` display name for what you want to call your module on screen
* `apiKey` see [mta api Key](#🔑-mta-api-Key) on where to obtain yours.
* `mtaType` _coming soon, choose bus and or train_
* `stations` find your [station(s)](#🚆-station) id(s) below.
* `updateInterval` default is set to 5 minutes
* `walkingTime` allows you to pad the realtime data time, with travel time to the station.


## 🔑 MTA API Key:
You will need to sign up for the MTA Real-Time Data Feeds API. To get a key, please visit their website: [datamine.mta.info](https://datamine.mta.info/).


## 🚆 Station List:
Find the corresponding station list ID from the below object to insert into the config array.

```javascript
stations: {
  {
    "id": : 119,
    "name": "1 Av"
  },
  {
    "id": : 450,
    "name": "103 St - Corona Plaza"
  },
  {
    "id": : 156,
    "name": "103 St"
  },
  {
    "id": : 309,
    "name": "103 St"
  },
  {
    "id": : 395,
    "name": "103 St"
  },
  {
    "id": : 193,
    "name": "104 St"
  },
  {
    "id": : 82,
    "name": "104 St"
  },
  {
    "id": : 394,
    "name": "110 St"
  },
  {
    "id": : 194,
    "name": "111 St"
  },
  {
    "id": : 449,
    "name": "111 St"
  },
  {
    "id": : 81,
    "name": "111 St"
  },
  {
    "id": : 307,
    "name": "116 St - Columbia University"
  },
  {
    "id": : 154,
    "name": "116 St"
  },
  {
    "id": : 393,
    "name": "116 St"
  },
  {
    "id": : 440,
    "name": "116 St"
  },
  {
    "id": : 80,
    "name": "121 St"
  },
  {
    "id": : 153,
    "name": "125 St"
  },
  {
    "id": : 306,
    "name": "125 St"
  },
  {
    "id": : 392,
    "name": "125 St"
  },
  {
    "id": : 439,
    "name": "125 St"
  },
  {
    "id": : 152,
    "name": "135 St"
  },
  {
    "id": : 438,
    "name": "135 St"
  },
  {
    "id": : 305,
    "name": "137 St - City College"
  },
  {
    "id": : 391,
    "name": "138 St - Grand Concourse"
  },
  {
    "id": : 602,
    "name": "14 St - Union Sq"
  },
  {
    "id": : 601,
    "name": "14 St / 6 Av"
  },
  {
    "id": : 618,
    "name": "14 St / 8 Av"
  },
  {
    "id": : 151,
    "name": "145 St"
  },
  {
    "id": : 304,
    "name": "145 St"
  },
  {
    "id": : 437,
    "name": "145 St"
  },
  {
    "id": : 603,
    "name": "149 St - Grand Concourse"
  },
  {
    "id": : 241,
    "name": "15 St - Prospect Park"
  },
  {
    "id": : 150,
    "name": "155 St"
  },
  {
    "id": : 220,
    "name": "155 St"
  },
  {
    "id": : 303,
    "name": "157 St"
  },
  {
    "id": : 604,
    "name": "161 St - Yankee Stadium"
  },
  {
    "id": : 149,
    "name": "163 St - Amsterdam Av"
  },
  {
    "id": : 218,
    "name": "167 St"
  },
  {
    "id": : 388,
    "name": "167 St"
  },
  {
    "id": : 605,
    "name": "168 St - Washington Hts"
  },
  {
    "id": : 255,
    "name": "169 St"
  },
  {
    "id": : 217,
    "name": "170 St"
  },
  {
    "id": : 387,
    "name": "170 St"
  },
  {
    "id": : 428,
    "name": "174 St"
  },
  {
    "id": : 216,
    "name": "174-175 Sts"
  },
  {
    "id": : 147,
    "name": "175 St"
  },
  {
    "id": : 385,
    "name": "176 St"
  },
  {
    "id": : 245,
    "name": "18 Av"
  },
  {
    "id": : 66,
    "name": "18 Av"
  },
  {
    "id": : 74,
    "name": "18 Av"
  },
  {
    "id": : 321,
    "name": "18 St"
  },
  {
    "id": : 146,
    "name": "181 St"
  },
  {
    "id": : 301,
    "name": "181 St"
  },
  {
    "id": : 214,
    "name": "182-183 Sts"
  },
  {
    "id": : 383,
    "name": "183 St"
  },
  {
    "id": : 145,
    "name": "190 St"
  },
  {
    "id": : 300,
    "name": "191 St"
  },
  {
    "id": : 232,
    "name": "2 Av"
  },
  {
    "id": : 67,
    "name": "20 Av"
  },
  {
    "id": : 75,
    "name": "20 Av"
  },
  {
    "id": : 298,
    "name": "207 St"
  },
  {
    "id": : 221,
    "name": "21 St - Queensbridge"
  },
  {
    "id": : 282,
    "name": "21 St"
  },
  {
    "id": : 297,
    "name": "215 St"
  },
  {
    "id": : 420,
    "name": "219 St"
  },
  {
    "id": : 419,
    "name": "225 St"
  },
  {
    "id": : 14,
    "name": "23 St"
  },
  {
    "id": : 165,
    "name": "23 St"
  },
  {
    "id": : 228,
    "name": "23 St"
  },
  {
    "id": : 320,
    "name": "23 St"
  },
  {
    "id": : 405,
    "name": "23 St"
  },
  {
    "id": : 295,
    "name": "231 St"
  },
  {
    "id": : 418,
    "name": "233 St"
  },
  {
    "id": : 294,
    "name": "238 St"
  },
  {
    "id": : 69,
    "name": "25 Av"
  },
  {
    "id": : 31,
    "name": "25 St"
  },
  {
    "id": : 13,
    "name": "28 St"
  },
  {
    "id": : 319,
    "name": "28 St"
  },
  {
    "id": : 404,
    "name": "28 St"
  },
  {
    "id": : 377,
    "name": "3 Av - 138 St"
  },
  {
    "id": : 434,
    "name": "3 Av - 149 St"
  },
  {
    "id": : 118,
    "name": "3 Av"
  },
  {
    "id": : 3,
    "name": "30 Av"
  },
  {
    "id": : 403,
    "name": "33 St"
  },
  {
    "id": : 460,
    "name": "33 St"
  },
  {
    "id": : 471,
    "name": "34 St - 11 Av"
  },
  {
    "id": : 607,
    "name": "34 St - Herald Sq"
  },
  {
    "id": : 164,
    "name": "34 St - Penn Station"
  },
  {
    "id": : 318,
    "name": "34 St - Penn Station"
  },
  {
    "id": : 5,
    "name": "36 Av"
  },
  {
    "id": : 272,
    "name": "36 St"
  },
  {
    "id": : 32,
    "name": "36 St"
  },
  {
    "id": : 6,
    "name": "39 Av"
  },
  {
    "id": : 608,
    "name": "4 Av - 9 St"
  },
  {
    "id": : 459,
    "name": "40 St"
  },
  {
    "id": : 609,
    "name": "42 St - Bryant Pk / 5 Av"
  },
  {
    "id": : 33,
    "name": "45 St"
  },
  {
    "id": : 270,
    "name": "46 St"
  },
  {
    "id": : 458,
    "name": "46 St"
  },
  {
    "id": : 225,
    "name": "47-50 Sts - Rockefeller Ctr"
  },
  {
    "id": : 10,
    "name": "49 St"
  },
  {
    "id": : 276,
    "name": "5 Av/53 St"
  },
  {
    "id": : 8,
    "name": "5 Av/59 St"
  },
  {
    "id": : 162,
    "name": "50 St"
  },
  {
    "id": : 316,
    "name": "50 St"
  },
  {
    "id": : 61,
    "name": "50 St"
  },
  {
    "id": : 457,
    "name": "52 St"
  },
  {
    "id": : 34,
    "name": "53 St"
  },
  {
    "id": : 62,
    "name": "55 St"
  },
  {
    "id": : 9,
    "name": "57 St - 7 Av"
  },
  {
    "id": : 224,
    "name": "57 St"
  },
  {
    "id": : 614,
    "name": "59 St - Columbus Circle"
  },
  {
    "id": : 35,
    "name": "59 St"
  },
  {
    "id": : 615,
    "name": "62 St / New Utrecht Av"
  },
  {
    "id": : 263,
    "name": "63 Dr - Rego Park"
  },
  {
    "id": : 268,
    "name": "65 St"
  },
  {
    "id": : 314,
    "name": "66 St - Lincoln Center"
  },
  {
    "id": : 262,
    "name": "67 Av"
  },
  {
    "id": : 399,
    "name": "68 St - Hunter College"
  },
  {
    "id": : 455,
    "name": "69 St"
  },
  {
    "id": : 240,
    "name": "7 Av"
  },
  {
    "id": : 277,
    "name": "7 Av"
  },
  {
    "id": : 41,
    "name": "7 Av"
  },
  {
    "id": : 64,
    "name": "71 St"
  },
  {
    "id": : 160,
    "name": "72 St"
  },
  {
    "id": : 313,
    "name": "72 St"
  },
  {
    "id": : 477,
    "name": "72 St"
  },
  {
    "id": : 260,
    "name": "75 Av"
  },
  {
    "id": : 85,
    "name": "75 St"
  },
  {
    "id": : 37,
    "name": "77 St"
  },
  {
    "id": : 398,
    "name": "77 St"
  },
  {
    "id": : 312,
    "name": "79 St"
  },
  {
    "id": : 65,
    "name": "79 St"
  },
  {
    "id": : 71,
    "name": "8 Av"
  },
  {
    "id": : 16,
    "name": "8 St - NYU"
  },
  {
    "id": : 190,
    "name": "80 St"
  },
  {
    "id": : 159,
    "name": "81 St - Museum of Natural History"
  },
  {
    "id": : 453,
    "name": "82 St - Jackson Hts"
  },
  {
    "id": : 84,
    "name": "85 St - Forest Pkwy"
  },
  {
    "id": : 158,
    "name": "86 St"
  },
  {
    "id": : 311,
    "name": "86 St"
  },
  {
    "id": : 38,
    "name": "86 St"
  },
  {
    "id": : 397,
    "name": "86 St"
  },
  {
    "id": : 476,
    "name": "86 St"
  },
  {
    "id": : 79,
    "name": "86 St"
  },
  {
    "id": : 191,
    "name": "88 St"
  },
  {
    "id": : 59,
    "name": "9 Av"
  },
  {
    "id": : 452,
    "name": "90 St - Elmhurst Av"
  },
  {
    "id": : 157,
    "name": "96 St"
  },
  {
    "id": : 310,
    "name": "96 St"
  },
  {
    "id": : 396,
    "name": "96 St"
  },
  {
    "id": : 475,
    "name": "96 St"
  },
  {
    "id": : 91,
    "name": "Alabama Av"
  },
  {
    "id": : 423,
    "name": "Allerton Av"
  },
  {
    "id": : 515,
    "name": "Annadale"
  },
  {
    "id": : 197,
    "name": "Aqueduct - N Conduit Av"
  },
  {
    "id": : 196,
    "name": "Aqueduct Racetrack"
  },
  {
    "id": : 523,
    "name": "Arthur Kill"
  },
  {
    "id": : 407,
    "name": "Astor Pl"
  },
  {
    "id": : 1,
    "name": "Astoria - Ditmars Blvd"
  },
  {
    "id": : 2,
    "name": "Astoria Blvd"
  },
  {
    "id": : 617,
    "name": "Atlantic Av-Barclays Ctr"
  },
  {
    "id": : 133,
    "name": "Atlantic Av"
  },
  {
    "id": : 48,
    "name": "Avenue H"
  },
  {
    "id": : 246,
    "name": "Avenue I"
  },
  {
    "id": : 49,
    "name": "Avenue J"
  },
  {
    "id": : 50,
    "name": "Avenue M"
  },
  {
    "id": : 248,
    "name": "Avenue N"
  },
  {
    "id": : 249,
    "name": "Avenue P"
  },
  {
    "id": : 251,
    "name": "Avenue U"
  },
  {
    "id": : 52,
    "name": "Avenue U"
  },
  {
    "id": : 78,
    "name": "Avenue U"
  },
  {
    "id": : 252,
    "name": "Avenue X"
  },
  {
    "id": : 70,
    "name": "Bay 50 St"
  },
  {
    "id": : 247,
    "name": "Bay Pkwy"
  },
  {
    "id": : 68,
    "name": "Bay Pkwy"
  },
  {
    "id": : 76,
    "name": "Bay Pkwy"
  },
  {
    "id": : 39,
    "name": "Bay Ridge - 95 St"
  },
  {
    "id": : 36,
    "name": "Bay Ridge Av"
  },
  {
    "id": : 512,
    "name": "Bay Terrace"
  },
  {
    "id": : 443,
    "name": "Baychester Av"
  },
  {
    "id": : 202,
    "name": "Beach 105 St"
  },
  {
    "id": : 208,
    "name": "Beach 25 St"
  },
  {
    "id": : 207,
    "name": "Beach 36 St"
  },
  {
    "id": : 206,
    "name": "Beach 44 St"
  },
  {
    "id": : 205,
    "name": "Beach 60 St"
  },
  {
    "id": : 204,
    "name": "Beach 67 St"
  },
  {
    "id": : 200,
    "name": "Beach 90 St"
  },
  {
    "id": : 201,
    "name": "Beach 98 St"
  },
  {
    "id": : 289,
    "name": "Bedford - Nostrand Avs"
  },
  {
    "id": : 120,
    "name": "Bedford Av"
  },
  {
    "id": : 380,
    "name": "Bedford Park Blvd - Lehman College"
  },
  {
    "id": : 211,
    "name": "Bedford Park Blvd"
  },
  {
    "id": : 236,
    "name": "Bergen St"
  },
  {
    "id": : 339,
    "name": "Bergen St"
  },
  {
    "id": : 45,
    "name": "Beverley Rd"
  },
  {
    "id": : 357,
    "name": "Beverly Rd"
  },
  {
    "id": : 620,
    "name": "Borough Hall / Court St"
  },
  {
    "id": : 103,
    "name": "Bowery"
  },
  {
    "id": : 414,
    "name": "Bowling Green"
  },
  {
    "id": : 258,
    "name": "Briarwood - Van Wyck Blvd"
  },
  {
    "id": : 55,
    "name": "Brighton Beach"
  },
  {
    "id": : 199,
    "name": "Broad Channel"
  },
  {
    "id": : 107,
    "name": "Broad St"
  },
  {
    "id": : 621,
    "name": "Broadway Junction"
  },
  {
    "id": : 619,
    "name": "Broadway-Lafayette St / Bleecker St"
  },
  {
    "id": : 286,
    "name": "Broadway"
  },
  {
    "id": : 4,
    "name": "Broadway"
  },
  {
    "id": : 425,
    "name": "Bronx Park East"
  },
  {
    "id": : 376,
    "name": "Brook Av"
  },
  {
    "id": : 622,
    "name": "Brooklyn Bridge-City Hall/Chambers St"
  },
  {
    "id": : 361,
    "name": "Buhre Av"
  },
  {
    "id": : 422,
    "name": "Burke Av"
  },
  {
    "id": : 384,
    "name": "Burnside Av"
  },
  {
    "id": : 131,
    "name": "Bushwick Av - Aberdeen St"
  },
  {
    "id": : 169,
    "name": "Canal St"
  },
  {
    "id": : 325,
    "name": "Canal St"
  },
  {
    "id": : 623,
    "name": "Canal St"
  },
  {
    "id": : 138,
    "name": "Canarsie - Rockaway Pkwy"
  },
  {
    "id": : 237,
    "name": "Carroll St"
  },
  {
    "id": : 365,
    "name": "Castle Hill Av"
  },
  {
    "id": : 155,
    "name": "Cathedral Pkwy (110 St)"
  },
  {
    "id": : 308,
    "name": "Cathedral Pkwy"
  },
  {
    "id": : 114,
    "name": "Central Av"
  },
  {
    "id": : 441,
    "name": "Central Park North (110 St)"
  },
  {
    "id": : 624,
    "name": "Chambers St / WTC / Park Place"
  },
  {
    "id": : 327,
    "name": "Chambers St"
  },
  {
    "id": : 93,
    "name": "Chauncey St"
  },
  {
    "id": : 323,
    "name": "Christopher St - Sheridan Sq"
  },
  {
    "id": : 243,
    "name": "Church Av"
  },
  {
    "id": : 356,
    "name": "Church Av"
  },
  {
    "id": : 44,
    "name": "Church Av"
  },
  {
    "id": : 20,
    "name": "City Hall"
  },
  {
    "id": : 334,
    "name": "Clark St"
  },
  {
    "id": : 290,
    "name": "Classon Av"
  },
  {
    "id": : 89,
    "name": "Cleveland St"
  },
  {
    "id": : 504,
    "name": "Clifton"
  },
  {
    "id": : 177,
    "name": "Clinton - Washington Avs"
  },
  {
    "id": : 291,
    "name": "Clinton - Washington Avs"
  },
  {
    "id": : 58,
    "name": "Coney Island - Stillwell Av"
  },
  {
    "id": : 46,
    "name": "Cortelyou Rd"
  },
  {
    "id": : 21,
    "name": "Cortlandt St"
  },
  {
    "id": : 328,
    "name": "Cortlandt St"
  },
  {
    "id": : 606,
    "name": "Court Sq - 23 St"
  },
  {
    "id": : 87,
    "name": "Crescent St"
  },
  {
    "id": : 345,
    "name": "Crown Hts - Utica Av"
  },
  {
    "id": : 375,
    "name": "Cypress Av"
  },
  {
    "id": : 86,
    "name": "Cypress Hills"
  },
  {
    "id": : 127,
    "name": "DeKalb Av"
  },
  {
    "id": : 26,
    "name": "DeKalb Av"
  },
  {
    "id": : 625,
    "name": "Delancey St / Essex St"
  },
  {
    "id": : 244,
    "name": "Ditmas Av"
  },
  {
    "id": : 507,
    "name": "Dongan Hills"
  },
  {
    "id": : 144,
    "name": "Dyckman St"
  },
  {
    "id": : 299,
    "name": "Dyckman St"
  },
  {
    "id": : 137,
    "name": "E 105 St"
  },
  {
    "id": : 374,
    "name": "E 143 St - St Mary's St"
  },
  {
    "id": : 373,
    "name": "E 149 St"
  },
  {
    "id": : 426,
    "name": "E 180 St"
  },
  {
    "id": : 234,
    "name": "East Broadway"
  },
  {
    "id": : 442,
    "name": "Eastchester - Dyre Av"
  },
  {
    "id": : 341,
    "name": "Eastern Pkwy - Brooklyn Museum"
  },
  {
    "id": : 369,
    "name": "Elder Av"
  },
  {
    "id": : 266,
    "name": "Elmhurst Av"
  },
  {
    "id": : 514,
    "name": "Eltingville"
  },
  {
    "id": : 188,
    "name": "Euclid Av"
  },
  {
    "id": : 209,
    "name": "Far Rockaway - Mott Av"
  },
  {
    "id": : 359,
    "name": "Flatbush Av - Brooklyn College"
  },
  {
    "id": : 447,
    "name": "Flushing - Main St"
  },
  {
    "id": : 287,
    "name": "Flushing Av"
  },
  {
    "id": : 98,
    "name": "Flushing Av"
  },
  {
    "id": : 213,
    "name": "Fordham Rd"
  },
  {
    "id": : 382,
    "name": "Fordham Rd"
  },
  {
    "id": : 110,
    "name": "Forest Av"
  },
  {
    "id": : 261,
    "name": "Forest Hills - 71 Av"
  },
  {
    "id": : 242,
    "name": "Fort Hamilton Pkwy"
  },
  {
    "id": : 60,
    "name": "Fort Hamilton Pkwy"
  },
  {
    "id": : 72,
    "name": "Fort Hamilton Pkwy"
  },
  {
    "id": : 626,
    "name": "Franklin Av / Botanic Garden"
  },
  {
    "id": : 627,
    "name": "Franklin Av"
  },
  {
    "id": : 326,
    "name": "Franklin St"
  },
  {
    "id": : 429,
    "name": "Freeman St"
  },
  {
    "id": : 109,
    "name": "Fresh Pond Rd"
  },
  {
    "id": : 292,
    "name": "Fulton St"
  },
  {
    "id": : 628,
    "name": "Fulton St"
  },
  {
    "id": : 95,
    "name": "Gates Av"
  },
  {
    "id": : 122,
    "name": "Graham Av"
  },
  {
    "id": : 340,
    "name": "Grand Army Plaza"
  },
  {
    "id": : 265,
    "name": "Grand Av - Newtown"
  },
  {
    "id": : 610,
    "name": "Grand Central - 42 St"
  },
  {
    "id": : 123,
    "name": "Grand St"
  },
  {
    "id": : 231,
    "name": "Grand St"
  },
  {
    "id": : 189,
    "name": "Grant Av"
  },
  {
    "id": : 509,
    "name": "Grant City"
  },
  {
    "id": : 505,
    "name": "Grasmere"
  },
  {
    "id": : 513,
    "name": "Great Kills"
  },
  {
    "id": : 283,
    "name": "Greenpoint Av"
  },
  {
    "id": : 421,
    "name": "Gun Hill Rd"
  },
  {
    "id": : 444,
    "name": "Gun Hill Rd"
  },
  {
    "id": : 129,
    "name": "Halsey St"
  },
  {
    "id": : 94,
    "name": "Halsey St"
  },
  {
    "id": : 436,
    "name": "Harlem - 148 St"
  },
  {
    "id": : 100,
    "name": "Hewes St"
  },
  {
    "id": : 173,
    "name": "High St"
  },
  {
    "id": : 324,
    "name": "Houston St"
  },
  {
    "id": : 198,
    "name": "Howard Beach - JFK Airport"
  },
  {
    "id": : 175,
    "name": "Hoyt - Schermerhorn Sts"
  },
  {
    "id": : 336,
    "name": "Hoyt St"
  },
  {
    "id": : 516,
    "name": "Huguenot"
  },
  {
    "id": : 463,
    "name": "Hunters Point Av"
  },
  {
    "id": : 371,
    "name": "Hunts Point Av"
  },
  {
    "id": : 431,
    "name": "Intervale Av"
  },
  {
    "id": : 143,
    "name": "Inwood - 207 St"
  },
  {
    "id": : 433,
    "name": "Jackson Av"
  },
  {
    "id": : 616,
    "name": "Jackson Hts-Roosevelt Av / 74 St"
  },
  {
    "id": : 254,
    "name": "Jamaica - 179 St"
  },
  {
    "id": : 280,
    "name": "Jamaica - Van Wyck"
  },
  {
    "id": : 278,
    "name": "Jamaica Center - Parsons/Archer"
  },
  {
    "id": : 636,
    "name": "Jay St - MetroTech"
  },
  {
    "id": : 508,
    "name": "Jefferson Av"
  },
  {
    "id": : 126,
    "name": "Jefferson St"
  },
  {
    "id": : 451,
    "name": "Junction Blvd"
  },
  {
    "id": : 349,
    "name": "Junius St"
  },
  {
    "id": : 259,
    "name": "Kew Gardens - Union Tpke"
  },
  {
    "id": : 250,
    "name": "Kings Hwy"
  },
  {
    "id": : 51,
    "name": "Kings Hwy"
  },
  {
    "id": : 77,
    "name": "Kings Hwy"
  },
  {
    "id": : 212,
    "name": "Kingsbridge Rd"
  },
  {
    "id": : 381,
    "name": "Kingsbridge Rd"
  },
  {
    "id": : 180,
    "name": "Kingston - Throop Avs"
  },
  {
    "id": : 344,
    "name": "Kingston Av"
  },
  {
    "id": : 113,
    "name": "Knickerbocker Av"
  },
  {
    "id": : 96,
    "name": "Kosciuszko St"
  },
  {
    "id": : 176,
    "name": "Lafayette Av"
  },
  {
    "id": : 612,
    "name": "Lexington Av / 51 St"
  },
  {
    "id": : 613,
    "name": "Lexington Av / 59 St"
  },
  {
    "id": : 223,
    "name": "Lexington Av/63 St"
  },
  {
    "id": : 185,
    "name": "Liberty Av"
  },
  {
    "id": : 135,
    "name": "Livonia Av"
  },
  {
    "id": : 372,
    "name": "Longwood Av"
  },
  {
    "id": : 99,
    "name": "Lorimer St"
  },
  {
    "id": : 296,
    "name": "Marble Hill - 225 St"
  },
  {
    "id": : 101,
    "name": "Marcy Av"
  },
  {
    "id": : 629,
    "name": "Metropolitan Av / Lorimer St"
  },
  {
    "id": : 448,
    "name": "Mets - Willets Point"
  },
  {
    "id": : 108,
    "name": "Middle Village - Metropolitan Av"
  },
  {
    "id": : 362,
    "name": "Middletown Rd"
  },
  {
    "id": : 124,
    "name": "Montrose Av"
  },
  {
    "id": : 125,
    "name": "Morgan Av"
  },
  {
    "id": : 446,
    "name": "Morris Park"
  },
  {
    "id": : 368,
    "name": "Morrison Av- Sound View"
  },
  {
    "id": : 379,
    "name": "Mosholu Pkwy"
  },
  {
    "id": : 386,
    "name": "Mt Eden Av"
  },
  {
    "id": : 288,
    "name": "Myrtle - Willoughby Avs"
  },
  {
    "id": : 630,
    "name": "Myrtle - Wyckoff Avs"
  },
  {
    "id": : 97,
    "name": "Myrtle Av"
  },
  {
    "id": : 284,
    "name": "Nassau Av"
  },
  {
    "id": : 53,
    "name": "Neck Rd"
  },
  {
    "id": : 253,
    "name": "Neptune Av"
  },
  {
    "id": : 417,
    "name": "Nereid Av"
  },
  {
    "id": : 337,
    "name": "Nevins St"
  },
  {
    "id": : 510,
    "name": "New Dorp"
  },
  {
    "id": : 136,
    "name": "New Lots Av"
  },
  {
    "id": : 352,
    "name": "New Lots Av"
  },
  {
    "id": : 358,
    "name": "Newkirk Av"
  },
  {
    "id": : 47,
    "name": "Newkirk Plaza"
  },
  {
    "id": : 269,
    "name": "Northern Blvd"
  },
  {
    "id": : 210,
    "name": "Norwood - 205 St"
  },
  {
    "id": : 88,
    "name": "Norwood Av"
  },
  {
    "id": : 179,
    "name": "Nostrand Av"
  },
  {
    "id": : 343,
    "name": "Nostrand Av"
  },
  {
    "id": : 511,
    "name": "Oakwood Heights"
  },
  {
    "id": : 56,
    "name": "Ocean Pkwy"
  },
  {
    "id": : 506,
    "name": "Old Town"
  },
  {
    "id": : 195,
    "name": "Ozone Park - Lefferts Blvd"
  },
  {
    "id": : 141,
    "name": "Park Pl"
  },
  {
    "id": : 366,
    "name": "Parkchester"
  },
  {
    "id": : 43,
    "name": "Parkside Av"
  },
  {
    "id": : 256,
    "name": "Parsons Blvd"
  },
  {
    "id": : 360,
    "name": "Pelham Bay Park"
  },
  {
    "id": : 424,
    "name": "Pelham Pkwy"
  },
  {
    "id": : 445,
    "name": "Pelham Pkwy"
  },
  {
    "id": : 350,
    "name": "Pennsylvania Av"
  },
  {
    "id": : 518,
    "name": "Pleasant Plains"
  },
  {
    "id": : 353,
    "name": "President St"
  },
  {
    "id": : 17,
    "name": "Prince St"
  },
  {
    "id": : 517,
    "name": "Prince's Bay"
  },
  {
    "id": : 30,
    "name": "Prospect Av"
  },
  {
    "id": : 432,
    "name": "Prospect Av"
  },
  {
    "id": : 42,
    "name": "Prospect Park"
  },
  {
    "id": : 273,
    "name": "Queens Plaza"
  },
  {
    "id": : 461,
    "name": "Queensboro Plaza"
  },
  {
    "id": : 182,
    "name": "Ralph Av"
  },
  {
    "id": : 22,
    "name": "Rector St"
  },
  {
    "id": : 329,
    "name": "Rector St"
  },
  {
    "id": : 519,
    "name": "Richmond Valley"
  },
  {
    "id": : 183,
    "name": "Rockaway Av"
  },
  {
    "id": : 348,
    "name": "Rockaway Av"
  },
  {
    "id": : 192,
    "name": "Rockaway Blvd"
  },
  {
    "id": : 203,
    "name": "Rockaway Park - Beach 116 St"
  },
  {
    "id": : 222,
    "name": "Roosevelt Island"
  },
  {
    "id": : 347,
    "name": "Saratoga Av"
  },
  {
    "id": : 111,
    "name": "Seneca Av"
  },
  {
    "id": : 54,
    "name": "Sheepshead Bay"
  },
  {
    "id": : 187,
    "name": "Shepherd Av"
  },
  {
    "id": : 430,
    "name": "Simpson St"
  },
  {
    "id": : 238,
    "name": "Smith - 9 Sts"
  },
  {
    "id": : 635,
    "name": "South Ferry / Whitehall"
  },
  {
    "id": : 168,
    "name": "Spring St"
  },
  {
    "id": : 409,
    "name": "Spring St"
  },
  {
    "id": : 501,
    "name": "St George"
  },
  {
    "id": : 367,
    "name": "St Lawrence Av"
  },
  {
    "id": : 503,
    "name": "Stapleton"
  },
  {
    "id": : 271,
    "name": "Steinway St"
  },
  {
    "id": : 354,
    "name": "Sterling St"
  },
  {
    "id": : 279,
    "name": "Sutphin Blvd - Archer Av - JFK Airport"
  },
  {
    "id": : 257,
    "name": "Sutphin Blvd"
  },
  {
    "id": : 346,
    "name": "Sutter Av - Rutland Rd"
  },
  {
    "id": : 134,
    "name": "Sutter Av"
  },
  {
    "id": : 611,
    "name": "Times Sq - 42 St / Port Authority Bus Terminal"
  },
  {
    "id": : 502,
    "name": "Tompkinsville"
  },
  {
    "id": : 522,
    "name": "Tottenville"
  },
  {
    "id": : 215,
    "name": "Tremont Av"
  },
  {
    "id": : 28,
    "name": "Union St"
  },
  {
    "id": : 181,
    "name": "Utica Av"
  },
  {
    "id": : 293,
    "name": "Van Cortlandt Park - 242 St"
  },
  {
    "id": : 186,
    "name": "Van Siclen Av"
  },
  {
    "id": : 351,
    "name": "Van Siclen Av"
  },
  {
    "id": : 90,
    "name": "Van Siclen Av"
  },
  {
    "id": : 464,
    "name": "Vernon Blvd - Jackson Av"
  },
  {
    "id": : 167,
    "name": "W 4 St"
  },
  {
    "id": : 57,
    "name": "W 8 St - NY Aquarium"
  },
  {
    "id": : 416,
    "name": "Wakefield - 241 St"
  },
  {
    "id": : 333,
    "name": "Wall St"
  },
  {
    "id": : 413,
    "name": "Wall St"
  },
  {
    "id": : 427,
    "name": "West Farms Sq - E Tremont Av"
  },
  {
    "id": : 363,
    "name": "Westchester Sq - E Tremont Av"
  },
  {
    "id": : 370,
    "name": "Whitlock Av"
  },
  {
    "id": : 130,
    "name": "Wilson Av"
  },
  {
    "id": : 355,
    "name": "Winthrop St"
  },
  {
    "id": : 264,
    "name": "Woodhaven Blvd"
  },
  {
    "id": : 83,
    "name": "Woodhaven Blvd"
  },
  {
    "id": : 378,
    "name": "Woodlawn"
  },
  {
    "id": : 456,
    "name": "Woodside - 61 St"
  },
  {
    "id": : 235,
    "name": "York St"
  },
  {
    "id": : 364,
    "name": "Zerega Av"
  },
}
```

## ✨ Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/elaniobro/mmm-nyc-transit/issues)

## 👨🏻 Author
**Elan Trybuch**
* [github](https://www.github.com/elaniobro)
* [twitter](https://www.twitte.com/elaniobro)

### ⚖️ License
This project is licensed under the MIT License - see the LICENSE.md file for details

### 🙏🏽 Acknowledgments
* [Eric Lewis](https://github.com/ericandrewlewis/mta-realtime-subway-departures/blob/master/package.json)
