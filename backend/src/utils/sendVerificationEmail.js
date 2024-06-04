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
    html: `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to [Your Company Name]!</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fff; /* White background for a cleaner look */
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .h1 {
          font-size: 24px;
          margin: 0;
          color: #333; /* Consistent color */
        }
        .content {
          line-height: 1.5;
          font-size: 16px; /* Clearer font size */
        }
        .important {
          font-weight: bold;
          color: #f00; /* Red for importance */
        }
        .link {
          color: #2e8b57; /* Greenish blue for links */
          text-decoration: none;
        }
        .link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="h1">Welcome to [Your Company Name]!</h1>
        </div>
        <div class="content">
          <p>Dear [User Name],</p>
          <p>Thank you for creating an account with [Your Company Name]! We're excited to have you join our growing community.</p>
          <p>To ensure you receive important updates and access all the features we offer, please verify your email address within the next hour.</p>
          <p class="important">This verification link will expire after one hour for security purposes.</p>
          <p>Click the link below to verify your email address:</p>
          <p><a href="[Your Verification URL]" class="link">Verify Your Email Address</a></p>
          <p>Once you verify your email, you'll unlock the full potential of your [Your Company Name] account.</p>
          <p>We look forward to being a part of your journey!</p>
          <p>Sincerely,</p>
          <p>The [Your Company Name] Team</p>
        </div>
      </div>
    </body>
    </html>

    
    `,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
