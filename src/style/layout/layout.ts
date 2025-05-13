'use client';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 10% 1fr;
`;

export const MainBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
`;

export const MainTodoPageContainer = styled.div`
  height: 100%;
  width: calc(100% - 13rem);
  background-color: #d6e9ca;
  display: flex;
`;
