<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Personal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="USERTAB">
        <a href="https://shop.sosleek.io/premium-card">
        <img src="/public/jimi.png" class="user-image" />
        </a>
      </div>

      <div class="SETTINGTAB">
        <div class="backsquare"></div>
        <hr class="line" style="  top: 55.1%;">
        <hr class="line" style="  top: 62.8%;">
      </div>

      <div class="languagebar">
        <img src="/public/language.png" alt="Image 1" style="width: 45px; height: 45px;" class="colored-image">
        <ion-select aria-label="Select Language" class="selection" value="english" style="width: 200px;">
          <ion-select-option value="english">English</ion-select-option>
          <ion-select-option value="spanish">Cantonese</ion-select-option>
        </ion-select>

      </div>

      <div class="currencybar">
        <img src="/public/currency.png" alt="Image 1" style="width: 45px; height: 45px;">
        <ion-select class="selection" value="english" style="width: 200px;">
          <ion-select-option value="english">USD</ion-select-option>
          <ion-select-option value="spanish">HKD</ion-select-option>
        </ion-select>
      </div>

      <div class="aboutusbar">
        <a href="http://www.icreatec.com/">
          <img src="/public/aboutus.png" alt="Image 1" style="width:50px; height: 33px;">
          <p class="settingtext" style="width: 180px; left: 221px">ABOUT US</p>
        </a>
      </div>

      <div class="LOGGINGTAB">
        <div class="loggingsquare"></div>
        <p class="loggingtext">LOG OUT</p>
      </div>

    </ion-content>
  </ion-page>
</template>

<style>
.line {
  width: 63%;
  height: 2px;
  background-color: rgb(226, 228, 238);
  position: absolute;
  left: 59%;
  transform: translate(-50%, -50%);
}

.USERTAB {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.user-image {
  width: 410px;
  height: 267px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(69, 14, 97, 0.2);
}

.backsquare {
  width: 81%;
  height: 185px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(69, 14, 97, 0.2);
  position: relative;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
}

.selection {
  display: flex;
  position: relative;
  top: 0%;
  left: 35%;
  font-size: 26px;
  font-weight: bold;
}

.languagebar {
  display: flex;
  position: absolute;
  top: 49.5%;
  left: 14%
}

.currencybar {
  display: flex;
  position: absolute;
  top: 57.5%;
  left: 14%
}

.aboutusbar {
  display: flex;
  position: absolute;
  top: 65.5%;
  left: 14%
}

.settingtext {
  position: absolute;
  transform: translate(-50%, -50%);
  top: -5px;
  left: 0px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(29, 16, 113);
}

.lang-image {
  width: 100%;
  height: 230px;
  position: absolute;
  top: 50%;
  width: 72px;
  height: 72px;
}

.loggingsquare {
  width: 60%;
  height: 60px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(69, 14, 97, 0.2);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
}

.loggingtext {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 81%;
  font-size: 26px;
  font-weight: bold;
  color: red;
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<script lang="ts">
import { IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSelect, IonSelectOption },
});
</script>