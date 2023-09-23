import WebAppLayout from "@/components/WebAppLayout";
import Avatar from "@/components/avatar/Avatar";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import { getLoginQueryData } from "@/queries/useLoginQuery";
import useProfilMutation from "@/queries/useProfileMutation";
import { Position, Profile, ProfileForm } from "@/types/profile";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

export default function Page() {
  const searchParams = useSearchParams();
  const data = getLoginQueryData();
  const [position, setPosition] = useState(data?.position);
  const [annual, setAnnual] = useState(data?.annual === null ? 0 : data?.annual);
  const { handleSubmit, register } = useForm<Profile>({
    defaultValues: { ...data, introduce: "", githubUrl: "", linkedInUrl: "", instagramUrl: "" },
  });
  const { mutateAsync } = useProfilMutation();
  const router = useRouter();

  const handlePositionSelect = (key: string) => {
    setPosition(key as Position);
  };
  const handleAnnualSelect = (key: string) => {
    setAnnual(Number(key));
  };

  const phone = searchParams.get("phoneNumber");
  const onSubmit = (body: Profile) => {
    if (position && String(annual) && phone) {
      mutateAsync({
        name: body.name,
        email: body.email,
        organization: body.organization,
        introduce: body.introduce,
        position,
        annual,
        phoneNumber: phone,
        profile_url: [body.githubUrl, body.linkedInUrl, body.instagramUrl],
      }).then(() => {
        router.push("user");
      });
    }
  };

  return (
    <WebAppLayout>
      <AvatarWrapper>
        <Avatar size="BIG" position={data?.position} />
      </AvatarWrapper>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <LabelWrapper>
            <Label>이름</Label>
            <Required>*</Required>
          </LabelWrapper>
          <Input
            size="medium"
            placeholder="본인의 실명을 작성해주세요."
            register={register("name", { required: true })}
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>분야</Label>
            <Required>*</Required>
          </LabelWrapper>
          <Select
            placeholder="분야를 선택해주세요."
            items={positions}
            itemKey={position}
            onSelect={handlePositionSelect}
          />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>소속</Label>
            <Required>*</Required>
          </LabelWrapper>
          <Input
            size="medium"
            placeholder="소속을 입력해주세요. (ex. oo고등학교, oo회사)"
            register={register("organization", { required: true })}
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>경력</Label>
            <Required>*</Required>
          </LabelWrapper>
          <Select
            placeholder="경력을 선택해주세요."
            items={annuals}
            itemKey={annual === null ? "0" : String(annual)}
            onSelect={handleAnnualSelect}
          />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>이메일</Label>
            <Required>*</Required>
          </LabelWrapper>
          <Input
            size="medium"
            placeholder="이메일을 입력해주세요."
            register={register("email", { required: true })}
            type="email"
          />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>자기소개</Label>
          </LabelWrapper>
          <Input size="medium" placeholder="자기소개를 입력해주세요." register={register("introduce")} />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>깃허브</Label>
          </LabelWrapper>
          <Input size="medium" placeholder="깃허브 주소를 입력해주세요." register={register("githubUrl")} />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>링크드인</Label>
          </LabelWrapper>
          <Input size="medium" placeholder="링크드인 주소를 입력해주세요." register={register("linkedInUrl")} />
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <Label>인스타그램 링크</Label>
          </LabelWrapper>
          <Input size="medium" placeholder="인스타그램 주소를 입력해주세요." register={register("instagramUrl")} />
        </InputWrapper>

        <Button type="submit" size="medium" label="시작하기" />
      </InputContainer>
    </WebAppLayout>
  );
}

const positions = [
  { key: "FRONT_END", value: "Front-end" },
  { key: "BACK_END", value: "Back-end" },
  { key: "DESIN", value: "Design" },
  { key: "ANDROID", value: "Android" },
  { key: "IOS", value: "Ios" },
  { key: "ETC", value: "Etc" },
];

const annuals = [
  { key: "0", value: "0" },
  { key: "1", value: "1" },
  { key: "2", value: "2" },
  { key: "3", value: "3" },
  { key: "4", value: "4" },
  { key: "5", value: "5" },
  { key: "6", value: "6" },
  { key: "7", value: "7" },
  { key: "8", value: "8" },
  { key: "9", value: "9" },
];

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 0 3.7rem;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`;

const InputWrapper = styled.div``;
const LabelWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`;
const Label = styled.p`
  position: relative;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d2d2d;
  margin-bottom: 1rem;
`;
const Required = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ea726f;
`;
