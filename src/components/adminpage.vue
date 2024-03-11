<template>
    <ion-page>
        <ion-toolbar>
            <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
                <img src="public/ic.png" alt="Logo" style="width: 40%;">
            </div>
        </ion-toolbar>
        <ion-content :fullscreen="true">
            <div style="display: flex; align-items: center;">
                <ion-searchbar style="flex: 1; width: 75%;" placeholder="search container number"></ion-searchbar>
                <ion-button color="dark">Track</ion-button>
            </div>
            <div class="ordertab1">
                <OrderTab />
            </div>
            <br><br><br><br><br><br><br><br>
            <div class="ordertab1">
                <OrderTab />
            </div>
            <div>
                <router-link to="/logging" class="LOGGINGTAB">
                    <ion-button expand="block" class="logoutbotton">log out</ion-button>
                </router-link>
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