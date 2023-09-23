import WebAppLayout from "@/components/WebAppLayout";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import useLoginQuery from "@/queries/useLoginQuery";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

export default function Page() {
  const { register, getValues, watch } = useForm({ values: { phone: "" } });
  const { refetch } = useLoginQuery(watch().phone);
  const router = useRouter();
  const [loginInput, setLoginInput] = useState({ value: "", error: false });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (getValues().phone.length < 11) {
      setLoginInput({ ...loginInput, error: true });
      return;
    }

    refetch().finally(() => {
      router.push(`createProfile?phoneNumber=${getValues().phone}`);
    });
  };

  return (
    <WebAppLayout>
      <TitleWrapper>
        <Title>지금 뫄뫄뫄와</Title>
        <Title>네트워킹을 시작하세요</Title>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Input type="number" size="large" placeholder="휴대폰 번호 입력" register={register("phone")} />
        <HelperTextWrapper>{loginInput.error && <div>01012345678 형식으로 입력해주세요</div>}</HelperTextWrapper>
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
  margin-top: 50px;
`;

const HelperTextWrapper = styled.span`
  height: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
`;
