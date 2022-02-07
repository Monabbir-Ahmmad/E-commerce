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
import { register } from "../actions/userActions";

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

function RegisterPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [valueMissing, setValueMissing] = useState(false);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = (prop) => (e) => {
    setShowPassword({ ...showPassword, [prop]: !showPassword[prop] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Object.keys(values).every((key) => values[key]) &&
      values.password === values.confirmPassword
    ) {
      setValueMissing(false);
      dispatch(register(values));
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
            Sign up
          </Typography>

          {loading && <LinearProgress />}

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            variant="outlined"
            label="Name"
            type={"text"}
            error={valueMissing && !values.name}
            helperText={
              valueMissing && !values.name ? "Please enter your name" : ""
            }
            value={values.name}
            onChange={handleChange("name")}
          />

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
            type={showPassword.password ? "text" : "password"}
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
                  <IconButton onClick={handleClickShowPassword("password")}>
                    {showPassword.password ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            label="Confirm Password"
            type={showPassword.confirmPassword ? "text" : "password"}
            error={
              valueMissing &&
              (!values.confirmPassword ||
                values.password !== values.confirmPassword)
            }
            helperText={
              valueMissing &&
              (!values.confirmPassword ||
                values.password !== values.confirmPassword)
                ? "Please confirm your password"
                : ""
            }
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword("confirmPassword")}
                  >
                    {showPassword.confirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" size="large" type="submit">
            Create account
          </Button>

          <Typography variant="body1" color={"primary"}>
            Already have an account?{" "}
            <StyledLink to="/sign-in">Sign In</StyledLink>
          </Typography>
        </Stack>
      </Paper>
    </FormContainer>
  );
}

export default RegisterPage;
