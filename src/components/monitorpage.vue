<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Monitor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">     
      <div class="TEMPERTAB">
        <div class="hollow-semicircle"></div>
        <div class="tempsquare" style="background-color: rgb(237, 244, 243);"></div>
        <img src="/public/temper.png" class="temp-image">
        <p class="text-temp">17.5 °C</p>
        <p class="text-tempflow">1.3 °C ▼</p>

        <ion-button id="present-alert" class="alert">check</ion-button>
        <ion-alert
         trigger="present-alert"
         header="ALERT RECEIVED"
         message="Corresponding measures are conducted"
         :buttons="alertButtons"
        ></ion-alert>

      </div>

      <div class="TEMPERFLOW">
        <img src="/public/temperflow.jpg" style="width: 388px; height: 230px;" />
      </div>

      <div class="LOCATION">
        <a href="https://en.wikipedia.org/wiki/BeiDou">
          <img src="/public/location.png" class="MAP" style="width: 305px; height: 159px;" />
        </a>
        <p class="text-line4" style="top:170px;">Order No.874219035</p>
        <p class="text-line4" style="top:190px;">Last check time: 22:05 5/11/2023</p>
        <div class="locatesquare" style="background-color: rgb(237, 244, 243);"></div>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<style scope>


.TEMPERTAB {
  position: relative;
  top: 5%;
  left: 18%;
}
.tempsquare {
  width: 80%;
  height: 110PX;
  position: absolute;
  left: 31.5%;
  top: 50px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: -1;
}


.temp-image {
  position: absolute;
  top: 1px;
  left: -7.5%;
  width: 100px;
  height: 100px;
}
.alert {
  position: absolute;
  top: 56px;
  right:159px;
  width: 70px;
  height: 30px;
  font-weight: bold;
  font-size: 15px;
  --border-radius: 12px;
  --background: rgb(248, 248, 251);
  --color: rgb(14, 128, 168);
}
.warn-image {
  position: absolute;
  top: 10px;
  left: 56.5%;
  width: 42px;
  height: 42px;
}

.text-temp {
  font-size: 54px;
  font-weight: bold;
  position: absolute;
  left: 75px;
  top: -50px;
}

.text-tempflow {
  font-size: 34px;
  font-weight: bold;
  position: absolute;
  left: 17%;
  top: 27px;
  color: rgb(62, 127, 231)
}

.TEMPERFLOW {
  width: 410px;
  height: 267px;
  border-radius: 20px;
  border: 5px solid #167989;
  position: absolute;
  top: 200px;
  left: 45px;
}

.LOCATION {
  position: absolute;
  left: 0;
  right: 0;
  top: 450px;
}
.locatesquare {
  width: 84%;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25px;
  border-radius: 20px;
  z-index: -1;
}
.MAP {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
}

.text-line4 {
  font-size: 14px;
  position: absolute;
  left:70PX;
  top: px;
  color: rgb(43, 48, 104);
  font-weight: bold;
  
}
</style>
  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonAlert, IonButton } from '@ionic/vue';

const alertButtons = ['GOOD'];
</script>