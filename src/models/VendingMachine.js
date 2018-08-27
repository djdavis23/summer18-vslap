export default class VendingMachine {
  constructor(data) {
    this.transactionTotal = data.transactionTotal
    this.acceptableCurrency = data.acceptableCurrency
    this.foodItems = data.foodItems
    this.machineTotal = data.machineTotal
    this.selectedProduct = data.selectedProduct
  }

  addMoney(coin) {
    if (this.acceptableCurrency[coin]) {
      this.transactionTotal += this.acceptableCurrency[coin]
    }
    return this.transactionTotal
  }

  vend(foodId) {
    let product = this.foodItems.find(food => {
      return food.id == foodId
    })

    if (product.quantity <= 0 || product.price > this.transactionTotal) {
      return '../assets/nogo.png'
    }
    product.quantity--
    this.transactionTotal -= product.price
    this.machineTotal += product.price
    return product.img
  }

  giveChange() {
    this.transactionTotal = 0;
    return this.transactionTotal
  }

}