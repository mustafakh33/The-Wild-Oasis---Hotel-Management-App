import styled from "styled-components";
import { useState, useEffect } from "react";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  min-height: 350px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    grid-column: 1 / span 2;
    min-height: 400px;
  }

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    padding: 1.8rem;
    gap: 1.4rem;
    min-height: 320px;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 1.6rem;
    gap: 1.2rem;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    min-height: 280px;
  }
`;

const TodayList = styled.ul`
  overflow-y: scroll;
  overflow-x: auto;
  flex: 1;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: var(--color-grey-100);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-400);
    border-radius: 10px;
    border: 2px solid var(--color-grey-100);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-brand-700);
  }

  /* Responsive scrolling height */
  @media (max-width: 1200px) {
    max-height: 250px;
  }

  @media (max-width: 768px) {
    max-height: 220px;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }

  & > * {
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      margin-bottom: 0.6rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 0.5rem;
    }
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-500);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }
`;

const SpinnerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;

  @media (max-width: 768px) {
    min-height: 120px;
  }

  @media (max-width: 480px) {
    min-height: 100px;
  }
`;

// Hook to get screen size for dynamic behavior
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();
  const { width } = useWindowSize();

  console.log(activities);

  const getVisibleActivities = () => {
    if (!activities) return [];

    if (width < 480) {
      return activities.slice(0, 5);
    } else if (width < 768) {
      return activities.slice(0, 7);
    } else if (width < 1200) {
      return activities.slice(0, 8);
    } else {
      return activities;
    }
  };

  const visibleActivities = getVisibleActivities();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>

        {width >= 768 && activities?.length > 0 && (
          <span
            style={{
              fontSize: "1.2rem",
              color: "var(--color-grey-500)",
              fontWeight: "500",
            }}
          >
            {activities.length}{" "}
            {activities.length === 1 ? "activity" : "activities"}
          </span>
        )}
      </Row>

      {!isLoading ? (
        visibleActivities?.length > 0 ? (
          <>
            <TodayList>
              {visibleActivities.map((activity) => (
                <TodayItem activity={activity} key={activity.id} />
              ))}
            </TodayList>

            {activities.length > visibleActivities.length && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: width < 768 ? "1.1rem" : "1.2rem",
                  color: "var(--color-grey-400)",
                  fontStyle: "italic",
                  marginTop: "0.5rem",
                }}
              >
                +{activities.length - visibleActivities.length} more
                activities...
              </p>
            )}
          </>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </StyledToday>
  );
}

export default TodayActivity;
