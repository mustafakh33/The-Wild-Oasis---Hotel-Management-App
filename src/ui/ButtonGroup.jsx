import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  /* For mobile screens */
  @media (max-width: 768px) {
    flex-direction: column;

    & > button {
      width: 100%;
    }
  }
`;

export default ButtonGroup;
