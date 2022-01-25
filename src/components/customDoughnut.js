// imports
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// register
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const data = {
        datasets: [
            {
            data: [70, 30],
            backgroundColor: [
                '#FFDC10',
                '#152F48',
            ],
            borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: true,
    }

    const plugins = [{
        beforeDraw: function(chart) {
        var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 190).toFixed(2);
            ctx.font = fontSize + "em Noto Sans";
            ctx.textBaseline = "bottom";
            var text = "₹ 3,000",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = (height / 2) + 12;
            ctx.fillText(text, textX, textY);
            ctx.save();
        } 
    }]



  return (
        <Doughnut 
          type="doughnut" 
          data={data} 
          options={options} 
          plugins={plugins}
          width={300}
          style={{
              backgroundColor: "inherit",
              padding: "4%"
          }}
        />
  );
}

export default DoughnutChart;