<template>
  <main class="main home">
      <Chart/>
      <Info/>
      <OrderBook/>
      <Instruments/>
      <NewOrder/>
      <MyOrder/>
      <Last5Trade/>
  </main>
</template>

<script>
import Chart from '@/components/Chart';
import Info from '@/components/Info';
import OrderBook from '@/components/OrderBook';
import Instruments from '@/components/Instruments';
import NewOrder from '@/components/NewOrder';
import MyOrder from '@/components/MyOrder';
import Last5Trade from '@/components/Last5Trade';
export default {
    name:'home',
    components:{
        Chart,
        Info,
        OrderBook,
        Instruments,
        NewOrder,
        MyOrder,
        Last5Trade,

    }
}
</script>

<style>

</style>