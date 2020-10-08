import styled from "styled-components/native";
import colors from "../util/colors";

export const ProgressPillsContainerUI = styled.View`
  width: 100%;
  height: ${({ height = 15 }) => `${height}px`};
  background-color: ${colors.GREY};
  border-width: 2px;
  border-color: ${colors.WHITE};
  border-radius: 50px;
  overflow: hidden;
`;

export const ProgressPillsUI = styled.View`
  background-color: ${({ completedColor = colors.GREEN, value }) =>
    completedColor && value === 100 ? completedColor : colors.PRIMARY};
  width: ${({ value }) => value}%;
  flex: 1;
`;
