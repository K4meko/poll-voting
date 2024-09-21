import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import {createTheme, useTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material/styles";
import "./index.css";
import {CssBaseline, Box} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#646cff",
    },
  },
});
// const theme = createTheme({
//   colorSchemes: {
//     dark: true,
//   },
// });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ThemedContainer>
        <Login />
      </ThemedContainer>
    </ThemeProvider>
  );
};

const ThemedContainer = ({children}: any) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "#fff",
      }}
    >
      {children}
    </Box>
  );
};

export default App;
