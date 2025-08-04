import React from "react";
import {
  Bar,
  Pie,
  Line,
  Doughnut,
  Radar,
  PolarArea,
  Scatter,
  Bubble,
} from "react-chartjs-2";
import {
  // Chart,
  Chart as ChartJS,
  defaults,
  // CategoryScale,
  // ArcElement,
  // LinearScale,
  // BarElement,
  // Title,
  // Tooltip,
  // Legend,
  // PointElement,
  // LineElement,
  // RadialLinearScale,
} from "chart.js/auto";

// comment after tutorial
// Register the required components
// Chart.register(
//   CategoryScale,
//   ArcElement,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement,
//   RadialLinearScale
// );

import revenueData from './revenueData.json';

// Write after tutorial
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 18;
defaults.plugins.title.color = "green";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const InstructorDashboard = () => {
  const lineData = {
    // labels: ["January", "February", "March", "April"],
    labels: revenueData.map((data) => data.label),
    datasets: [
      {
        label: "Course Sales",
        data: [2, 8, 7, 11],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Revenue",
        // data: [1, 3, 9, 8],
        data: revenueData.map((data) => data.revenue),
        borderColor: "#ff3030",
        // fill: true,
        backgroundColor: "#ff3020",
      },
      {
        label: "Cost",
        // data: [0, 7.5, 5, 12],
        data: revenueData.map((data) => data.cost),
        borderColor: "#064ff0",
        backgroundColor: "#064ff0",
      },
    ],
  };

  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "Course Purchases",
        data: [12, 19, 3, 10],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(255, 200, 200, 0.2)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(255, 110, 150, 1)",
        // ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 110, 150, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 110, 150, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Web Development", "Programming", "DSA"],
    datasets: [
      {
        label: "Students Enrolled",
        data: [30, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ["Web Development", "Programming", "DSA"],
    datasets: [
      {
        label: "No. of lectures",
        data: [50, 35, 15],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
        ],
      },
    ],
  };

  const radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding"],
    datasets: [
      {
        label: "Activities",
        data: [20, 10, 4, 2, 5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const polarAreaData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [11, 16, 7],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
        ],
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: "Bubble Dataset",
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 5 },
        ],
        backgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const mixedData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Bar Dataset",
        type: "bar",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Line Dataset",
        type: "line",
        data: [5, 15, 7, 10],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  };

  const groupedBarData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes 1",
        data: [12, 19, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Votes 2",
        data: [8, 10, 6],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const stackedBarData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Group A",
        data: [12, 19, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Group B",
        data: [5, 15, 8],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  return (
    <div className="p-4 text-center bg-gray-100">
      <h1 className="text-3xl my-8">Instructor Dashboard</h1>
      <div className="lg:flex md:flex flex-wrap items-center justify-between lg:mx-16 md:mx-16 sm:mx-8 mx-8">
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Line Chart</h2>
          <Line
            data={lineData}
            options={{
              elements: {
                line: {
                  tension: 0.2,
                },
              },
              plugins: {
                title: {
                  text: "Monthly Revenue & Cost",
                },
              },
            }}
          />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Bar Chart</h2>
          <Bar
            data={barData}
            options={{
              elements: {
                bar: {
                  borderRadius: 5,
                },
              },
              plugins: {
                title: {
                  text: "Course Purchases",
                },
              },
            }}
          />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Pie Chart</h2>
          <Pie data={pieData} options={options} />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Doughnut Chart</h2>
          <Doughnut data={doughnutData} options={options} />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Radar Chart</h2>
          <Radar data={radarData} options={options} />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>PolarArea Chart</h2>
          <PolarArea data={polarAreaData} options={options} />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Scatter Chart</h2>
          <Scatter data={scatterData} options={options} />
        </div>
        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Bubble Chart</h2>
          <Bubble data={bubbleData} options={options} />
        </div>

        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Mixed Chart</h2>
          <Bar data={mixedData} options={options} />
        </div>

        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Grouped Bar Chart</h2>
          <Bar
            data={groupedBarData}
            options={{
              ...options,
              scales: { x: { stacked: true }, y: { stacked: true } },
            }}
          />
        </div>

        <div className="lg:h-[400px] lg:w-[550px] md:h-[400px] md:w-[550px] h-[250px] w-[300px] mb-12 bg-white rounded-md px-4 pb-8 pt-4">
          <h2>Stacked Bar Chart</h2>
          <Bar
            data={stackedBarData}
            options={{
              ...options,
              scales: { x: { stacked: true }, y: { stacked: true } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
