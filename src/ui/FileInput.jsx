import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.6rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: all 0.2s;
  }

  &::file-selector-button:hover {
    background-color: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:disabled::file-selector-button {
    cursor: not-allowed;
    background-color: var(--color-grey-400);
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    font-size: 1.3rem;
    padding: 0.7rem 1rem;

    &::file-selector-button {
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;

    &::file-selector-button {
      padding: 0.4rem 0.8rem;
      margin-right: 0.8rem;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 360px) {
    font-size: 1.1rem;
    padding: 0.5rem 0.7rem;

    &::file-selector-button {
      padding: 0.3rem 0.6rem;
      margin-right: 0.6rem;
      font-size: 1rem;
    }
  }
`;

export default FileInput;
