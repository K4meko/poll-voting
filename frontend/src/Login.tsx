import {useState} from "react";
import {useMutation, useQuery} from "react-query";
import {signUp} from "./signUp";
import OutlinedButton from "./components/outlineButton";
import {useTheme} from "@mui/material/styles";
import {
  Input,
  Card,
  Container,
  Box,
  TextField,
  FormHelperText,
  Button,
  OutlinedInput,
  Typography,
} from "@mui/material";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const singup = useMutation(signUp);
  return (
    <Container
      sx={{
        height: "100vh",
        width: "30vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography sx={{fontWeight: "bold"}} variant="h4">
        Create an account!
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField
          type="text"
          placeholder="Username"
          variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          type="email"
          placeholder="Email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Password"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Confirm password"
          variant="outlined"
          helperText={
            <FormHelperText
              error={password !== confirmPassword && confirmPassword.length > 0}
              sx={{minHeight: "1.5em"}}
            >
              {password !== confirmPassword && confirmPassword.length > 0
                ? "Passwords do not match"
                : "\u00A0"}
            </FormHelperText>
          }
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", width: "100%"}}>
        <OutlinedButton
          onClick={() => {
            singup.mutate({
              username: "alice",
              password: "password",
              email: "email",
            });
          }}
          sx={{foregroundColor: "white"}}
        >
          Sign up
        </OutlinedButton>

        <Button variant="text" sx={{textTransform: "none"}} onClick={() => {}}>
          Already have an account? Sign in
        </Button>
      </Box>

      {singup.isLoading && <p>Loading...</p>}
      {singup.isError && <p>Error occurred</p>}
      {singup.isSuccess && <p>Signup success full! {singup.data}</p>}
    </Container>
  );
};

export default Login;
