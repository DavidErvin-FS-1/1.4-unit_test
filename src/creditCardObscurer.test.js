const obscureCreditCard = require("./creditCardObscurer")

describe("obscureCreditCard", () => {
  // Positive test cases
  test("Should obscure a 12-digit credit card number", () => {
    expect(obscureCreditCard("123456789012")).toBe("********9012")
  })

  test("Should obscure a 13-digit credit card number", () => {
    expect(obscureCreditCard("1234567890123")).toBe("*********0123")
  })

  test("Should obscure a 14-digit credit card number", () => {
    expect(obscureCreditCard("12345678901234")).toBe("**********1234")
  })

  test("Should obscure a 15-digit credit card number", () => {
    expect(obscureCreditCard("123456789012345")).toBe("***********2345")
  })

  test("Should obscure a 16-digit credit card number", () => {
    expect(obscureCreditCard("1234567890123456")).toBe("************3456")
  })

  // Negative test cases
  test("Should return 'Invalid Credit Card' for an empty string", () => {
    expect(obscureCreditCard("")).toBe("Invalid Credit Card")
  })

  test("Should return 'Invalid Credit Card' for an 11-digit credit card number", () => {
    expect(obscureCreditCard("12345678901")).toBe("Invalid Credit Card")
  })

  test("Should return 'Invalid Credit Card' for a 17-digit credit card number", () => {
    expect(obscureCreditCard("12345678901234567")).toBe("Invalid Credit Card")
  })
})
