<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Orders</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ORDERTAB">
        <router-link to="/tabs/monitor" class="orderimage">
          <img src="/public/redwine.jpg" style="width: 80px; height: 80px;" />
        </router-link>
        <div class="square" style="background-color: rgb(255, 255, 255);"></div>
        <p class="text-line1" style="text-align: left;">🍷 FONTANA <br>Italian Sangiovese wine kit... </p>
        <p class="text-line2" style="text-align: left;">$131.89 Insurance <br> $3475.59 Total</p>
        <p class="text-line3" style="text-align: right; color: rgb(43, 48, 104);">shipping</p>

        <ion-button id="claim1" class="claim">claim</ion-button>
        <ion-alert
         trigger="claim1"
         header="Claim Received"
         message="40% of Total Fee will refund to your account after checking"
         :buttons="alertButtons"
        ></ion-alert>
      </div>

      <div class="ORDERTAB">
        <router-link to="/tabs/monitor" class="orderimage">
          <img src="/public/flesh.jpg" style="width: 80px; height: 80px;" />
        </router-link>
        <div class="square" style=" background-color:rgb(255, 255, 255);"></div>
        <p class="text-line1" style="text-align: left;">🦞 Kai Wagyu<br>a5 wagyu ribeye steak  </p>
        <p class="text-line2" style="text-align: left;">$189.99 Insurance<br> $4799.95 Total </p>
        <p class="text-line3" style="text-align: right; color: rgb(241, 56, 59);">issue</p>


        <ion-button id="claim2" class="claim">CLAIM</ion-button>
        <ion-alert
         trigger="claim2"
         header="Claim Received"
         message="Insurance compensation alraedy refund to your account"
         :buttons="alertButtons"
        ></ion-alert>

      </div>

      <div class="ORDERTAB">
        <router-link to="/tabs/monitor" class="orderimage">
          <img src="/public/fresh.jpg" style="width: 80px; height: 80px;" />
        </router-link>
        <div class="square" style=" background-color: rgb(255, 255, 255);"></div>
        <p class="text-line1" style="text-align: left;">🍇 Kesariya Farm<br>organic Alphonso mangoes...</p>
        <p class="text-line2" style="text-align: left;">$189.99 Insurance <br>$2589.79 Total </p>
        <p class="text-line3" style="text-align: right; color: rgb(94, 167, 186);">arrival</p>


        <ion-button id="claim3" class="claim">claim</ion-button>
        <ion-alert
         trigger="claim3"
         header="Claim Received"
         message="Shipment has arrived !"
         :buttons="alertButtons"
        ></ion-alert>
      </div>

    </ion-content>
  </ion-page>
</template>


<style scoped>

.claim {
  position: absolute;
  top: 72%;
  left: 7%;
  width: 90px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  --border-radius: 12px;
  --background: rgb(245, 246, 249);
  --color: rgb(14, 128, 168);
   
}

.ORDERTAB {
  padding-right: 20px;
  flex: 1;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 220PX;
  margin-bottom: 5%;
  top: 15px;
}
.text-line1 {
  position: absolute;
  top: 9.5%;
  left: 57%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}
.text-line2 {
  position: absolute;
  top: 41.5%;
  left: 57%;
  font-size: 22px;
  transform: translateX(-50%);
  color: rgb(21, 21, 21);
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
.text-line3 {
  position: absolute;
  top: 5%;
  left: 43%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-weight: bold;
  width: 100%;
}
.orderimage {
  position: relative;
  top: 120px;
  left: 39%;
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



<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonAlert, IonButton } from '@ionic/vue';
const alertButtons = ['GOOD'];
</script>
