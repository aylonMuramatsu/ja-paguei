import styled from "styled-components/native";
import colors from "../util/colors";
import constants from "../util/constants";

export const HeaderUI = styled.View`
  padding: 25px 0px;
  background-color: ${colors.PRIMARY};
  height: ${constants.ScreenY / 2.9}px;
`;

export const HeaderTitleUI = styled.Text`
  color: ${colors.WHITE};
  font-size: ${constants.Sizes.Title}px;
  text-align: center;
  padding-left: 15px;
  margin: 0;
  text-transform: uppercase;
`;

export const HeaderContainerUI = styled.View`
  padding-top: 10px;
  flex-direction: row;
`;
export const HeaderContainerAvatarUI = styled.View`
  flex-direction: column;
  align-items: center;
  height: ${constants.Avatar.Normal}px;
`;
export const HeaderAvatarUI = styled.Image`
  max-height: ${constants.Avatar.Normal}px;
  max-width: ${constants.Avatar.Normal}px;
  border-radius: ${constants.Avatar.Normal}px;
  border-width: 3px;
  border-color: ${colors.WHITE};
`;

export const UserInfoContainerUI = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
`;

export const UserInfoNameUI = styled.Text`
  font-size: ${constants.Sizes.Normal}px;
  color: ${colors.WHITE};
  text-align: center;
`;

export const HeaderBalancePillsContainerUI = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;
