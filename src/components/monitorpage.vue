<template>
  <div ref="chartContainer" class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<style scoped>
.chart-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 160px;
  width: 95%;
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
          label: 'MONITOR',
          data: [13.8, 15.3, 16.5, 15.4, 16.2, 14.3],
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
              title: {
                display: true,
                text: 'TIME',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'TEMPERATURE',
              },
            },
          },
          
        },
      });
    });


    return { chartContainer, chartCanvas};
  },
});
</script>