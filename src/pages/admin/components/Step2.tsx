import Button from "@/components/common/Button";
import CircleCheckSolid from "@/components/icon/CircleCheckSolid";
import { Spacing } from "@/styles/Spacing";
import styled from "styled-components";

interface Step2Props {
  handleNextClick: () => void;
}

export default function Step2(props: Step2Props) {
  return (
    <Step2Wrapper>
      <CircleCheckSolid />
      <Title>
        방 생성이 완료
        <br />
        되었습니다.
      </Title>

      <Spacing size={100} />

      <Button size="medium" label="이벤트 보기" onClick={props.handleNextClick} />
    </Step2Wrapper>
  );
}

const Step2Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-direction: column;
`;

const Title = styled.h1`
  color: var(--BLACK, #2d2d2d);
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
