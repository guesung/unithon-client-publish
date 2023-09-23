import styled from "styled-components";

interface CardProps {
  cardData: {
    name: string;
    email: string;
    phoneNumber: string;
    position: "FRONT_END" | "BACK_END" | "DESIGN" | "ANDROID" | "IOS"; // etc.
    organization: string;
    annual: number;
    profileImageUrl: string;
    introduce: string;
    githubUrl: string;
    linkedInUrl: string;
    instagramUrl: string;
  };
}

export default function Card({ cardData }: CardProps) {
  const {
    name,
    email,
    phoneNumber,
    position,
    organization,
    annual,
    profileImageUrl,
    introduce,
    githubUrl,
    linkedInUrl,
    instagramUrl,
  } = cardData;

  return (
    <CardWrapper>
      <Introduction>
        <IntroductionTop>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </IntroductionTop>
        <IntroductionBottom>
          <Introduce>{introduce}</Introduce>
        </IntroductionBottom>
      </Introduction>
      <Detail>
        <Email>{email}</Email>
        <Belong>{}</Belong>
      </Detail>
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Introduction = styled.div``;

const IntroductionTop = styled.div``;

const Name = styled.div``;

const Position = styled.div``;

const IntroductionBottom = styled.div``;

const Introduce = styled.div``;

const Detail = styled.div``;

const Email = styled.div``;

const Belong = styled.div``;

// const BaseButton = styled.button<{ size: Size }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: ${({ size }) => (size === "medium" ? "14px" : "6px")};
//   font-size: ${({ size }) => (size === "medium" ? "16px" : "10px")};
//   color: #fff;
//   background-color: #4473f5;
//   border-radius: 4px;
// `;
