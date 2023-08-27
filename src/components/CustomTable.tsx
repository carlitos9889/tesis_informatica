import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const ROWS = Array.from({ length: 100 }, (_, index) => ({
	id: index,
	autor: "Autor" + "-" + index,
	titulo: "Titulo" + "-" + index,
	fecha: Date.now().toLocaleString(),
	editorial: "Editorial" + "-" + index,
	materia: "Materia" + "-" + index,
	organizacion: "Organizacion" + "-" + index,
	lugardeOrganizacion: "LugarOrganizacion" + "-" + index,
}));

const LABELS = [
	{ field: "autor", headerName: "Autor", minWidth: 150 },
	{ field: "titulo", headerName: "Título", minWidth: 150 },
	{ field: "fecha", headerName: "Fecha", minWidth: 150 },
	{ field: "editorial", headerName: "Editorial", minWidth: 150 },
	{ field: "materia", headerName: "Materia", minWidth: 150 },
	{ field: "organizacion", headerName: "Organización", minWidth: 180 },
	{
		field: "lugardeOrganizacion",
		headerName: "Lugar de Organización",
		minWidth: 180,
	},
];

export default function CustomTable() {
	return (
		<Box>
			<DataGrid
				sx={{ height: 500, width: "100%", marginTop: 5 }}
				columns={LABELS}
				rows={ROWS}
			/>
		</Box>
	);
}
