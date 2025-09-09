import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    border-bottom: none;
    padding-top: 1.6rem;
  }

  /* Responsive styles */
  @media (max-width: 1200px) {
    grid-template-columns: 22rem 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 20rem 1fr 1fr;
    gap: 1.8rem;
    padding: 1rem 0;

    &:has(button) {
      gap: 1rem;
      padding-top: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1rem 0;

    &:has(button) {
      flex-direction: column-reverse;
      align-items: stretch;
      gap: 1rem;
      padding-top: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    padding: 0.8rem 0;

    &:has(button) {
      gap: 0.8rem;
      padding-top: 1rem;
    }
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
    padding: 0.6rem 0;

    &:has(button) {
      gap: 0.6rem;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--color-grey-600);

  /* Responsive styles */
  @media (max-width: 992px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  font-weight: 500;

  /* Responsive styles */
  @media (max-width: 992px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0.4rem;
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-top: 0.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const FormRow = ({ label, error, children }) => {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
