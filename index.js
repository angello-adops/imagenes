// Looker Studio llama a esta función cada vez que hay datos nuevos
const dscc = require('dscc');

function drawViz(data) {
  const container = document.getElementById('viz');
  container.innerHTML = ''; // Limpia la visualización previa

  // Obtén el valor del primer campo (ejemplo)
  const valor = data.tables.DEFAULT[0].values[0];

  const options = {
    chart: {
      type: 'radialBar',
      height: 300,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500
      }
    },
    series: [valor],  // <-- Aquí va el dato dinámico
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: '24px'
          }
        }
      }
    },
    labels: ['Progreso']
  };

  const chart = new ApexCharts(container, options);
  chart.render();
}

// Se registra la función para reaccionar a los cambios de datos
dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});