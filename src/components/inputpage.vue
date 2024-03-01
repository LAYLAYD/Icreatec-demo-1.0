<template>
  <ion-page>

    <ion-content :fullscreen="true">
      <img src="/public/icreatec.png" class="deliver" style="width: 200px; top: 5px;">

      <div style="display: flex; justify-content: space-between; padding: 0 40px; margin-top: 75px;">
        <P class="inputtext" style="margin-top: -30px;">Route</P>
        <component :is="Harbors"></component>
        <ion-select fill="outline" placeholder="where arrival 🌍" style="width: 45%;"></ion-select>
      </div>
      <br />
      <div style="display: flex; justify-content: center;">
        <ion-input label="Your container no." label-placement="floating" fill="outline" style="width:85%;"></ion-input>
      </div>

    <P class="inputtext" style="top: 24%;">Compensate</P>
      <div class="compinput">
        <ion-input label="buyer wallet" label-placement="floating" fill="outline"
          placeholder="input buyer solana wallet address"></ion-input>
        <br />
        <ion-input label="seller wallet" label-placement="floating" fill="outline"
          placeholder="input seller solana wallet address">
        </ion-input>
        <br />
        <ion-input label="compensate fee ($)" label-placement="floating" fill="outline" >
        </ion-input>
      </div>

    <div>
      <P class="inputtext" style="top: 55%;">Trigger</P>
      <div class="triggerinput">
        
        <div style="display: flex; justify-content: space-between; padding: 0 0px; margin-top: 0px;">
          <ion-input fill="outline" label="Temperature (°C)" label-placement="floating"  style="width: 45%;"></ion-input>
          <ion-input fill="outline" label="Time (days)" label-placement="floating" style="width: 45%;"></ion-input>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 0 0px; margin-top:18px;">
          <ion-input fill="outline" label="Humidity (%)" label-placement="floating" style="width: 45%;"></ion-input>
          <ion-input fill="outline" label="Time (days)" label-placement="floating" style="width: 45%;"></ion-input>
        </div>
      </div>
    </div>

     
      <ion-button id="add" expand="block" class="inputbotton" @click="handleAddClick">add</ion-button>
      <ion-alert trigger="add" header="Order received" message="New order is added !" :buttons="addButtons">
      </ion-alert>
      <ion-button id="add" expand="block" class="inputbotton2" @click="handleAddClick">add</ion-button>
      <ion-alert trigger="add" header="Order received" message="New order is added !" :buttons="addButtons">
      </ion-alert>
    </ion-content>


  </ion-page>
</template>
  
<style scope>
.inputtext {
  position: absolute;
  left: 8%;
  font-size: 22px;
  font-weight: bold;
}

.deliver {
  position: absolute;
  width: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.inforinput {
  top: 12%;
  width: 85%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
}

.triggerinput {
  top: 62%;
  width: 85%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
}

.compinput {
  top: 31%;
  width: 85%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.inputbotton {
  bottom: 10%;
  position: absolute;
  width: 90%;
  height: 5%;
  left: 50%;
  transform: translateX(-50%);
  --border-radius: 12px;
  --background: rgb(14, 128, 168);

}

.inputbotton2 {
  bottom: -10%;
  position: absolute;
  width: 80%;
  height: 5%;
  left: 50%;
  transform: translateX(-50%);
  --border-radius: 12px;
  --background: rgb(14, 128, 168);

}

ion-content {
  --background: #ffffff;
}
</style>
  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonAlert, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Harbors from "./harbors.vue";



const orderTabs = ref([]);
const router = useRouter();
const addButtons = [
  {
    text: 'CANCEL',
    role: 'cancel',
    handler: () => {
      console.log('Alert canceled');
    },
  },
  {
    text: 'done',
    role: 'confirm',
    handler: () => {
      console.log('Alert confirmed');
      orderTabs.value.push({});
      router.push('/tabs/tab1');
    },
  },
];

const logResult = (ev: CustomEvent) => {
  console.log(`Dismissed with role: ${ev.detail.role}`);
};

</script>