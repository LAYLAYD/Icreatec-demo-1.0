<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Orders <router-link to="/tabs/input" class="input-link" style="margin-left: 73%;">add＋</router-link>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ordertab1">
        <OrderTab />
      </div> 
      <br><br><br><br><br><br><br><br>
      <div class="ordertab1">
        <OrderTab />
      </div> 
      
    </ion-content>
  </ion-page>
</template>


<style scoped>
.input-link {
  text-decoration: none;
  color: inherit;
  border-bottom: none;
}
.ordertab1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 12%;
}


ion-content {
  --background: #f2f2f2;
}
</style>



<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonAlert, IonButton } from '@ionic/vue';
import OrderTab from '@/components/ordertab.vue';
const alertButtons = ['GOOD'];

</script>
