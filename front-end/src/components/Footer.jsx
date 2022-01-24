import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

import { MdLocationPin } from "react-icons/md";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  margin: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  margin: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 10px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ORIGIN</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          quibusdam. Ducimus illo reiciendis sequi ipsum a atque dolorum eveniet
          velit.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <AiFillFacebook color="#3b5998 " />
          </SocialIcon>
          <SocialIcon>
            <AiOutlineTwitter color="#00acee" />
          </SocialIcon>
          <SocialIcon>
            <AiFillInstagram color="#E1306C" />
          </SocialIcon>
          <SocialIcon>
            <AiFillYoutube color="#c4302b" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Car Parts</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AiFillPhone style={{ marginRight: 10 }} />
          +998966464545
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: 10 }} />
          Lorem ipsum dolor sit amet.
        </ContactItem>
        <ContactItem>
          <MdLocationPin style={{ marginRight: 10 }} />
          lorem@ipsum.com
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
