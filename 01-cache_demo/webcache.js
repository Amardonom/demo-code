const http = require('http')
const fs = require('fs')

http.createServer((req, res)=> {
  if (req.url === '/' && req.method === 'GET'){
    console.log(21312)
    fs.readFile('./static.html', (err, data) => {
      if (err) return err
      res.end(data)
    })
  }else {
    fs.createReadStream('./yasuo.jpeg').pipe(res)
    res.setHeader('Cache-Control', 'max-age=300')
  }
}).listen(3000)