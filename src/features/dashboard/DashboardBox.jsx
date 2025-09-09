import styled from "styled-components";

const DashboardBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  /* Responsive Design */
  @media (max-width: 1200px) {
    padding: 1.8rem;
    gap: 1.4rem;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
  }
`;

export default DashboardBox;
