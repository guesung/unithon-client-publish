import Card from "@/components/Card";
import FilterBottomSheet from "@/components/FilterBottomSheet";
import WebAppLayout from "@/components/WebAppLayout";
import useUserListQuery from "@/queries/useUserListQuery";
import { Spacing } from "@/styles/Spacing";
import { Order, Position } from "@/types/profile";
import { useState } from "react";
import styled from "styled-components";

export default function Page() {
  const [filter, setFilter] = useState<{ position: Position; order: Order }>({ position: "ALL", order: "DESC" });

  return (
    <WebAppLayout innerbackgroundcolor="#F2F4FB">
      <TitleMiddle>명함 목록</TitleMiddle>
      <Introducion>
        <IntroductionTop>
          이번 해커톤에
          <br />
          함께하신 분들을 소개합니다!
        </IntroductionTop>
        <Spacing size={20} />
        <IntroductionBottom>참가자 분들의 정보를 확인할 수 있습니다.</IntroductionBottom>
      </Introducion>

      <Spacing size={32} />

      <CardListContainer filter={filter} setFilter={setFilter} />
    </WebAppLayout>
  );
}

function CardListContainer({
  filter,
  setFilter,
}: {
  filter: { position: Position; order: Order };
  setFilter: ({ position, order }: { position: Position; order: Order }) => void;
}) {
  const userLists = useUserListQuery(filter.position, filter.order, true);

  const handleFilter = ({ position, order }: { position?: Position; order?: Order }) => {
    setFilter({ position: position || filter.position, order: order || filter.order });
  };

  return (
    <>
      <Title>
        <TitleLeft>명함 목록</TitleLeft>
        <TitleRight>
          <FilterBottomSheet filter={filter} handleFilter={handleFilter} />
        </TitleRight>
      </Title>

      <Spacing size={22} />

      {!userLists.isFetching && userLists.data?.user_list.length === 0 && <div>해당하는 분이 없어요!</div>}

      <CardList>{userLists.data?.user_list.map((cardData, idx) => <Card cardData={cardData} key={idx} />)}</CardList>
    </>
  );
}

const TitleMiddle = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;

const TitleLeft = styled.div``;

const TitleRight = styled.div``;

const Introducion = styled.section`
  border-radius: 1rem;
  background: linear-gradient(90deg, #4473f5 0%, #77a5fa 100%);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2.8rem;
  padding-top: 2.8rem;
`;

const IntroductionTop = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const IntroductionBottom = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
