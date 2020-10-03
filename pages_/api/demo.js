export default async function(req, res) {

  const { firstName, lastName, email, phone, employeesNumber, organization, message } = req.body

  try {
    res.status(200).json({ lead: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      employeesNumber: employeesNumber.value,
      organization: organization,
      message: message
    }})
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Lead not created.')
  }
}