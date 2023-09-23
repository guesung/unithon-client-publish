import AdminLayout from "@/components/AdminLayout";
import WebAppLayout from "@/components/WebAppLayout";
import { useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import styled from "styled-components";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <AdminLayout>
      <WebAppLayout
        variant={step === 3 ? "web" : "webapp"}
        transitionx={step === 3 ? undefined : "12rem"}
        innerbackgroundcolor="#FFFFFF"
        outerbackgroundcolor="#F2F4FB"
        leftSide={
          step === 3 ? (
            <></>
          ) : (
            <MainTitle>
              해커톤
              <br />
              네트워킹의 정석
            </MainTitle>
          )
        }
      >
        {step === 1 && <Step1 handleNextClick={() => setStep(2)} />}
        {step === 2 && <Step2 handleNextClick={() => setStep(3)} />}
        {step === 3 && <Step3 />}
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
