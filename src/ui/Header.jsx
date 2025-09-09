import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiOutlineMenu } from "react-icons/hi";

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    padding: 1.2rem 2.4rem;
    justify-content: space-between;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

function Header({ onToggleSidebar }) {
  function handleClick(e) {
    e.stopPropagation();
    onToggleSidebar();
  }

  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderGroup>
        <MenuButton onClick={handleClick}>
          <HiOutlineMenu />
        </MenuButton>
        <HeaderMenu />
      </HeaderGroup>
    </StyledHeader>
  );
}

export default Header;
