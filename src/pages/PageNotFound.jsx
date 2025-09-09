import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

const StyledPageNotFound = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  /* Tablet styles */
  @media (min-width: 768px) {
    padding: 3.2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 4.8rem;
  }
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2rem;
  width: 100%;
  max-width: 96rem;
  text-align: center;

  /* Tablet styles */
  @media (min-width: 768px) {
    padding: 3.2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 4.8rem;
  }

  & h1 {
    margin-bottom: 2rem;
    font-size: clamp(2rem, 4vw, 3.6rem);

    /* Tablet styles */
    @media (min-width: 768px) {
      margin-bottom: 2.4rem;
    }

    /* Desktop styles */
    @media (min-width: 1024px) {
      margin-bottom: 3.2rem;
    }
  }
`;

const BackButton = styled.button`
  background-color: var(--color-brand-600, #3b82f6);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  /* Mobile first approach */
  width: 100%;

  /* Tablet styles */
  @media (min-width: 768px) {
    width: auto;
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 1.4rem 3.2rem;
    font-size: 1.8rem;
  }

  &:hover {
    background-color: var(--color-brand-700, #2563eb);
    transform: translateX(-2px);
  }

  &:focus {
    outline: 2px solid var(--color-brand-600, #3b82f6);
    outline-offset: 2px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <BackButton onClick={moveBack}>&larr; Go back</BackButton>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
