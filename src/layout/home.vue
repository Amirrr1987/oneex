<template>
  <main class="main home">
      <div class="home__container">
          <div class="home__row">
            <MyOrder class="home__my-order"/>
            <Chart class="home__chart"/>
            <Info class="home__info"/>
            <OrderBook class="home__order-book"/>
            <Instruments class="home__instruments"/>
            <NewOrder class="home__new-order"/>
            <Last5Trade class="home__last5trade"/>
          </div>
      </div>
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