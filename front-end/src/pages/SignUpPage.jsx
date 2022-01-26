import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(Card)`
  flex: 1;
  max-width: 500px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 40px;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #026bce;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;

const InputLabel = styled.label`
  text-align: left;
  font-weight: 500;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid lightgray;
  padding: 15px 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  flex: 1;
  background-color: #026bce;
  border: none;
  width: 100%;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;

  :hover {
    background-color: #004c94;
  }
`;

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <CardContainer>
        <Title>SIGN UP</Title>
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <Input placeholder="Enter your name" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <Input placeholder="Enter your email address" type="email" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Phone</InputLabel>
          <Input placeholder="Enter your phone number" type="tel" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Password</InputLabel>
          <Input
            placeholder="Enter your name"
            type={showPassword ? "text" : "password"}
          />
          <div>
            Show password{" "}
            <input
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </InputContainer>
        <Button>Submit</Button>
      </CardContainer>
    </Container>
  );
}

export default RegistrationPage;