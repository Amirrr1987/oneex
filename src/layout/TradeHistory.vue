<template>
  <main class="main trade-history">
    <section class="trade-history__header">
      <div class="trade-history__container">
        <div class="trade-history__row">
          <h3 class="trade-history__title">trade history</h3>
          <div class="trade-history__head">trade-history</div>
        </div>
      </div>
    </section>
    <section class="trade-history__body">
      <div class="trade-history__container">
        <div class="trade-history__row">
          <table class="trade-history__table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "TradeHistory",
};
</script>

<style>
</style>