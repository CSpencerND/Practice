const express = require("express")
const path = require("path")
const sendMail = require("./sendMail")
const process = require("process")
const dotenv = require("dotenv")

dotenv.config()
const PORT = process.env.PORT

const app = express()

// static and middleware
app.use(express.static(path.join(__dirname, "..", "/client/")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const resOptions = { root: path.join(__dirname, "..", "/client/") }
// const transporter = nodemailer.createTransport()

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

// handle post request
app.post("/contact", (req, res) => {
    const { name, company, email, phone, message } = req.body
    const hasValues = Object.values(req.body).every((value) => value)

    if (hasValues) {
        sendMail(name, company, email, phone, message)
            .then((result) => console.log("Email sent", result))
            .catch((error) => console.log(error.message))
    }

    res.status(204).send()
})

// 404
app.use((req, res) => {
    res.status(404).sendFile("404.html", resOptions)
})

app.listen(PORT, () => {
    console.log("listening for requests on port " + PORT)
})
