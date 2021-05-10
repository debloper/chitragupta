const os = require('os')

const footprint = {
  proc: Object.values(process.cpuUsage()).reduce((a, b) => `${ ((a + b)/1000000).toFixed(3) }s`),
  heap: `${ (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3) }MB`,
  load: `${Math.round(os.loadavg()[0] * 100)}%`
}

module.exports = {
  status: (message = 'reporting', id = '#!') => {
    console.log(`${id} ${message} at ${ Date.now() }`, footprint())
  },
  info: (info = '', id = '') => {
    console.info(`INFO:${id} at ${ Date.now() }`, info, footprint())
  },
  warn: (warn = '', id = '') => {
    console.warn(`WARN:${id} at ${ Date.now() }`, warn, footprint())
  },
  error: (error = '', id = '') => {
    console.error(`ERROR:${id} at ${ Date.now() }`, error, footprint())
  }
}
