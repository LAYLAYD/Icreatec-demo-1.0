<template>
  <ion-page>

    <ion-content :fullscreen="true">

      <div style="display: flex; justify-content: center;">
        <img src="/public/delivering.png" style="width: 150px; height: 150px; margin-left: auto; margin-right: auto;">
      </div>

      <div class="input-container">
        <ion-select placeholder="Classification of Cargo" interface="popover" fill="outline">
          <ion-select-option value="beverage">Beverage</ion-select-option>
          <ion-select-option value="meat-seafood">Meat & Seafood</ion-select-option>
          <ion-select-option value="veg-fruit">Vegetables & Fruits</ion-select-option>
        </ion-select>
        <br />
        <ion-input label="Company/Product Name" label-placement="floating" fill="outline"
          placeholder="E.g, Fontana / Italian Sangiovese wine kit...">
        </ion-input>
        <br />
        <ion-input label="Insurance Fee" label-placement="floating" fill="outline" placeholder="Set insurance fee">
        </ion-input>
        <br />
        <ion-input label="Time" label-placement="floating" fill="outline"
          placeholder="Set triggering time for your cargo">
        </ion-input>
        <br />
        <ion-input label="Temperature" label-placement="floating" fill="outline" placeholder="Set warning temperature">
        </ion-input>


        <ion-button id="add" expand="block" class="inputbotton">add</ion-button>
        <ion-alert 
        trigger="add" 
        header="Order received"
        message="New order is added !"
        :buttons="addButtons">
        </ion-alert>
      </div>
    </ion-content>

  </ion-page>
</template>
  
<style scope>
.input-container {
  bottom: 27%;
  width: 85%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
}

.inputbotton {
  bottom: -20%;
  position: absolute;
  width: 100%;
  height: 10%;
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

const router = useRouter();
const addButtons = [
    {
      text: 'new one',
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
        router.push('/tabs/tab1');
      },
    },
  ];

  const logResult = (ev: CustomEvent) => {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  };

</script>