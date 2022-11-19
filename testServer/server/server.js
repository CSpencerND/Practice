const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    let path = "../client/"

    switch (req.url) {
        case "/":
            res.statusCode = 200
            path += "index.html"
            break

        case "/about":
            res.statusCode = 200
            path += "about.html"
            break

        case "/about-us":
            // BUG: doesn't work correctly on firefox???
            res.writeHead(301, { Location: "/about" })
            return res.end()

        default:
            res.statusCode = 404
            path += "404.html"
            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})
