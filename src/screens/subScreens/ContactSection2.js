import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Button } from "../../Styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { TbFidgetSpinner } from "react-icons/tb";

const Container = styled.div`
  width: 100%;
  padding: 120px 160px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1024px) {
    padding: 120px 100px;
  }
  @media (max-width: 900px) {
    padding: 120px 30px;
    gap: 30px;
  }
  @media (max-width: 600px) {
    gap: 60px;
  }
`;
const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 60px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 60px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 600px) {
    gap: 30px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Box = styled.div`
  // flex: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 90px;
`;
const SubBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
  color: ${({ theme }) => theme.red};
  @media (max-width: 900px) {
    padding: 0px 20px;
  }
  @media (max-width: 600px) {
    padding: 0px 0px;
  }
`;
const HeadingLarge = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 500;
`;
const HeadingSmall = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.headingColor};
  margin-bottom: 10px;
  font-weight: 500;
`;
const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
`;
const Form = styled.div`
  width: 100%;
`;
const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
const TextAreaWrap = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 15px;
  outline: none;
  border: 1px solid rgb(120, 120, 120);
  background-color: transparent;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px 15px;
  resize: vertical;
  outline: none;
  border: 1px solid rgb(120, 120, 120);
  background-color: transparent;
`;
const Highlight = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.red};
`;
const MapBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 0px 46px;
`;
const Span = styled.span`
  animation: ${rotate} 2s linear infinite;
`;

const ContactSection2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorHandle, setErrorHandle] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  useEffect(() => {
    if (name.trim()) {
      setErrorHandle((pre) => ({
        ...pre,
        name: false,
      }));
    }
  }, [name]);
  useEffect(() => {
    if (validateEmail(email)) {
      setErrorHandle((pre) => ({
        ...pre,
        email: false,
      }));
    }
  }, [email]);
  useEffect(() => {
    if (subject.trim()) {
      setErrorHandle((pre) => ({
        ...pre,
        subject: false,
      }));
    }
  }, [subject]);
  useEffect(() => {
    if (message.trim()) {
      setErrorHandle((pre) => ({
        ...pre,
        message: false,
      }));
    }
  }, [message]);
  const formHandler = () => {
    setLoading(true);
    if (name.trim() >= 0) {
      setErrorHandle((pre) => ({
        ...pre,
        name: true,
      }));
    }
    if (!validateEmail(email)) {
      setErrorHandle((pre) => ({
        ...pre,
        email: true,
      }));
    }
    if (subject.trim() >= 0) {
      setErrorHandle((pre) => ({
        ...pre,
        subject: true,
      }));
    }
    if (message.trim() >= 0) {
      setErrorHandle((pre) => ({
        ...pre,
        message: true,
      }));
    }
    if (
      name.trim() &&
      validateEmail(email) &&
      subject.trim() &&
      message.trim()
    ) {
      console.log("All Done", name, email, subject, message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const position = [40.7750762, -73.9539862];
  return (
    <Container>
      <ContentWrap>
        <Left>
          <HeadingLarge>Contact Details</HeadingLarge>
          <Box>
            <IconBox>
              <TiLocation style={{ fontSize: "22px" }} />
            </IconBox>
            <SubBox>
              <HeadingSmall>Our Location</HeadingSmall>
              <Text>1569 2nd Ave, New York, NY 10028, USA​</Text>
            </SubBox>
          </Box>
          <Box>
            <IconBox>
              <MdEmail style={{ fontSize: "20px" }} />
            </IconBox>
            <SubBox>
              <HeadingSmall>Our Email</HeadingSmall>
              <Text>info@example.com</Text>
              <Text>support@example.com</Text>
            </SubBox>
          </Box>
          <Box>
            <IconBox>
              <FaPhone style={{ fontSize: "20px" }} />
            </IconBox>
            <SubBox>
              <HeadingSmall>Call Us</HeadingSmall>
              <Text>+123 456 7890</Text>
              <Text>+123 456 7891</Text>
            </SubBox>
          </Box>
        </Left>
        <Right>
          <HeadingLarge>Send Us a Message</HeadingLarge>
          <Form>
            <InputWrap>
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
                style={{ border: errorHandle.name && "1px solid #EB5D5E" }}
              />
              {errorHandle.name && (
                <Highlight>* This field is required</Highlight>
              )}
            </InputWrap>
            <InputWrap>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                style={{ border: errorHandle.email && "1px solid #EB5D5E" }}
              />
              {errorHandle.email && (
                <Highlight>* This field is required</Highlight>
              )}
            </InputWrap>
            <InputWrap>
              <Input
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                placeholder="Subject"
                style={{ border: errorHandle.subject && "1px solid #EB5D5E" }}
              />
              {errorHandle.subject && (
                <Highlight>* This field is required</Highlight>
              )}
            </InputWrap>
            <TextAreaWrap>
              <TextArea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message"
                style={{ border: errorHandle.message && "1px solid #EB5D5E" }}
              />
              {errorHandle.message && (
                <Highlight style={{ marginTop: "-7px" }}>
                  * This field is required
                </Highlight>
              )}
            </TextAreaWrap>
          </Form>
          <div>
            <Button onClick={formHandler}>
              {loading ? (
                <Spinner>
                  <Span>
                    <TbFidgetSpinner />
                  </Span>
                </Spinner>
              ) : (
                "SEND MESSAGE"
              )}
            </Button>
          </div>
        </Right>
      </ContentWrap>
      <MapBox>
        <HeadingLarge>Find Us</HeadingLarge>
        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              1569 2nd Ave, New <br /> York, NY 10028, USA​
            </Popup>
          </Marker>
        </MapContainer>
      </MapBox>
    </Container>
  );
};

let DefaultIcon = L.icon({
  iconUrl: "http://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

export default ContactSection2;
