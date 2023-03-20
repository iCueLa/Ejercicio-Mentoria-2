import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useCallback } from "react";
import getCityInfo from "../util/getCityInfo";
import citiesSort from "../util/citiesSort";

const CityView = () => {
  const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = useCallback(async () => {
    if (!city) return;

    if (cities.some((c) => c.name === city)) {
      alert("La ciudad ya fue agregada");
      return setCity("");
    }
    const cityInfo = await getCityInfo(city.toUpperCase());
    setCities(citiesSort([...cities, cityInfo]));
    setCity("");
  }, [cities, city]);

  const handleDelete = (city) => {
    setCities(cities.filter((c) => c.name !== city));
  };

  return (
    <Paper
      sx={{
        width: "60vw",
        height: "80vh",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ width: "80%", margin: "1rem" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "32px",
              textTransform: "uppercase",
            }}
          >
            Buscar ciudad
          </Typography>
        </Grid>
        <Grid item sx={{ width: "80%", margin: "1rem" }}>
          <TextField
            label={"Buscar ciudades"}
            fullWidth
            value={city}
            onChange={handleChange}
          />
          <Grid
            item
            sx={{
              width: "60%",
              mt: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Button variant="contained" onClick={handleSearch} fullWidth>
              Agregar
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "80%",
            margin: "1rem",
            height: "50%",
            maxHeight: "50%",
            overflow: "auto",
            backgroundColor: "lightgray",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "32px",
                textTransform: "uppercase",
              }}
            >
              Ciudades y temperaturas
            </Typography>
          </Box>

          {cities.map((city) => (
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1rem",
              }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  justifyContent: "space-between",
                  margin: "1rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    textTransform: "uppercase",
                  }}
                  key={city.name}
                >
                  Ciudad: {city.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Temperatura: {city.temperature}°C
                </Typography>
              </Box>

              <IconButton
                color="primary"
                onClick={() => handleDelete(city.name)}
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CityView;
