export const validateEmail = (inp) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inp)
}

export const validatePhone = (inp) => {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/.test(inp) || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(inp)
}

export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(91|)?(\d{5})(\d{5})$/)
  if (match) {
    return "+" + match[1] + ' ' + match[2] + ' ' + match[3]
  }
  return phoneNumberString
}
