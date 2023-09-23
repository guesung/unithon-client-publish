import Sheet from "react-modal-sheet";
import { useState } from "react";
import styled from "styled-components";
import Refresh from "./icon/Refresh";
import Close from "./icon/Close";
import { Spacing } from "@/styles/Spacing";

const TAG_ANNUAL_LIST = ["연차 높은 순", "연차 낮은 순"];

const TAG_POSITION_LIST = ["전체", "front-end", "back-end", "Design", "IOS", "Android", "기타"];

export default function FilterBottomSheet() {
  const [isOpen, setOpen] = useState(false);
  const [selectedAnnualTag, setSelectedAnnualTag] = useState("연차 높은 순");
  const [selectedPositionTag, setSelectedPositionTag] = useState("전체");

  const handleAnnualTagClick = (tag: string) => {
    setSelectedAnnualTag(tag);
  };
  const handlePositionTagClick = (tag: string) => {
    setSelectedPositionTag(tag);
  };
  const handleRefreshClick = () => {
    setSelectedAnnualTag("연차 높은 순");
    setSelectedPositionTag("전체");
  };
  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>필터</button>

      <SheetWrapper isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[600]}>
        <SheetContainerWrapper>
          <Spacing size={40} />
          <SheetHeader>
            <SheetHeaderLeft>
              <Refresh onClick={handleRefreshClick} />
            </SheetHeaderLeft>
            <SheetHeaderMiddle>검색필터</SheetHeaderMiddle>

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
                <Tag key={tag} isSelected={selectedAnnualTag === tag} onClick={() => handleAnnualTagClick(tag)}>
                  {tag}
                </Tag>
              ))}
            </TagList>
            <Spacing size={30} />
            <SubTitle>분야 정렬</SubTitle>
            <Spacing size={20} />
            <TagList>
              {TAG_POSITION_LIST.map(tag => (
                <Tag key={tag} isSelected={selectedPositionTag === tag} onClick={() => handlePositionTagClick(tag)}>
                  {tag}
                </Tag>
              ))}
            </TagList>
            <Spacing size={30} />
          </Sheet.Content>
        </SheetContainerWrapper>
        <Sheet.Backdrop />
      </SheetWrapper>
    </>
  );
}

const SheetWrapper = styled(Sheet)``;

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

const Tag = styled.span<{ isSelected: boolean }>`
  color: ${props => (props.isSelected ? "#4473F5" : "#585858")};
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