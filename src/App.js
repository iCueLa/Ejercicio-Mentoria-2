import { Box } from "@mui/material";
import "./App.css";
import CityView from "./views/CityView";

function App() {
  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CityView />
    </Box>
  );
}

export default App;
