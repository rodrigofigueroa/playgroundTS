const express = require('http')
const app     = express()
const port    = process.env.PORT || 3000

app.createServer( (req, res ) => {
  const path = req.url
  console.log( path )
  switch( path ){
    case '':
      res.writeHead({
        'Content-Type': 'text/plain'
      }) 
      res.end('Home Page!')
    break;
  }
})

app.listen( port, () => console.log('listent') )