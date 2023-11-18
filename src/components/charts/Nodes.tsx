/* eslint-disable @typescript-eslint/no-explicit-any */
// Graph.tsx
import React from "react";
import { Scatter } from "react-chartjs-2";

interface GraphProps {
	data: {
		nodes: { x: number; y: number }[];
		links: { x: number; y: number }[][];
	};
}

export const Graph: React.FC<GraphProps> = ({ data }) => {
	const chartData = {
		datasets: [
			{
				label: "Nodos",
				data: data.nodes,
				showLine: false,
				pointRadius: 10,
				pointHoverRadius: 12,
				backgroundColor: "rgba(75,192,192,1)",
			},
			{
				label: "Enlaces",
				data: [],
				borderColor: "rgba(255, 0, 0, 0.8)",
				borderWidth: 2,
				type: "line",
			},
		],
	};

	data.links.forEach((link) => {
		chartData.datasets[1].data = chartData.datasets[1].data.concat(
			link as any
		);
	});

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: { min: 0, max: 100 },
			y: { min: 0, max: 100 },
		},
	};

	return <Scatter data={chartData as any} options={options} />;
};

export default Graph;
