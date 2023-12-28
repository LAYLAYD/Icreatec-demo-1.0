<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Wallet</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="WALLET">
        <h1 class="dollar-text">$14.06</h1>
        <p class="dollarflow">+$0.28 +1.56%</p>
      </div>

      <div class="buttonbill">
        <ion-button @click="navigateToChildPage" class="custom-button">
          <ion-icon name="newspaper-outline" class="custom-icon" style ></ion-icon>
        </ion-button>
      </div>

      <div class="SOLANATAB">
        <div class="SOLANATAB">
          <img src="/public/SOL.png" class="sol-image" style="width: 72px; height: 72px;" />
          <div class="square1"></div>
          <p class="text-line1">Solana</p>
          <p class="text-line2">0.021 SOL</p>
        </div>
      </div>

      <div class="PRICEFLOW">
        <img src="/public/SOLPRICE.jpg" class="solprice" />
        <ExploreContainer style="left: 0%; top: 110%;" />
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.walletsquare {
  width: 57vw;
  height: 130px;
  background-color: transparent;
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  border: 5px solid rgb(14, 128, 168);
  border-radius: 20px;

}
.buttonbill {
  position: relative;
  top: 2%;
  left: 85%;
}
.custom-icon {
  font-size: 24px; 
  --color: red;
}

.WALLET {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dollar-text {
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(15, 15, 15);
  font-size: 64px;
  font-weight: bold;
}

.dollarflow {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(16, 141, 39);
  font-size: 29px;
  font-weight: bold;
}

.SOLANATAB {
  padding-right: 20px;
  flex: 1;
  text-align: center;
  padding-right: 20px;
  position: relative;
  top: 18%;
  left: -1px;
}

.text-line1 {
  position: absolute;
  top: 14%;
  left: 55%;
  font-size: 25px;
  transform: translateX(-50%);
  color: rgb(5, 62, 92);
  font-weight: bold;
}

.text-line2 {
  position: absolute;
  top: 35%;
  left: 55%;
  font-size: 25px;
  transform: translateX(-50%);
  font-weight: bold;
  color: rgb(14, 128, 168);
}

.sol-image {
  position: relative;
  top: 40px;
  left: -27%;
  z-index: 1
}

.square1 {
  width: 85vw;
  height: 80px;
  background-color: rgb(226, 223, 229);
  position: relative;
  left: 55%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}

.PRICEFLOW {
  position: relative;
  top: 125px;
  left: 16%;
  width: 335px;
  height: 227px;
}

</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateToChildPage = () => {
  router.push('/tabs/billpage');
};

</script>