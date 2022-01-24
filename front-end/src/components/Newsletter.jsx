import React from "react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";

const Container = styled.div`
  height: 60vh;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
`;

const InputContainer = styled.div`
  width: 70%;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 3rem;
  flex: 10;
  font-size: 1rem;
  padding-left: 1rem;
`;

const Button = styled.button`
  height: 100%;
  flex: 1;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Description>
      <InputContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <MdSend></MdSend>
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
