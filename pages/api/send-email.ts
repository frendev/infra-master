import { NextApiRequest, NextApiResponse } from 'next';
import {
  SENDINBLUE_API_KEY,
  SENDINBLUE_TO_EMAIL,
  SENDINBLUE_TO_NAME,
} from '../../config/envs';

const SibApiV3Sdk = require('sib-api-v3-typescript');

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let { firstName, lastName, email, phoneNumber, message } = req.body;

  if (message === '') {
    message = 'Enquiry Email.';
  }

  apiInstance.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    SENDINBLUE_API_KEY,
  );

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = 'Enquiry Regarding Perfect SAP';
  sendSmtpEmail.htmlContent = `<html>
    <head>
     <style>
        table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        }
        td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        }
        tr:nth-child(even) {
        background-color: #dddddd;
        }
     </style>
  </head>
  <body>
     <h3> Hi, You have got a new mail. </h3>
     <table>
        <tr>
           <td>Name of the Sender </td>
           <td>${firstName} ${lastName}</td>
        </tr>
        <tr>
           <td>Email</td>
           <td>${email}</td>
        </tr>
        <tr>
           <td>Contact Number</td>
           <td>+91 ${phoneNumber}</td>
        </tr>
        <tr>
           <td>Message</td>
           <td>${message}</td>
        </tr>
     </table>
  </body>
</html>`;
  sendSmtpEmail.sender = {
    name: `${firstName} ${lastName}`,
    email: `${email}`,
  };
  sendSmtpEmail.to = [
    { email: `${SENDINBLUE_TO_EMAIL}`, name: `${SENDINBLUE_TO_NAME}` },
  ];

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({
      data: response,
      message: 'Email has been sent successfully.',
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong.',
    });
  }
}
