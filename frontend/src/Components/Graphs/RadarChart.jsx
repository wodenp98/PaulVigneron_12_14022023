import React from "react";
import styled from "styled-components";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const GraphContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  width: 30%;
  font-size: 10px;
  @media screen and (max-width: 1220px) {
    font-size: 8px;
  }
`;

const RadarChartGraphs = ({ performance }) => {
  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="70%" data={performance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tickSize={7}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default RadarChartGraphs;
