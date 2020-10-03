// import { GoogleSpreadsheet } from 'google-spreadsheet';

// export default async function(req, res) {
//   const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_IF);
//   await doc.useServiceAccountAuth({
//     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//   });
//   await doc.loadInfo();

//   const { firstName, lastName, email, phone, employeesNumber, organization, message } = req.body

//   try {
//     const sheet = doc.sheetsByIndex[0];
//     await sheet.addRow({ email: email, phone: phone, firstName: firstName, lastName: lastName, employeesNumber: employeesNumber, organization: organization, message: message, date: new Date().toLocaleString() });
    
//     res.status(200).send('Lead successfully created.')
//   } catch (error) {
//     console.log('ERROR', error)
//     res.status(400).send('Lead not created.')
//   }
// }