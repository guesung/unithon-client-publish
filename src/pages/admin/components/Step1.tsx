import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import CloudArrowUpSolid from "@/components/icon/CloudArrowUpSolid";
import useCSVMutation from "@/queries/useCSVMutation";
import { Spacing } from "@/styles/Spacing";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface Step1Props {
  handleNextClick: () => void;
}

export default function Step1({ handleNextClick }: Step1Props) {
  const { mutate } = useCSVMutation();

  const { register, watch } = useForm();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", watch("csv")[0]);
    mutate({ file: formData });
    handleNextClick();
  };

  return (
    <div>
      <Spacing size={90} />
      <Title>
        네트워킹을 위한 방을
        <br />
        만들어보세요!
      </Title>
      <Spacing size={30} />
      <SubTitle>제목</SubTitle>
      <Spacing size={10} />
      <Input size="medium" placeholder="방 제목을 입력해주세요" register={register("title", { required: true })} />
      <Spacing size={20} />
      <SubTitle>파일 첨부</SubTitle>
      <Spacing size={10} />

      <CSVInputLabel htmlFor="csv">
        <CloudArrowUpSolid />
        <LabelText>CSV 파일을 업로드 할 수 있습니다.</LabelText>
      </CSVInputLabel>
      <HiddenInput {...register("csv", { required: true })} id="csv" type="file" />

      <Spacing size={100} />

      <Button size="medium" label="방 만들기" onClick={handleSubmit} />
    </div>
  );
}

const Title = styled.h1`
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubTitle = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const HiddenInput = styled.input`
  display: none;
`;

const CSVInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 34rem;
  height: 16rem;
  border-radius: 4px;
  border: 2px dashed var(--GRAY3, #d2d1d1);
  background: var(--WHITE, #fff);
`;

const LabelText = styled.p`
  color: var(--GRAY2, #8d8d8d);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
