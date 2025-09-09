import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      max-width: 95vw;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 1200px) {
    ${(props) =>
      props.type === "modal" &&
      css`
        width: 70rem;
        max-width: 90vw;
      `}
  }

  @media (max-width: 992px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 2rem 3rem;
      `}
    ${(props) =>
      props.type === "modal" &&
      css`
        width: 60rem;
        max-width: 85vw;
      `}
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 1.6rem 2rem;
      `}
    ${(props) =>
      props.type === "modal" &&
      css`
        width: 100%;
        max-width: 90vw;
        min-width: 320px;
        max-height: 85vh;
        overflow-y: auto;
      `}
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 1.2rem 1.6rem;
      `}
    ${(props) =>
      props.type === "modal" &&
      css`
        max-width: 95vw;
        min-width: 300px;
      `}
    font-size: 1.2rem;
  }

  @media (max-width: 360px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 1rem 1.2rem;
      `}
    ${(props) =>
      props.type === "modal" &&
      css`
        min-width: 280px;
      `}
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
