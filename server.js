require('dotenv').config()

const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)


const PORT = process.env.PORT || 8000
console.log(process.env.PORT);


server.listen(PORT, () =>{
  console.log(`server listening on port ${PORT}`);
})