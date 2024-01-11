<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="TEMPERTAB">
        <div class="tempsquare" style="width: 55%; left:50%;"></div>
        <div class="tempsquare" style="width: 21%; left:92%;"></div>

        <div class="circle-progress">
          <div class="circle-progress__circle"></div>
          <div class="circle-progress__percentage">{{11}}</div>
          <img src="/public/humidty.png" class="humidty-image">
          <P class="humidtytext">humidty</P>

        </div>

        <img src="/public/temper.png" class="temp-image">
        <p class="text-temp">15.0 °C</p>
        <p class="text-tempflow">1.3 °C ▼</p>
      </div>

      <div ref="chartContainer" class="chart-container">
        <canvas ref="chartCanvas" style="height:220px"></canvas>
      </div>

      <div class="LOCATION">
        <a href="https://en.wikipedia.org/wiki/BeiDou">
          <img src="/public/location.png" class="MAP" />
        </a>
        <p class="text-line4" style="top:170px;">Order No.874219035</p>
        <p class="text-line4" style="top:190px;">Last check time: 22:05 5/11/2023</p>
        <div class="locatesquare"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.circle-progress {
  position: relative;
  width: 100px;
  height: 100px;
  left: 82.3%;
  top: -5px;
}

.circle-progress__circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  border: 10px solid rgb(78, 103, 143);
}

.circle-progress__fill {
  position: absolute;
  top: 0;
  left: 10px;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  clip: rect(0, 50%, 100%, 0);
  background-color: rgb(89, 156, 175); 
  transform-origin: center center;
}

.circle-progress__percentage {
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: bold;
  color: rgb(28, 107, 197);
}
.chart-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 160px;
  width: 80%;
}

.TEMPERTAB {
  position: relative;
  top: 5%;
  left: 35%;
  transform: translateX(-50%);
}

.tempsquare {
  height: 110px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: -1;
  background-color: rgb(237, 244, 243);
}

.temp-image {
  position: absolute;
  left: 23%;
  width: 90px;
  height: 90px;
  top: 5px;
}
.humidty-image {
  position: absolute;
  left: 53%;
  top: 24%;
  width: 45px;
  height: 45px;
}
.text-temp {
  font-size: 54px;
  font-weight: bold;
  position: absolute;
  left: 58%;
  top: -50PX;
  transform: translateX(-50%);
  color: rgb(89, 156, 175);

}
.humidtytext {
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  left: 55%;
  top: 50px;
  transform: translateX(-50%);

  color: rgb(78, 103, 143);
}
.text-tempflow {
  font-size: 34px;
  font-weight: bold;
  position: absolute;
  left: 60%;
  top: 27px;
  transform: translateX(-50%);

  color: rgb(78, 103, 143);
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
  top: 480px;
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
  background-color: rgb(237, 244, 243);
}

.MAP {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  width: 305px;
  height: 159px;
}

.text-line4 {
  font-size: 14px;
  position: absolute;
  left: 70px;
  top: px;
  color: rgb(43, 48, 104);
  font-weight: bold;
}
</style>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-annotation';

import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonToolbar },

  setup() {
    const chartContainer = ref(null);
    const chartCanvas = ref(null);
    const labels = ['10:25', '10:26', '10:27', '10:28', '10:29', '10:30'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'TEMPERATURE',
          data: [14.8, 15.3, 16.8, 15.4, 16.2, 15.0],
          borderColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return;
            }
            return getGradient(ctx, chartArea);
          },
        },
      ],
    };

    let width, height, gradient;
    function getGradient(ctx, chartArea) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {

        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'blue');
        gradient.addColorStop(0.5, 'yellow');
        gradient.addColorStop(1, 'red');
      }

      return gradient;
    }

    let chartInstance;

    onMounted(() => {
      const ctx = chartCanvas.value.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: true,
              },
              title: {
                display: true,
                text: 'TIME UTC + 8',
              },
            },
            y: {
              display: true,
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: '°C Celsius',
              },
              min: 14.5,
              max: 17.0,
            },
          },

        },
      });
    });


    return { chartContainer, chartCanvas };
  },
});
</script>