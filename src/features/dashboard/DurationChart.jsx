import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { useState, useEffect } from "react";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    padding: 2rem 2.4rem;
  }

  @media (max-width: 768px) {
    padding: 1.6rem 2rem;

    & > *:first-child {
      margin-bottom: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 1.6rem;
  }
`;

// Responsive Legend styles
const StyledPieChart = styled(PieChart)`
  @media (max-width: 768px) {
    .recharts-legend-wrapper {
      padding-left: 0 !important;
    }

    .recharts-default-legend {
      flex-wrap: wrap !important;
      justify-content: center !important;
    }

    .recharts-legend-item {
      margin: 0.2rem 0.5rem !important;
    }
  }
`;

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];

function prepareData(startData, stays) {
  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

// Hook to get screen size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();
  const { width } = useWindowSize();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);

  // Responsive chart dimensions and settings
  const getChartConfig = () => {
    if (width < 480) {
      return {
        height: 320,
        innerRadius: 50,
        outerRadius: 80,
        cx: "50%",
        cy: "50%",
        legendAlign: "center",
        legendVerticalAlign: "bottom",
        legendLayout: "horizontal",
        legendWidth: "100%",
        legendIconSize: 12,
      };
    } else if (width < 768) {
      return {
        height: 320,
        innerRadius: 60,
        outerRadius: 90,
        cx: "50%",
        cy: "45%",
        legendAlign: "center",
        legendVerticalAlign: "bottom",
        legendLayout: "horizontal",
        legendWidth: "100%",
        legendIconSize: 13,
      };
    } else if (width < 1200) {
      return {
        height: 320,
        innerRadius: 80,
        outerRadius: 110,
        cx: "50%",
        cy: "45%",
        legendAlign: "center",
        legendVerticalAlign: "bottom",
        legendLayout: "horizontal",
        legendWidth: "100%",
        legendIconSize: 14,
      };
    } else {
      return {
        height: 250,
        innerRadius: 85,
        outerRadius: 110,
        cx: "40%",
        cy: "50%",
        legendAlign: "right",
        legendVerticalAlign: "middle",
        legendLayout: "vertical",
        legendWidth: "30%",
        legendIconSize: 15,
      };
    }
  };

  const config = getChartConfig();

  return (
    <ChartBox>
      <Heading as="h2">Stay duration summary</Heading>
      <ResponsiveContainer width="100%" height={config.height}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={config.innerRadius}
            outerRadius={config.outerRadius}
            cx={config.cx}
            cy={config.cy}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign={config.legendVerticalAlign}
            align={config.legendAlign}
            width={config.legendWidth}
            layout={config.legendLayout}
            iconSize={config.legendIconSize}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
