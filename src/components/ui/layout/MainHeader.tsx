import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderItemIcon, HeaderItemTitle, MainHeaderContainer } from '@/style/header/mainHeader';

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <HeaderItemIcon>
        <MenuIcon style={{width: '3rem', height: '3rem'}} />
      </HeaderItemIcon>
      <HeaderItemTitle>
      NextJS TODOリスト
      </HeaderItemTitle>
    </MainHeaderContainer>
  );
};

export default MainHeader;
