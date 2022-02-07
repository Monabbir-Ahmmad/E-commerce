import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;

  @media (max-width: 900px) {
    align-item: center;
    justify-content: center;
  }
`;

function UpdatePassword() {
  const dispatch = useDispatch();

  const [valueMissing, setValueMissing] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    password: false,
    confirmPassword: false,
  });

  const [values, setValues] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = (prop) => (e) => {
    setShowPassword({ ...showPassword, [prop]: !showPassword[prop] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(values).every((key) => values[key])) {
      if (values.oldPassword === values.password) {
        setErrorMsg(
          "Your new password can not be the same as your old password"
        );
      } else if (values.password !== values.confirmPassword) {
        setErrorMsg("New password and confirmed password does not match");
        setValueMissing(true);
      } else {
        setErrorMsg("");
        setValueMissing(false);
        //dispatch(register(values));
      }
    } else {
      setValueMissing(true);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Stack spacing={4} maxWidth={"400px"} flex={1}>
        <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
          Change password
        </Typography>

        {loading && <LinearProgress />}

        {error && <Alert severity="error">{error}</Alert>}

        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <TextField
          variant="outlined"
          label="Old Password"
          type={showPassword.oldPassword ? "text" : "password"}
          error={valueMissing && !values.oldPassword}
          helperText={
            valueMissing && !values.oldPassword
              ? "Please enter your old password"
              : ""
          }
          value={values.oldPassword}
          onChange={handleChange("oldPassword")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword("oldPassword")}>
                  {showPassword.oldPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          variant="outlined"
          label="New Password"
          type={showPassword.password ? "text" : "password"}
          error={valueMissing && !values.password}
          helperText={
            valueMissing && !values.password ? "Please enter your password" : ""
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
          label="Confirm New Password"
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
              ? "Please confirm your new password"
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

        <Button variant="contained" type="submit">
          Confirm changes
        </Button>
      </Stack>
    </StyledForm>
  );
}

export default UpdatePassword;
