<h2 style="text-align:center">Node-PC-Stats</h2>

<p style="text-align:center;">An NPM Module which returns Your Personal Computer's (PC) Resource Usage.</p>

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
        console.log(error)
    })
```

### Extras

* ✨ [pc-stats-api](https://github.com/Dakssh/PC-Stats-API) - PC Stats API
* 🚩 [employee-churn](https://github.com/Dakssh/EmployeeChurn) - A Deep Neural Network for Calculating Churn
* 🌎 [node-FileScraper](https://github.com/Dakssh/node-FileScraper) - A File Scraper Which Scrapes Files for you

### License
<p style="text-align:center;">This Module is Licensed Under MIT 2017, Created by Daksh Miglani</p>