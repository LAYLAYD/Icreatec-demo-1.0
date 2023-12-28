<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bill</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item class="item-container">
          <ion-label>Order No.</ion-label>
          <ion-label>Date</ion-label>
          <ion-label>Fee</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>95488347</ion-label>
          <ion-label>19/12/2023</ion-label>
          <ion-label>/</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>85688198</ion-label>
          <ion-label>1/2/2023</ion-label>
          <ion-label>+0.021 SOL</ion-label>
        </ion-item>
        <ion-item>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label></ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scope>
.item-container {
  font-size: 22px;
  font-weight: bold;
}

</style>

<script>
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonToolbar },
});
</script>