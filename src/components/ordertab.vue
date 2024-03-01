<template>
  <div class="ORDERTAB">
    <router-link to="/tabs/chart" class="orderimage">
      <img src="/public/redwine.jpg" style="width: 80px; height: 80px;" />
    </router-link>
    <div class="square" style="background-color: rgb(255, 255, 255);"></div>
    <p class="productinfor" style="text-align: left;">container <br>order no.<br> comp.fee</p>
    <p class="fee" style="text-align: left;">MNBU9024120<br> 912130880<br>$35000</p>
    <p class="ROUTE1" style="text-align: left;">St Petersburg,<br>RU</p>
    <p class="ROUTE2" style="text-align: left;">Callao,<br>PE</p>    
    <p class="status" style="text-align: right; color: rgb(43, 48, 104);">shipping</p>
    <img src="/public/arrow.png" class="arrow" />
  </div>
</template>

<style scoped>

.claim {
  position: absolute;
  top:110%;
  left: 7%;
  width: 90px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  --border-radius: 12px;
  --background: rgb(245, 246, 249);
  --color: rgb(14, 128, 168);
}

.tab {
  padding-right: 20px;
  flex: 1;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 220PX;
  margin-bottom: 5%;
}


.ROUTE2 {
  position: absolute;
  top: 100%;
  left: 102%;
  font-size: 22px;
  transform: translateX(-50%);
  color: rgb(21, 21, 21);
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
.ROUTE1 {
  position: absolute;
  top: 100%;
  left: 57%;
  font-size: 22px;
  transform: translateX(-50%);
  color: rgb(21, 21, 21);
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  
}

.productinfor {
  position: absolute;
  top: -30%;
  left: 57%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}
.fee {
  position: absolute;
  top: -30%;
  left: 87%;
  font-size: 22px;
  transform: translateX(-50%);
  color: rgb(21, 21, 21);
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

.status {
  position: absolute;
  top: -65%;
  left: 43%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: bold;
  width: 100%;
}

.orderimage {
  position: relative;
  top: 60px;
  left: 255%;
  z-index: 1
}
.arrow {
  position: absolute;
  top: 80px;
  left: 37%;
  width: 50px;
  height: 50px;
  z-index: 1
}
.square {
  width: 95%;
  height: 220PX;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}

ion-content {
  --background: #f2f2f2;
}
</style>

<script>
import { IonButton, IonAlert } from '@ionic/vue';

export default {
  name: "OrderTab",
  components: {
    IonButton,
    IonAlert,
  },
  setup() {
    const alertButtons = ['GOOD'];
    return {
      alertButtons,
    };
  },
};
</script>