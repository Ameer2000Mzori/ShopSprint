import nodemailer from 'nodemailer'
import 'dotenv/config'

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendVerificationEmail(name, email, VerificationToken) {
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
      <title>Welcome to ShopSprint!</title>
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
          cursor: pointer;
        }
        .link:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="h1">Welcome to ShopSprint!</h1>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>Thank you for creating an account with ShopSprint! We're excited to have you join our growing community.</p>
          <p>To ensure you receive important updates and access all the features we offer, please verify your email address within the next hour.</p>
          <p class="important">This verification link will expire after one hour for security purposes.</p>
          <p>Click the link below to verify your email address:</p>
          <p><a href="http://localhost:3000/verify/${VerificationToken}" class="link">Verify Your Email Address</a></p>
          <p>Once you verify your email, you'll unlock the full potential of your ShopSprint account.</p>
          <p>We look forward to being a part of your journey!</p>
          <p>Sincerely,</p>
          <p>The ShopSprint Team</p>
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

export async function VerificationConfirm(name, email) {
  var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your Account has been Verified',
    text: 'Your Account has been Verified',
    html: `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Verified</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
            .header {
                text-align: center;
                padding: 20px 0;
                font-size: 24px;
                font-weight: bold;
            }
            .content {
                margin: 20px 0;
            }
            .content p {
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
            }
            .button {
                text-align: center;
                margin: 20px 0;
            }
            .button a {
                background-color: #4CAF50;
                color: white;
                padding: 15px 25px;
                text-decoration: none;
                font-size: 16px;
                border-radius: 5px;
            }
            .button a:hover {
                background-color: #45a049;
            }
            .footer {
                text-align: center;
                padding: 20px 0;
                font-size: 14px;
                color: #888888;
            }
            .footer a {
                color: #888888;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                Account Verified
            </div>
            <div class="content">
                <p>Dear ${name},</p>
                <p>Congratulations! Your email has been successfully verified. Welcome to [Your Company Name]. We are excited to have you with us.</p>
                <p>You can now access all the features and services available on our platform. If you have any questions or need assistance, feel free to reach out to our support team.</p>
                <p>Thank you for choosing [Your Company Name].</p>
            </div>
            <div class="button">
                <a href="http://localhost:3000/">Go to Home Page</a>
            </div>
            <div class="footer">
                <p>&copy; 2024 [Your Company Name]. All rights reserved.</p>
                <p><a href="http://localhost:3000/">Visit our website</a> | <a href="mailto:support@your-domain.com">Contact Support</a></p>
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
