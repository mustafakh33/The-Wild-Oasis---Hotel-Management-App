import styled from "styled-components";
import { useState, useEffect } from "react";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  min-height: 400px;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    min-height: 380px;
  }

  @media (max-width: 768px) {
    min-height: 360px;

    .recharts-text {
      font-size: 1.2rem !important;
    }

    .recharts-cartesian-axis-tick-value {
      font-size: 1.1rem !important;
    }

    .recharts-tooltip-wrapper {
      font-size: 1.2rem !important;
    }
  }

  @media (max-width: 480px) {
    min-height: 320px;

    .recharts-text {
      font-size: 1.1rem !important;
    }

    .recharts-cartesian-axis-tick-value {
      font-size: 1rem !important;
    }
  }

  & > h2 {
    @media (max-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

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

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const { width } = useWindowSize();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, width < 768 ? "MMM dd" : "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  const getChartConfig = () => {
    if (width < 480) {
      return {
        height: 250,
        margins: { top: 10, right: 10, left: 10, bottom: 10 },
        strokeWidth: 1.5,
        fontSize: 11,
        tickCount: 4,
      };
    } else if (width < 768) {
      return {
        height: 280,
        margins: { top: 15, right: 15, left: 15, bottom: 15 },
        strokeWidth: 2,
        fontSize: 12,
        tickCount: 6,
      };
    } else if (width < 1200) {
      return {
        height: 300,
        margins: { top: 20, right: 20, left: 20, bottom: 20 },
        strokeWidth: 2,
        fontSize: 13,
        tickCount: 8,
      };
    } else {
      return {
        height: 320,
        margins: { top: 25, right: 25, left: 25, bottom: 25 },
        strokeWidth: 2,
        fontSize: 14,
        tickCount: numDays > 30 ? 10 : numDays,
      };
    }
  };

  const config = getChartConfig();

  const getTitle = () => {
    const startDate = format(
      allDates.at(0),
      width < 768 ? "MMM dd" : "MMM dd yyyy"
    );
    const endDate = format(
      allDates.at(-1),
      width < 768 ? "MMM dd" : "MMM dd yyyy"
    );

    if (width < 480) {
      return `Sales ${startDate} - ${endDate}`;
    } else {
      return `Sales from ${startDate} — ${endDate}`;
    }
  };

  return (
    <StyledSalesChart>
      <Heading as="h2">{getTitle()}</Heading>

      <ResponsiveContainer height={config.height} width="100%">
        <AreaChart data={data} margin={config.margins}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text, fontSize: config.fontSize }}
            tickLine={{ stroke: colors.text }}
            axisLine={{ stroke: colors.text }}
            interval={width < 768 ? "preserveStartEnd" : 0}
            angle={width < 480 ? -45 : 0}
            textAnchor={width < 480 ? "end" : "middle"}
            height={width < 480 ? 60 : 30}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text, fontSize: config.fontSize }}
            tickLine={{ stroke: colors.text }}
            axisLine={{ stroke: colors.text }}
            width={width < 480 ? 50 : 60}
          />
          <CartesianGrid
            strokeDasharray="4"
            opacity={width < 768 ? 0.3 : 0.5}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.text}`,
              borderRadius: "8px",
              fontSize: width < 768 ? "1.2rem" : "1.4rem",
            }}
            labelStyle={{ color: colors.text }}
          />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={config.strokeWidth}
            name="Total sales"
            unit="$"
            fillOpacity={width < 768 ? 0.6 : 0.8}
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={config.strokeWidth}
            name="Extras sales"
            unit="$"
            fillOpacity={width < 768 ? 0.6 : 0.8}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
