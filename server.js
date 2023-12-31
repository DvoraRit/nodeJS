const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)
server.post('/', (req, res) => {
    console.log(req.body);
})
server.use('/', (req, res) => {
    console.log(req.body);
    res.send(200, req.body)
})


server.listen(3000, () => {
  console.log('JSON Server is running')

})