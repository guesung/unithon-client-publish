import styled from "styled-components";
import EmaiIcon from "./icon/Email";
import Building from "./icon/Building";
import Link from "next/link";
import Github from "./icon/Github";
import LinkedIn from "./icon/linkedIn";
import Instagram from "./icon/Instagram";
import { Profile } from "@/types/profile";
import Avatar from "./avatar/Avatar";
import Badge from "./badge/Badge";

interface CardProps {
  cardData: Profile;
}

export default function Card({ cardData }: CardProps) {
  const { name, email, position, organization, annual, introduce, profile_url } = cardData;

  const githubUrl = profile_url?.find(url => url?.includes("github.com"));
  const linkedInUrl = profile_url?.find(url => url?.includes("linkedin.com"));
  const instagramUrl = profile_url?.find(url => url?.includes("instagram.com"));

  return (
    <CardWrapper>
      <IntroductionWrapper>
        <Introduction>
          <IntroductionTop>
            <Name>{name}</Name>
            <Position>{position}</Position>
          </IntroductionTop>
          <Spacing size={12} />
          <IntroductionBottom>
            <Introduce>{introduce}</Introduce>
          </IntroductionBottom>
          <Badge selected={true}>{annual}년차</Badge>
        </Introduction>
        <AvatarWrapper>
          <Avatar size="MEDIUM" position={position} />
        </AvatarWrapper>
      </IntroductionWrapper>
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
        <DetailRight>
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
        </DetailRight>
      </Detail>
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem 2.4rem;
`;

const IntroductionWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const Introduction = styled.div``;

const IntroductionTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const AvatarWrapper = styled.div`
  display: grid;
  justify-content: end;
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

const Introduce = styled.div`
  height: 4rem;
  max-width: 19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailLeft = styled.div``;

const DetailRight = styled.div`
  display: flex;
  align-items: end;
  gap: 0.8rem;
`;

const Icon = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;

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
