import React from 'react';
import { HeaderUI, HeaderTitleUI, HeaderContainerUI, HeaderContainerAvatarUI, HeaderAvatarUI, UserInfoContainerUI, UserInfoNameUI, HeaderBalancePillsContainerUI } from '../styles/HeaderUI';
import BalancePills from './BalancePills';
export default function Header(){
  return (
    <HeaderUI>
      <HeaderContainerUI>
        <HeaderTitleUI>
          Já Paguei
        </HeaderTitleUI>
      </HeaderContainerUI>
      <HeaderContainerAvatarUI>
        <HeaderAvatarUI source={require('../assets/avatar.jpg')}/>
      </HeaderContainerAvatarUI>
      <UserInfoContainerUI>
        <UserInfoNameUI>
          Aylon Muramatsu
        </UserInfoNameUI>
      </UserInfoContainerUI>
      <HeaderBalancePillsContainerUI>
        <BalancePills/>
      </HeaderBalancePillsContainerUI>
    </HeaderUI>
  )
}