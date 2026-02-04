import UserList from "./UserList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple, green, orange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: orange[500],
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <UserList></UserList>
      </ThemeProvider>
    </div>
  );
}

export default App;
