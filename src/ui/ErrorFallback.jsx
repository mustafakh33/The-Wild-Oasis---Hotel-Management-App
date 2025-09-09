import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 1.2rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) {
    padding: 3.2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 4.8rem;
  }

  /* Large desktop styles */
  @media (min-width: 1440px) {
    padding: 6.4rem;
  }
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));

  padding: 2rem;
  width: 100%;
  max-width: 96rem;
  text-align: center;

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 1.6rem;
    margin: 0 0.8rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) {
    padding: 3.2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 4.8rem;
  }

  /* Large desktop styles */
  @media (min-width: 1440px) {
    padding: 6.4rem;
  }

  & h1 {
    margin-bottom: 1.2rem;
    font-size: clamp(2rem, 5vw, 3.6rem);
    line-height: 1.2;

    /* Tablet styles */
    @media (min-width: 768px) {
      margin-bottom: 1.6rem;
    }

    /* Desktop styles */
    @media (min-width: 1024px) {
      margin-bottom: 2rem;
    }
  }

  & p {
    font-family: "Sono", monospace;
    margin-bottom: 2.4rem;
    color: var(--color-grey-500);
    font-size: clamp(1.4rem, 2.5vw, 1.6rem);
    line-height: 1.6;
    word-break: break-word;
    hyphens: auto;

    /* Small mobile styles */
    @media (max-width: 480px) {
      margin-bottom: 2rem;
      padding: 0 0.8rem;
    }

    /* Tablet styles */
    @media (min-width: 768px) {
      margin-bottom: 2.8rem;
    }

    /* Desktop styles */
    @media (min-width: 1024px) {
      margin-bottom: 3.2rem;
    }

    /* Large desktop styles */
    @media (min-width: 1440px) {
      margin-bottom: 4rem;
    }
  }
`;

const ResponsiveButton = styled(Button)`
  /* Mobile first approach */
  width: 100%;
  padding: 1.2rem 2rem;
  font-size: 1.4rem;

  /* Small tablet styles */
  @media (min-width: 480px) {
    width: auto;
    min-width: 16rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) {
    padding: 1.4rem 2.8rem;
    font-size: 1.6rem;
    min-width: 18rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding: 1.6rem 3.2rem;
    font-size: 1.8rem;
    min-width: 20rem;
  }

  /* Large desktop styles */
  @media (min-width: 1440px) {
    padding: 1.8rem 4rem;
    font-size: 2rem;
    min-width: 24rem;
  }

  /* Enhanced interactions */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--color-brand-600, #3b82f6);
    outline-offset: 2px;
  }
`;

const ErrorIcon = styled.div`
  font-size: clamp(4rem, 8vw, 8rem);
  margin-bottom: 1.6rem;
  opacity: 0.8;

  /* Animation */
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <ErrorIcon>🧐</ErrorIcon>
          <Heading as="h1">Something went wrong</Heading>
          <p>
            {error?.message ||
              "An unexpected error occurred. Please try again."}
          </p>
          <ResponsiveButton size="large" onClick={resetErrorBoundary}>
            Try again
          </ResponsiveButton>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
