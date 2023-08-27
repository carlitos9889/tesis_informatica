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
			{/* TODO: AppBar */}
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
			{/* TODO: CONTENT */}
			{/* <Container style={{ justifyContent: "center" }}>
				<CustomTable />
			</Container> */}
			{/* <Stack
				spacing={2}
				direction="row"
				justifyContent={"start"}
				marginTop={3}
			>
				<Box flex={2}>
					<CustomCard>
						<CustomLinearChart />
					</CustomCard>
				</Box>
				<Box flex={2}>
					<CustomCard>
						<CustomVerticalChart />
					</CustomCard>
				</Box>
				<Box flex={1}>
					<CustomCard>
						<CustomPie />
					</CustomCard>
				</Box>
			</Stack>
			<Box marginLeft={5} width={"73%"}>
				<CustomCard>
					<CustomTable />
				</CustomCard>
			</Box> */}
		</>
	);
}

export default App;
