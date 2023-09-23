import WebAppLayout from "@/components/WebAppLayout";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import useLoginQuery from "@/queries/useLoginQuery";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { styled } from "styled-components";

export default function Page() {
  const [value, setValue] = useState("");
  const { refetch } = useLoginQuery(value);
  const router = useRouter();
  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.length < 11) {
      return;
    }

    refetch();
    router.push("createProfile");
  };

  return (
    <WebAppLayout>
      <TitleWrapper>
        <Title>지금 뫄뫄뫄와</Title>
        <Title>네트워킹을 시작하세요</Title>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Input type="number" size="large" value={value} placeholder="휴대폰 번호 입력" onChange={handleChange} />
        <Button type="submit" size="medium" label="휴대폰 번호로 시작하기" />
      </FormWrapper>
    </WebAppLayout>
  );
}

const TitleWrapper = styled.h1`
  margin-top: 90px;
`;
const Title = styled.span`
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;
