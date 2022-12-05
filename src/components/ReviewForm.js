import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../Styled";
import { BsStar } from "react-icons/bs";

const ReviewBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ReviewFormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  border: 1px solid rgb(220, 220, 220);
  gap: 25px;
  margin-top: 20px;
`;
const ReviewHeading = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
`;
const ReviewText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.grey};
  margin-top: -15px;
`;
const ReviewRating = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
`;
const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: vertical;
  outline: none;
  border: 1px solid rgb(220, 220, 220);
  padding: 20px;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const InputWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Label = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgb(220, 220, 220);
  padding: 0px 20px;
`;
const Rating = styled.p`
  display: inline;
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 30px;
  color: ${({ theme }) => theme.grey};
`;

const ReviewForm = ({ name }) => {
  return (
    <ReviewBox>
      <Text>{"There are no reviews yet."}</Text>
      <ReviewFormBox>
        <ReviewHeading>Be the first to review {`"${name}"`}</ReviewHeading>
        <ReviewText>
          Your email address will not be published. Required fields are marked *
        </ReviewText>
        <ReviewRating>
          Your rating * &nbsp;
          <Rating>
            <BsStar style={{ fontSize: "15px", color: "rgb(80,80,80)" }} />
            &nbsp;
            <BsStar style={{ fontSize: "15px", color: "rgb(80,80,80)" }} />
            &nbsp;
            <BsStar style={{ fontSize: "15px", color: "rgb(80,80,80)" }} />
            &nbsp;
            <BsStar style={{ fontSize: "15px", color: "rgb(80,80,80)" }} />
            &nbsp;
            <BsStar style={{ fontSize: "15px", color: "rgb(80,80,80)" }} />
          </Rating>
        </ReviewRating>
        <TextAreaBox>
          <ReviewRating>Your review *</ReviewRating>
          <TextArea></TextArea>
        </TextAreaBox>
        <InputBox>
          <InputWrap>
            <Label>Name *</Label>
            <Input type="text" />
          </InputWrap>
          <InputWrap>
            <Label>Email *</Label>
            <Input type="text" />
          </InputWrap>
        </InputBox>
        <span>
          <Button>SUBMIT</Button>
        </span>
      </ReviewFormBox>
    </ReviewBox>
  );
};

export default ReviewForm;
