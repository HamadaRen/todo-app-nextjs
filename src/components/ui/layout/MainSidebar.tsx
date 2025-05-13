import { MainSidebarContainer, SidebarItem } from '@/style/sidebar/sidebar';
import React from 'react';

const MainSidebar = () => {
  return (
    <MainSidebarContainer>
      <SidebarItem>Todoリスト</SidebarItem>
      <SidebarItem>完了済みリスト</SidebarItem>
    </MainSidebarContainer>
  );
};

export default MainSidebar;
