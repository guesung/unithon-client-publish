import { styled } from "styled-components";
import ArrowDownIcon from "../icon/ArrowDownIcon";
import { forwardRef, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

interface Item {
  key: string;
  value: string;
}

interface Props {
  placeholder: string;
  itemKey?: Item["key"];
  items: Item[];
  onSelect: (key: string) => void;
}

const Select = ({ placeholder, itemKey, items, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleOpenClick = () => {
    setIsOpen(prev => !prev);
  };

  useOutsideClick(ref, () => setIsOpen(false));

  const item = items.find(item => item.key === itemKey);

  return (
    <Wrapper ref={ref} onClick={handleOpenClick}>
      {item ? <Value>{item?.value}</Value> : <Placeholder>{placeholder}</Placeholder>}
      <ArrowDownIcon />
      {isOpen && <SelectItemList items={items} onSelect={onSelect} />}
    </Wrapper>
  );
};

const SelectItemList = ({ items, onSelect }: { items: Item[]; onSelect: (key: string) => void }) => {
  return (
    <ListWrapper>
      {items.map(item => (
        <Item key={item.key} onClick={() => onSelect(item.key)}>
          {item.value}
        </Item>
      ))}
    </ListWrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1.3rem 1.6rem;
  border: 0.1rem solid #d2d1d1;
  border-radius: 0.4rem;
  transition: border 0.2s;
  &:hover {
    border: 0.1rem solid #4473f5;
  }
  &:focus-within {
    border: 0.1rem solid #4473f5;
  }
`;

const Value = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  color: #2d2d2d;
`;

const Placeholder = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  color: #8d8d8d;
`;

const ListWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  padding: 0.4rem 0;
  border: 0.1rem solid #d2d1d1;
  border-radius: 0.8rem;
  background-color: #fff;
`;

const Item = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 1.4rem;

  &:hover {
    background-color: #f2f4fb;
  }
`;
