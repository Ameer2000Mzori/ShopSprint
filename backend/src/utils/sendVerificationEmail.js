import { Resend } from 'resend'
import 'dotenv/config'

const resend = new Resend(`${process.env.RESEND_ID}`)

export default async function sendVerificationEmail({ userEmail, Text }) {
  await resend.emails.send({
    from: '<ameerapex496@gmail.com>',
    to: [`${userEmail}`],
    subject: 'account verification',
    text: `PLEASE CLICK HERE FOR ACCOUNT ${Text} `,
  })
}
