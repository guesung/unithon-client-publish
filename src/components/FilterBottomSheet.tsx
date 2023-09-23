import Sheet from "react-modal-sheet";
import { useState } from "react";
import styled from "styled-components";
import Refresh from "./icon/Refresh";
import Close from "./icon/Close";
import { Spacing } from "@/styles/Spacing";
import Button from "./common/Button";
import BottomFixedDiv from "./BottomFixedDiv";
import useUserListQuery from "@/queries/useUserListQuery";
import { Order, Position } from "@/types/profile";
import OptionIcon from "./icon/OptionIcon";

const TAG_ANNUAL_LIST = [
  { label: "연차 높은 순", value: "DESC" },
  { label: "연차 낮은 순", value: "ASC" },
];

const TAG_POSITION_LIST = [
  { label: "전체", value: "ALL" },
  { label: "front-end", value: "FRONT_END" },
  { label: "back-end", value: "BACK_END" },
  { label: "Design", value: "DESIGN" },
  { label: "IOS", value: "IOS" },
  { label: "Android", value: "ANDROID" },
  { label: "기타", value: "ETC" },
];

export default function FilterBottomSheet({
  filter,
  handleFilter,
}: {
  filter: { position: Position; order: Order };
  handleFilter: ({ position, order }: { position: Position; order: Order }) => void;
}) {
  const [isOpen, setOpen] = useState(false);

  const { refetch } = useUserListQuery(filter.position, filter.order);

  const handleAnnualTagClick = (tag: Order) => {
    handleFilter({ ...filter, order: tag });
  };
  const handlePositionTagClick = (tag: Position) => {
    handleFilter({ ...filter, position: tag });
  };
  const handleRefreshClick = () => {
    handleFilter({ position: "ALL", order: "DESC" });
  };
  const handleCloseClick = () => {
    setOpen(false);
  };
  const handleFilterClick = () => {
    refetch();
    setOpen(false);
  };

  return (
    <>
      <OptionWrapper onClick={() => setOpen(true)}>
        <OptionIcon />
        <OptionLabel>옵션</OptionLabel>
      </OptionWrapper>

      <SheetWrapper isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[600]}>
        <SheetContainerWrapper>
          <Spacing size={40} />
          <SheetHeader>
            <SheetHeaderLeft>
              <Refresh onClick={handleRefreshClick} />
            </SheetHeaderLeft>
            <SheetHeaderMiddle>검색 옵션</SheetHeaderMiddle>

            <SheetHeaderRight>
              <Close onClick={handleCloseClick} />
            </SheetHeaderRight>
          </SheetHeader>
          <Spacing size={40} />
          <Sheet.Content>
            <SubTitle>연차 정렬</SubTitle>
            <Spacing size={20} />
            <TagList>
              {TAG_ANNUAL_LIST.map(tag => (
                <Tag
                  key={tag.label}
                  isselected={filter.order === tag.value}
                  onClick={() => handleAnnualTagClick(tag.value as Order)}
                >
                  {tag.label}
                </Tag>
              ))}
            </TagList>
            <Spacing size={30} />
            <SubTitle>분야 필터</SubTitle>
            <Spacing size={20} />
            <TagList>
              {TAG_POSITION_LIST.map(tag => (
                <Tag
                  key={tag.label}
                  isselected={filter.position === tag.value}
                  onClick={() => handlePositionTagClick(tag.value as Position)}
                >
                  {tag.label}
                </Tag>
              ))}
            </TagList>
            <Spacing size={30} />
            <BottomFixedDiv>
              <Button size="medium" label="시작하기" onClick={handleFilterClick} />
            </BottomFixedDiv>
          </Sheet.Content>
        </SheetContainerWrapper>
        <Sheet.Backdrop />
      </SheetWrapper>
    </>
  );
}

const SheetWrapper = styled(Sheet)`
  max-width: 40rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const SheetContainerWrapper = styled(Sheet.Container)`
  border-top-left-radius: 3rem !important;
  border-top-right-radius: 3rem !important;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const SheetHeader = styled(Sheet.Header)`
  display: flex;
  justify-content: space-between;
`;

const SheetHeaderLeft = styled.div``;

const SheetHeaderMiddle = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
`;

const SheetHeaderRight = styled.div``;

const SubTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.span<{ isselected: boolean }>`
  color: ${props => (props.isselected ? "#4473F5" : "#585858")};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #f2f2f2;
  padding-left: 1.85rem;
  padding-right: 1.85rem;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
  border-radius: 2rem;
`;
const OptionWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0.6rem 1.2rem;
  border: 1px solid #f2f2f2;
  background-color: #ffffff;
  border-radius: 4px;
`;
const OptionLabel = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #585858;
`;
