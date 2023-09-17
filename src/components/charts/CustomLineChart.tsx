import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	interaction: {
		mode: "index" as const,
		intersect: false,
	},
	stacked: false,
	plugins: {
		title: {
			display: true,
			text: "Chart.js Line Chart - Multi Axis",
		},
	},
	scales: {
		y: {
			type: "linear" as const,
			display: true,
			position: "left" as const,
		},
		y1: {
			type: "linear" as const,
			display: true,
			position: "right" as const,
			grid: {
				drawOnChartArea: false,
			},
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
	labels,
	datasets: [
		{
			label: "Autor",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(9, 122, 118)",
			backgroundColor: "rgba(9, 122, 118, 0.5)",
			yAxisID: "y",
		},
		{
			label: "Título",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(26, 254, 247)",
			backgroundColor: "rgba(26, 254, 247, 0.5)",
			yAxisID: "y1",
		},
		{
			label: "Fecha",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(67, 209, 14)",
			backgroundColor: "rgba(67, 209, 14, 0.5)",
			yAxisID: "y",
		},
		{
			label: "Editorial",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(28, 93, 4)",
			backgroundColor: "rgba(28, 93, 4, 0.5)",
			yAxisID: "y1",
		},
		{
			label: "Materia",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(191, 8, 91)",
			backgroundColor: "rgba(191, 8, 91, 0.5)",
			yAxisID: "y",
		},
		{
			label: "Organización",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(105, 2, 2)",
			backgroundColor: "rgba(105, 2, 2, 0.5)",
			yAxisID: "y1",
		},
		{
			label: "Lugar de Organización",
			data: labels.map(() => Math.random() * 1000),
			borderColor: "rgb(55, 64, 90)",
			backgroundColor: "rgba(55, 64, 90, 0.5)",
			yAxisID: "y1",
		},
	],
};

export function CustomLinearChart() {
	return <Line options={options} data={data} />;
}
