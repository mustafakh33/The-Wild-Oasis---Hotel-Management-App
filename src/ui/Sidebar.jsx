import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { HiXMark } from "react-icons/hi2";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1200px) {
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
  }

  ${(props) =>
    props.open &&
    css`
      @media (max-width: 1200px) {
        transform: translateX(0);
      }
    `}
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background-color: var(--color-grey-100);
    border: none;
    transition: all 0.2s;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    &:hover {
      background-color: var(--color-grey-200);
    }

    & svg {
      width: 2.2rem;
      height: 2.2rem;
      color: var(--color-grey-800);
    }
  }
`;

function Sidebar({ isOpen, onCloseSidebar }) {
  const ref = useOutsideClick(onCloseSidebar, false);

  return (
    <StyledSidebar open={isOpen} ref={ref}>
      <CloseButton onClick={onCloseSidebar}>
        <HiXMark />
      </CloseButton>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
