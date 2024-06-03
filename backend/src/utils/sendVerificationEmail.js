import nodemailer from 'nodemailer'
import 'dotenv/config'

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
})

export default async function sendVerificationEmail(email, VerificationToken) {
  var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: `<b>That was easy!${VerificationToken}</b>`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
