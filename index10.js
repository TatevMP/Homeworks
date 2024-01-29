function Card(id, name, surname, expDate, pinCode, accountNumber, balance) {
    // Properties
    this.id = id
    this.name = name
    this.surname = surname
    this.expDate = expDate
    this.pinCode = pinCode
    this.accountNumber = accountNumber
    this.balance = balance
  
    // Method to change the pin code
    this.changePinCode = function (newPinCode) {
      this.pinCode = newPinCode
      console.log("Pin code changed successfully")
    }
  
    // Method for making a payment to another account
    this.paymentToOtherAccount = function (cardToSend, amount) {
      
        // Check if the balance is sufficient
      if (this.balance >= amount) {
        this.balance -= amount
        cardToSend.balance += amount
        console.log(`Payment successful! Transferred ${amount} to ${cardToSend.accountNumber}`)
      } else {
        console.log("Insufficient funds")
      }
    }
    // Method to add balance to the card
  this.addBalance = function (amount) {
    this.balance += amount
    console.log(`Balance added successfully. New balance: ${this.balance}`)
  }
}
// Example
let card1 = new Card(123456, "Adam", "Levine", "12/25", 1234, "ABC123456789", 1000)
let card2 = new Card(789012, "James", "Blunt", "08/23", 5678, "XYZ987654321", 500)

// Changing pin code for card1
card1.changePinCode(4321)

// Making a payment from card1 to card2
card1.paymentToOtherAccount(card2, 200)

// Adding balance to card2
card2.addBalance(50)

// Displaying information about the cards
console.log("Card 1:")
console.log(card1)
console.log("Card 2:")
console.log(card2)