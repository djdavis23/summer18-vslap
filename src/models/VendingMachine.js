export default class VendingMachine {
  constructor() {
    this.transactionTotal = 0;
    this.acceptableCurrency = {
      quarter: 0.25,
      dime: 0.10,
      nickel: 0.05
    }
    this.foodItems = [{
      id: 'a1',
      img: '../assets/coke.jpg',
      price: 0.75,
      quantity: 10
    },
    {
      id: 'a2',
      img: '../assets/creamsoda.jpg',
      price: 0.60,
      quantity: 100
    },
    {
      id: 'a3',
      img: '../assets/drpepper.jpg',
      price: 0.90,
      quantity: 2
    }]
    this.machineTotal = 10;
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