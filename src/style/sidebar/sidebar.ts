'use client';
import styled from 'styled-components';

export const MainSidebarContainer = styled.div`
  width: 13rem;
  height: 100%;
  background-color: #2f5d50;
  display: grid;
  grid-template-rows: 10% 10% 1fr;
`;

export const SidebarItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #005243;
  }
`;
