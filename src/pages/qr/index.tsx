import WebAppLayout from "@/components/WebAppLayout";
import Button from "@/components/common/Button";
import Image from "next/image";
import styled from "styled-components";

export default function QR() {
  return (
    <WebAppLayout backgroundcolor="#F2F4FB">
      <StyledQRCardWrapper>
        <ExampleQR />

        <StyledDottedHRWrapper>
          <DottedHR />
        </StyledDottedHRWrapper>
        <StyledTextContentsWrapper>
          <StyledRoomName>UNITHON 10</StyledRoomName>
          <StyledWelcomeText>해커톤에서 초대장이 도착했어요!</StyledWelcomeText>
        </StyledTextContentsWrapper>
        <StyledCTAWrapper>
          <Button size="medium" label="바로 가기" />
        </StyledCTAWrapper>
      </StyledQRCardWrapper>
    </WebAppLayout>
  );
}

const StyledQRCardWrapper = styled.div`
  width: 100%;
  margin-top: 9rem;
  border-radius: 1rem;
  background-color: #fff;
  height: 46.6rem;
`;

const StyledTextContentsWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  padding: 3rem 2rem 4rem;
  justify-content: center;
`;

const StyledRoomName = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: #2d2d2d;
  text-align: center;
`;

const StyledWelcomeText = styled.span`
  font-size: 1.6rem;
  color: #8d8d8d;
`;

const StyledCTAWrapper = styled.div`
  padding: 0 2rem 3rem;
`;

const StyledQRWrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 4rem 0;
`;

function ExampleQR() {
  return (
    <StyledQRWrapper>
      <Image src='/qr.png' width='180' height='180' alt='qr' />
    </StyledQRWrapper>
  );
}

const StyledDottedHRWrapper = styled.div`
  height: 0;
  padding: 0 2rem;
`;

function DottedHR() {
  return (
    <svg width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1.46429" x2="300" y2="1.46429" stroke="#D2D1D1" stroke-width="1.07143" stroke-dasharray="2.14 2.14" />
    </svg>
  );
}
