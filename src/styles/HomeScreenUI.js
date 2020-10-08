import styled from "styled-components/native";
import colors from "../util/colors";
import constants from "../util/constants";

export const ListArrearage = styled.FlatList.attrs({
  contentContainerStyle: {
    marginTop: 25,
    paddingBottom: 115,
  },
})`
  padding: 0px 15px;
`;

export const DebtItem = styled.View`
  width: ${constants.ScreenX - 30}px;
  background-color: ${colors.PRIMARY};
  padding: 15px 15px;
  margin: 5px 0px;
`;

export const DebtContainer = styled.View`
  margin: 3.5px 0;
`;

export const DebtHeader = styled(DebtContainer)`
  justify-content: space-between;
  flex-direction: row;
`;
export const DebtTitle = styled.Text`
  font-size: ${constants.Sizes.Subtitle}px;
  color: ${colors.WHITE};
  max-width: 55%;
  flex: 1;
`;

export const DebtValue = styled.Text`
  font-size: ${constants.Sizes.Medium}px;
  color: ${colors.WHITE};
  max-width: 120px;
`;

export const DebtFooter = styled(DebtContainer)`
  justify-content: space-between;
  flex-direction: row;
`;

export const DebtFooterInstallment = styled.Text`
  font-size: ${constants.Sizes.Small}px;
  color: ${colors.WHITE};
`;

export const DebtFooterValue = styled(DebtFooterInstallment)``;
