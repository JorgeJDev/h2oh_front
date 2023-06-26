import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-zoom';

export const Graphic = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../graphic.json');
        const jsonData = await response.json();
        console.log('Datos cargados:', jsonData);
        console.log('Datos cargados:', response);
        // Realiza las operaciones necesarias con los datos cargados

        if (chartRef.current) {
          const ctx = chartRef.current.getContext('2d');
          const fechas = Object.values(jsonData.Fecha);
          const aguaEmbalsada = Object.values(jsonData['Agua embalsada']);
          const status = Object.values(jsonData.Status);

          // Obtener solo los últimos 200 datos
          const fechasRecortadas = fechas.slice(-200);
          const aguaEmbalsadaRecortada = aguaEmbalsada.slice(-200);
          const statusRecortado = status.slice(-200);

          const realData = [];
          const predData = [];
          for (let i = 0; i < statusRecortado.length; i++) {
            if (statusRecortado[i] === 'Real') {
              realData.push(aguaEmbalsadaRecortada[i]);
              predData.push(null);
            } else {
              realData.push(null);
              predData.push(aguaEmbalsadaRecortada[i]);
            }
          }

          // Destruir la instancia de Chart existente (si existe)
          if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
          }

          // Crear una nueva instancia de Chart
          chartRef.current.chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: fechasRecortadas,
              datasets: [
                {
                  label: 'Agua embalsada (Real)',
                  data: realData,
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  borderColor: 'red',
                  borderWidth: 1,
                  pointRadius: 0,
                  fill: false,
                },
                {
                  label: 'Agua embalsada (Predicción)',
                  data: predData,
                  backgroundColor: 'rgba(0, 0, 255, 0.5)',
                  borderColor: 'blue',
                  borderWidth: 1,
                  pointRadius: 0,
                  fill: false,
                },
              ],
            },
            options: {
              plugins: {
                zoom: {
                  zoom: {
                    enabled: true,
                    mode: 'x',
                    speed: 0.1,
                    sensitivity: 0.1,
                  },
                  pan: {
                    enabled: true,
                    mode: 'x',
                    speed: 0.1,
                    threshold: 10,
                  },
                },
              },
              scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Fechas',
                  },
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Agua embalsada',
                  },
                },
              },
            },
          });
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  return <canvas ref={chartRef} />;
};
