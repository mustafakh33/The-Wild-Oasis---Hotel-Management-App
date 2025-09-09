import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import styled from "styled-components";

const StyledAddCabin = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const AddCabin = () => {
  return (
    <StyledAddCabin>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </StyledAddCabin>
  );
};

export default AddCabin;
