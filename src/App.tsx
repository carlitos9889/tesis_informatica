import "./App.css";
import CustomAppBar from "./components/CustomAppBar";
import Container from "@mui/material/Container";
import CustomTable from "./components/CustomTable";
import { useState } from "react";
import { CustomLinearChart } from "./components/charts/CustomLineChart";
import { CustomPie } from "./components/charts/CustomPie";
import { GRAFICOS } from "./enums/GRAFICOS";

function App() {
	const [showGrafica, setshowGrafica] = useState<GRAFICOS>(GRAFICOS.TABLE);

	return (
		<>
			<CustomAppBar onTap={setshowGrafica}>
				{showGrafica == GRAFICOS.TABLE && (
					<Container>
						<CustomTable />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL && (
					<Container maxWidth="md">
						<CustomLinearChart />
					</Container>
				)}
				{showGrafica == GRAFICOS.PIE && (
					<Container maxWidth="sm">
						<CustomPie />
					</Container>
				)}
			</CustomAppBar>
		</>
	);
}

export default App;
