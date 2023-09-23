import styled from "styled-components";
import EmaiIcon from "./icon/Email";
import Building from "./icon/Building";
import Link from "next/link";
import Image from "next/image";
import Github from "./icon/Github";
import LinkedIn from "./icon/linkedIn";
import Instagram from "./icon/Instagram";
import { Profile } from "@/types/profile";

interface CardProps {
  cardData: Profile;
}

export default function Card({ cardData }: CardProps) {
  const { name, email, position, organization, annual, introduce } = cardData;

  return (
    <CardWrapper>
      <Introduction>
        <IntroductionTop>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </IntroductionTop>
        <Spacing size={12} />
        <IntroductionBottom>
          <Introduce>{introduce}</Introduce>
        </IntroductionBottom>
      </Introduction>
      <Spacing size={23} />
      {annual}년차
      <Spacing size={10} />
      <Diviser />
      <Spacing size={10} />
      <Detail>
        <DetailLeft>
          <Email>
            <EmaiIcon />
            {email}
          </Email>
          <Spacing size={10} />
          <Organization>
            <Building />
            {organization}
          </Organization>
        </DetailLeft>
        {/* <DetailRight>
          {githubUrl && (
            <Icon href={githubUrl}>
              <Github />
            </Icon>
          )}
          {linkedInUrl && (
            <Icon href={linkedInUrl}>
              <LinkedIn />
            </Icon>
          )}
          {instagramUrl && (
            <Icon href={instagramUrl}>
              <Instagram />
            </Icon>
          )}
        </DetailRight> */}
      </Detail>
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-top: 2.4rem;
  padding-bottom: 2rem;
`;

const Introduction = styled.div``;

const IntroductionTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Spacing = styled.div<{ size: number }>`
  height: ${({ size }) => size * 0.1}rem;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
`;

const Position = styled.div`
  color: #4473f5;
`;

const Diviser = styled.div`
  height: 0.1rem;
  background-color: #f2f2f2;
`;

const IntroductionBottom = styled.div``;

const Introduce = styled.div``;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailLeft = styled.div``;

const DetailRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Icon = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;

const IconImage = styled(Image)``;

const Email = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

const Organization = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;
