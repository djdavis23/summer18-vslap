<template>
  <div class="vendr">
    <h1>D2 Venders</h1>
    <!-- DISPLAY PRODUCT CHOICES -->
    <div id="food">
      <div class="food-item" v-for="item in machine.foodItems" @click="purchase(item.id)" :disabled="outOfStock(item)">
        <img :src="item.img" alt="soda picture" height="100" />
        <h4>{{item.price}}</h4>
      </div>
    </div>

    <!-- DEPOSIT MONEY BY SELECTING APPROPRIATE CURRENCY OR GET CHANGE -->
    <div id="money">
      <button v-for="(value, key) in machine.acceptableCurrency" :key="key" @click="addMoney(key)">{{key}}</button>
      <button @click="getChange()">Get Change</button>
    </div>

    <!-- SHOW CURRENT TRANSACTION TOTAL -->
    <div id="change">
      <p>Change: $</p><span id="total">{{machine.transactionTotal.toFixed(2)}}</span>
    </div>

    <!-- SHOW IMAGE OF PURCHASED PRODUCT -->
    <div id="product">
      <img :src="selectedProduct" alt="image of purchased product" height="100" v-if="selectedProduct">
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      addMoney(denomination) {
        this.$store.dispatch('addMoney', denomination)
      },
      getChange() {
        this.$store.dispatch('getChange')
      },
      purchase(foodId) {
        this.$store.dispatch('purchase', foodId)
      },
      outOfStock(foodItem) {
        return foodItem.quantity <= 0
      }


    },
    computed: {
      machine() {
        return this.$store.state.machine;
      },
      selectedProduct() {
        return this.$store.state.machine.selectedProduct

      }

    }
  };
</script>

<style>
  .food-item {
    display: inline-block;
  }

  .food-item:hover {
    cursor: pointer;
  }
</style>