<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <img src="/public/logo.jpg" class="logo" />
      <div class="slogan">
        <div class="slogan">
          <p>OUR SERVICE 
          NEVER GET LOST</p>
        </div>
      </div>
      <div class="logging-container">
        <ion-input label="Account" label-placement="floating" fill="outline" placeholder="Enter your account">
          <ion-icon :icon="personOutline" class="accounticon"></ion-icon>
        </ion-input>
        <br />
        <ion-input label="Password" label-placement="floating" fill="outline" placeholder="Enter your password">
          <ion-icon :icon="lockOpenOutline" class="accounticon"></ion-icon>
        </ion-input>

        <router-link to="/tabs/tab3">
          <ion-button expand="block" class="login-button">Log in</ion-button>
        </router-link>
        <div class="loggingtext">
          <p>New members? <a href="http://www.icreatec.com/">Sign up now !</a></p>
        </div>
      </div>


    </ion-content>
  </ion-page>
</template>

<style scoped>
.slogan {
  font-size: 26px;
  font-weight: bold;
  color: rgb(41, 178, 199);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40%;
  text-align: center;
  width: 500PX;
}



.logo {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 338px;
  height: 260px;
}

.loggingtext {
  position: absolute;
  bottom: -115px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

}

.logging-container {
  bottom: 28%;
  width: 85%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
}

.accounticon {
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
}

.login-button {
  bottom: -35%;
  position: absolute;
  width: 100%;
  height: 20%;
  left: 50%;
  transform: translateX(-50%);
  --border-radius: 12px;
  --background: #93e9df;
}

ion-content {
  --background: #ffffff;
}
</style>
  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonAlert, IonButton } from '@ionic/vue';
import { personOutline, lockOpenOutline } from 'ionicons/icons';

</script>