import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 1.5rem;
        padding: 1.1rem 2.2rem;
      `}
    ${(props) =>
      props.size === "medium" &&
      css`
        font-size: 1.3rem;
        padding: 1.1rem 1.5rem;
      `}
    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
      `}
  }

  @media (max-width: 768px) {
    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 1.4rem;
        padding: 1rem 2rem;
      `}
    ${(props) =>
      props.size === "medium" &&
      css`
        font-size: 1.3rem;
        padding: 1rem 1.4rem;
      `}
    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 1.1rem;
        padding: 0.6rem 1rem;
      `}
  }

  @media (max-width: 480px) {
    min-height: 3.6rem;
    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 1.3rem;
        padding: 0.9rem 1.8rem;
      `}
    ${(props) =>
      props.size === "medium" &&
      css`
        font-size: 1.2rem;
        padding: 0.8rem 1.2rem;
      `}
    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 1rem;
        padding: 0.5rem 0.8rem;
      `}
  }

  @media (max-width: 360px) {
    min-height: 3.4rem;
    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 1.2rem;
        padding: 0.8rem 1.6rem;
      `}
    ${(props) =>
      props.size === "medium" &&
      css`
        font-size: 1.1rem;
        padding: 0.7rem 1rem;
      `}
    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 0.9rem;
        padding: 0.4rem 0.7rem;
      `}
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
