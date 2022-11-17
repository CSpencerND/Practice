const express = require("express")
const path = require("path")
const nm = require("nodemailer")

const app = express()

// static and middleware
/* app.use(express.static(path.join(__dirname, "../client/"))) */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("listening for requests on port 3000")
})

const resOptions = { root: path.join(__dirname, "../client/") }

app.get("/", (req, res) => {
    res.sendFile("index.html", resOptions)
})

app.get("/about", (req, res) => {
    res.sendFile("about.html", resOptions)
})

app.get("/contact", (req, res) => {
    res.sendFile("contact.html", resOptions)
})

// redirect
app.get("/about-us", (req, res) => {
    res.redirect("about")
})

// 404
app.use((req, res) => {
    res.status(404).sendFile("404.html", resOptions)
})

// handle post request
app.post("/contact", (req, res) => {
    console.log(req.body)
})
