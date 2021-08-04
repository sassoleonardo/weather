/* https://www.youtube.com/watch?v=dDjzTDN3cy8 */

/* basic configuration */

const path = require("path")
const express = require("express")
const router = require("./router") /* imported router.js file */
const app = express()



/* middleware its a function that get executed 
during and in coming request */
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "hbs")

app.use("/", router)


app.listen(3000, () => { /* call to local server */
    console.log("the server is now runing on  port 3000")
}) 

