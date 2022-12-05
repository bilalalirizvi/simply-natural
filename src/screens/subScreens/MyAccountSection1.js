import React, { useState, useEffect } from "react";
import { NavBar } from "../../components";
import styled, { keyframes } from "styled-components";
import { Button } from "../../Styled";
import { MdError } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  width: 100%;
  padding: 75px;
  border-top: 1px solid rgb(220, 220, 220);
  @media (max-width: 800px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`;
const FormWrap = styled.div`
  width: 100%;
  padding: 100px 100px 120px 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 800px) {
    padding: 30px;
    padding-bottom: 50px;
  }
  @media (max-width: 600px) {
    padding: 20px;
    padding-bottom: 40px;
    gap: 10px;
  }
`;

const HeadingLarge = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;
const HeadingSmall = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Form = styled.div`
  width: 100%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid rgb(220, 220, 220);
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
const InputWrap = styled.div`
  width: 100%;
`;
const Label = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.grey};
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0px 20px;
  border: 1px solid rgb(220, 220, 220);
  margin-top: 3px;
`;
const LostPass = styled.p`
  display: inline-block !important;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.green};
  }
`;
const ErrorAlert = styled.div`
  width: 100%;
  padding: 20px 20px;
  border-top: 3px solid #b81d23;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f7f6f7;
`;
const Error = styled.p`
  font-size: 14px;
`;
const Bold = styled.b``;
const CheckBox = styled.input`
  cursor: pointer;
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
  padding: 0px 11px;
`;
const Span = styled.span`
  animation: ${rotate} 2s linear infinite;
`;
const Require = styled.span`
  color: ${({ theme }) => theme.red};
`;

const MyAccountSection1 = () => {
  const [nameOrEmail, setNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberPass, setRememberPass] = useState(
    JSON.parse(localStorage.getItem("rememberMe") || false)
  );

  useEffect(() => {
    if (nameOrEmail.trim()) {
      setErrorMessage("");
    }
  }, [nameOrEmail]);
  useEffect(() => {
    if (password.trim().length >= 8) {
      setErrorMessage("");
    }
  }, [password]);

  const loginHandle = () => {
    if (!nameOrEmail.trim()) {
      setErrorMessage("Username is required.");
    } else if (password.trim().length < 8) {
      setErrorMessage("Password must be 8 charecters length.");
    }
    if (nameOrEmail.trim() && password.trim().length >= 8) {
      setLoading(true);
      console.log("Done!");
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const rememberMe = (e) => {
    if (nameOrEmail.trim() && password.trim().length >= 8) {
      localStorage.setItem("rememberMe", JSON.stringify(e.target.checked));
      setRememberPass(e.target.checked);
      //   localStorage.setItem(
      //     "rememberMeLogin",
      //     JSON.stringify({
      //       nameOrEmail,
      //       password,
      //     })
      //   );
    } else {
      setErrorMessage("Please fill required fields.");
    }
  };

  return (
    <Container>
      <NavBar bgcColor={"white"} />
      <FormContainer>
        <FormWrap>
          <HeadingLarge>My account</HeadingLarge>
          <HeadingSmall>Login</HeadingSmall>
          {errorMessage && (
            <ErrorAlert>
              <MdError
                style={{
                  fontSize: "18px",
                  color: "B81D23",
                  marginRight: "10px",
                }}
              />
              <Error>
                <Bold>Error:</Bold> {errorMessage}
              </Error>
            </ErrorAlert>
          )}
          <Form>
            <InputWrap>
              <Label>
                Username or email address <Require>*</Require>
              </Label>
              <Input
                value={nameOrEmail}
                type="text"
                onChange={(e) => setNameOrEmail(e.target.value)}
              />
            </InputWrap>
            <InputWrap>
              <Label>
                Password <Require>*</Require>
              </Label>
              <Input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputWrap>
            <Label>
              <CheckBox
                type="checkbox"
                checked={rememberPass}
                style={{ marginRight: "5px" }}
                onChange={rememberMe}
              />
              Remember me
            </Label>
            <div>
              <Button onClick={loginHandle}>
                {loading ? (
                  <Spinner>
                    <Span>
                      <TbFidgetSpinner />
                    </Span>
                  </Spinner>
                ) : (
                  "LOG IN"
                )}
              </Button>
            </div>
            <span>
              <LostPass>Lost your password?</LostPass>
            </span>
          </Form>
        </FormWrap>
      </FormContainer>
    </Container>
  );
};

export default MyAccountSection1;
