import styled from 'styled-components/native';
import colors from '../util/colors';
import constants from '../util/constants';

export const BalancePillsUI = styled.View`
  border-radius:50px;
  width:200px;
  height:40px;
  background-color:#8854d0;
  border-color:#fff;
  border-width:2px;
  align-items:center;
  justify-content:center;
`

export const BalancePillsTitleUI = styled.Text`
  font-size: ${constants.Sizes.Normal}px;
  color: ${colors.WHITE};
`