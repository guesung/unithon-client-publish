import Avatar from "@/components/avatar/Avatar";
import useTimer from "@/hooks/useTimer";
import useEventQuery from "@/queries/useEventQuery";
import { Spacing } from "@/styles/Spacing";
import { Position } from "@/types/profile";
import styled from "styled-components";
import style from "styled-jsx/style";

type User = {
  name: string;
  position: Position;
  introduce: string;
};

export default function Step3() {
  const timer = useTimer({ remainedTime: 60 * 60 * 2 });

  useEventQuery();

  const userList: User[] = [
    {
      name: "이창진",
      position: "FRONT_END",
      introduce: "전 세계 여행을 사랑하는 개발자 🧑‍🎨",
    },

    {
      name: "강주혁",
      position: "BACK_END",
      introduce: "손흥민, BTS, 유니톤,  Lets  go",
    },
    {
      name: "정원식",
      position: "DESIGN",
      introduce: "사용자 경험을 중시하는 UX 디자이너입니다. ",
    },
    {
      name: "허창원",
      position: "IOS",
      introduce: "iOS 앱을 만들어 새로운 아이디어를 현실로 만들어 내고 싶습니다.",
    },
  ];

  return (
    <StyledLayout>
      <StyledEventTitle>이벤트</StyledEventTitle>

      <StyledTimer>{timer}</StyledTimer>
      <StyledDescription>MBTI에 대해 이야기 해주세요!</StyledDescription>

      <Spacing size={32} />

      <StyledUserCardContainer>
        {userList.map((user, idx) => (
          <UserCard user={user} key={idx} />
        ))}
      </StyledUserCardContainer>
    </StyledLayout>
  );
}

function UserCard({ user }: { user: User }) {
  return (
    <StyledCardWarpper>
      <StyledAvatarWrapper>
        <Avatar size="MEDIUM" position={user.position} />
      </StyledAvatarWrapper>
      <StyledUserName>{user.name}</StyledUserName>
      <StyledPosition>{user.position}</StyledPosition>
      <StyledIntroduce>{user.introduce}</StyledIntroduce>
    </StyledCardWarpper>
  );
}

const StyledLayout = styled.div`
  display: grid;
  justify-content: center;
`;

const StyledEventTitle = styled.div`
  padding-top: 3rem;
  font-weight: 700;
  font-size: 2.8rem;
  text-align: center;
`;

const StyledTimer = styled.div`
  padding-top: 20rem;
  color: #4473f5;
  font-weight: 500;
  font-size: 4.4rem;
  text-align: center;
`;

const StyledDescription = styled.div`
  padding-top: 0.6rem;
  font-size: 9rem;
  font-weight: 700;
`;

const StyledUserCardContainer = styled.div`
  display: flex;
  column-gap: 3rem;
  justify-content: center;
`;

const StyledCardWarpper = styled.div`
  width: 26rem;
  height: 28rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 3rem 3rem 2.5rem;
  text-align: center;
`;

const StyledAvatarWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const StyledUserName = styled.div`
  padding-top: 1rem;
  font-size: 3.8rem;
  font-weight: 700;
`;

const StyledPosition = styled.div`
  padding-top: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(68, 115, 245, 1);
`;

const StyledIntroduce = styled.div`
  padding-top: 1.4rem;
  font-weight: 500;
  font-size: 1.2rem;
`;
