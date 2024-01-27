/* json Server Imported */
const jsonServer = require("json-server");
/* server created*/
const hospitalServer = jsonServer.create()
/* router */
const router = jsonServer.router("db.json")
/* middleware */
const middleware = jsonServer.defaults()

hospitalServer.use(middleware)
hospitalServer.use(router)

const port = 3000 || env.process.Port

hospitalServer.listen(port, () => {
    console.log(`server is runing at ${port}`);

})