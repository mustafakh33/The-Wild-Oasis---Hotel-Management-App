import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 38rem;
  }

  @media (max-width: 480px) {
    width: 90vw;
    max-width: 350px;

    & p {
      font-size: 1.4rem;
    }

    & div {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }

  /* Very small mobile screens */
  @media (max-width: 360px) {
    width: 95vw;
    gap: 0.8rem;

    & p {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
