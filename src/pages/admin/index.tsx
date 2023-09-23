import AdminLayout from "@/components/AdminLayout";
import WebAppLayout from "@/components/WebAppLayout";
import { useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import styled from "styled-components";

export default function Page() {
  const [step, setStep] = useState(2);

  return (
    <AdminLayout>
      <WebAppLayout
        transitionx="12rem"
        innerbackgroundcolor="#FFFFFF"
        outerbackgroundcolor="#F2F4FB"
        leftSide={
          <MainTitle>
            해커톤
            <br />
            네트워킹의 정석
          </MainTitle>
        }
      >
        {step === 1 && <Step1 handleNextClick={() => setStep(2)} />}
        {step === 2 && <Step2 />}
      </WebAppLayout>
    </AdminLayout>
  );
}

const MainTitle = styled.h1`
  color: var(--BLACK, #282931);
  font-family: Pretendard;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
`;
