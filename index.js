var cpu = require('cpu-stats'),
    os = require('os')
/**
 * PC-Stats
 * A Statistics Module which returns output as Resource Usage.
 *
 * @name stats
 * @function
 * @return {Promise} A promise object.
 */

let stats = () => {
    let data = {
        cpu: {
            name: '',
            threads: []
        },
        ram: {
            free: '',
            total: '',
            unit: ''
        }
    }
    return new Promise((fullfill, reject) => {
        cpu(1000, (err, result) => {
            if(err) {
                reject(err)
            } else {
                data.cpu.name = os.cpus()[0].model
                data.cpu.threads = []
                for(let i in result) {
                    data.cpu.threads.push({
                        name: `CPU ${i}`,
                        usage: result[i].cpu,
                        system: result[i].sys,
                        idle: result[i].idle
                    })
                }
                data.ram = {
                    free: parseFloat(os.freemem() / 1000000000).toFixed(2),
                    total: parseFloat(os.totalmem() / 1000000000).toFixed(2),
                    unit: 'GB'
                }
                fullfill(data)
            }
        })
    })
}

module.exports = stats;