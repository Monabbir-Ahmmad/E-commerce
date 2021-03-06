import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const StyledLink = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [valueMissing, setValueMissing] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(values).every((key) => values[key])) {
      setValueMissing(false);
      dispatch(login(values.email, values.password));
    } else {
      setValueMissing(true);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paper variant="outlined" sx={{ p: 5, maxWidth: "400px", flex: 1 }}>
        <Stack spacing={4}>
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            color="primary"
            textAlign={"center"}
          >
            Sign in
          </Typography>

          {loading && <LinearProgress />}

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            variant="outlined"
            label="Email"
            type={"email"}
            error={valueMissing && !values.email}
            helperText={
              valueMissing && !values.email ? "Please enter your email" : ""
            }
            value={values.email}
            onChange={handleChange("email")}
          />

          <TextField
            variant="outlined"
            label="Password"
            type={showPassword ? "text" : "password"}
            error={valueMissing && !values.password}
            helperText={
              valueMissing && !values.password
                ? "Please enter your password"
                : ""
            }
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" size="large" type="submit">
            Sign in
          </Button>

          <Typography variant="body1" color={"primary"}>
            Don't have an account?{" "}
            <StyledLink to="/sign-up">Sign Up</StyledLink>
          </Typography>
        </Stack>
      </Paper>
    </FormContainer>
  );
}

export default LoginPage;
