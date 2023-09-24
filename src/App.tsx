import "./App.css";
import CustomAppBar from "./components/CustomAppBar";
import Container from "@mui/material/Container";
import { usePDF } from "react-to-pdf";
import CustomTable from "./components/CustomTable";
import { useState } from "react";
import { CustomLinearChart } from "./components/charts/CustomLineChart";
import { CustomPie } from "./components/charts/CustomPie";
import { GRAFICOS } from "./enums/GRAFICOS";
import JSON_AUX from "./const/contants";

function App() {
	const [showGrafica, setshowGrafica] = useState<GRAFICOS>(GRAFICOS.TABLE);

	const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
	return (
		<>
			<CustomAppBar
				toPDF={toPDF}
				tipoGrafica={showGrafica}
				onTap={setshowGrafica}
			>
				{showGrafica == GRAFICOS.TABLE && (
					<Container>
						<CustomTable />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart data={JSON_AUX.allLinesLinear} />
					</Container>
				)}
				{showGrafica == GRAFICOS.PIE && (
					<Container ref={targetRef} maxWidth="sm">
						<CustomPie />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_AUTHOR && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart data={JSON_AUX.oneLinesAutor} />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_TITTLE && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart data={JSON_AUX.oneLinesTittle} />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_DATE && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart data={JSON_AUX.oneLinesFecha} />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_EDITORIAL && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart data={JSON_AUX.oneLinesEditorial} />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_MATERIA && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart data={JSON_AUX.oneLinesMateria} />
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_ORGANIZATION && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart
							data={JSON_AUX.oneLinesOrganizacion}
						/>
					</Container>
				)}
				{showGrafica == GRAFICOS.LINEAL_PLACE_ORGANIZATION && (
					<Container ref={targetRef} maxWidth="md">
						<CustomLinearChart
							data={JSON_AUX.oneLinesPlaceOrganizacion}
						/>
					</Container>
				)}
			</CustomAppBar>
		</>
	);
}

export default App;
