import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    background-color: var(--color-grey-200);
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* Remove arrows from number input */
  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    font-size: 1.3rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
  }

  @media (max-width: 360px) {
    font-size: 1.1rem;
    padding: 0.5rem 0.7rem;
  }
`;

export default Input;
