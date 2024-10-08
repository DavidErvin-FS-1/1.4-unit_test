function obscureCreditCard(cardNumber) {
  let length = cardNumber.length

  if (length < 12 || length > 16 || length === 0) {
    return "Invalid Credit Card"
  }

  let lastFourDigits = cardNumber.slice(-4)
  let obscuredDigits = "*".repeat(length - 4)
  return obscuredDigits + lastFourDigits
}

module.exports = obscureCreditCard
