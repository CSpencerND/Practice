const sendMail = async (name, company, email, phone, message) => {
    const nodemailer = require("nodemailer")
    const { google } = require("googleapis")
    const process = require("process")
    const dotenv = require("dotenv")

    dotenv.config()
    const CLIENT_ID = process.env.CLIENT_ID
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const REDIRECT_URI = process.env.REDIRECT_URI
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN

    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    )

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "cspencernd@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        })

        const emailHTML = `
            <p>${message}</p>
            <p>Phone: ${phone}</p>
            `

        const mailOptions = {
            from: `${name} from ${company} ${email}`,
            to: "cspencernd@gmail.com",
            subject: "Test email from Acme Web Design app",
            text: `${message}\nphone: ${phone}`,
            html: emailHTML,
        }

        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}

module.exports = sendMail
