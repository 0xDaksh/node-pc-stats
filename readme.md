<h2 align="center">Node-PC-Stats</h2>
<p align="center">An NPM Module which returns Your Personal Computer's (PC) Resource Usage.</p>

[![npm version](https://badge.fury.io/js/pc-stats.svg)](https://badge.fury.io/js/pc-stats)
[![GitHub issues](https://img.shields.io/github/issues/DakshMiglani/node-pc-stats.svg)](https://github.com/DakshMiglani/node-pc-stats/issues)
[![GitHub stars](https://img.shields.io/github/stars/DakshMiglani/node-pc-stats.svg)](https://github.com/DakshMiglani/node-pc-stats/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DakshMiglani/node-pc-stats/master/license.md)

### How It Works?
- Import It
- Run it as a Function
- Returns a Promise
- Use the Javascript then function on the Promise for Success Message
- Use the Javascript catch function to the Promise for Error Message

### The Code
```javascript
var stats = require('pc-stats')
stats().then((statistics) => {
    console.log(statistics)
}).catch((err) => {
    console.log(err)
})
```

###  The Output (https://npm.runkit.com/pc-stats)
```javascript
cpu: Object
name: "Intel(R) Xeon(R) CPU E5-2666 v3 @ 2.90GHz"
threads: Array (8 items)
0: Object {idle: 92.63157894736842, …}
1: Object {idle: 76.13636363636364, …}
2: Object {idle: 86.95652173913044, …}
3: Object {idle: 92.63157894736842, …}
4: Object {idle: 89.58333333333334, …}
5: Object {idle: 95.6989247311828, …}
6: Object {idle: 96.84210526315789, …}
7: Object {idle: 96.80851063829788, …}
Array Prototype
...
...
ram: Object
free: "1.55"
total: "15.77"
unit: "GB"
```

### Extras

* ✨ [pc-stats-api](https://github.com/Dakssh/PC-Stats-API) - PC Stats API
* 🚩 [employee-churn](https://github.com/Dakssh/EmployeeChurn) - A Deep Neural Network for Calculating Churn
* 🌎 [node-FileScraper](https://github.com/Dakssh/node-FileScraper) - A File Scraper Which Scrapes Files for you

### License
<p align="center">This Module is Licensed Under MIT 2017, Created by Daksh Miglani</p>
