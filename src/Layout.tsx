import React from 'react';
import styled from 'styled-components';

import Root from './Root';
import Header from './components/Header';
import { whiteColor, containerGreyColor } from './constants';

const Container = styled.div`
  height: inherit;
  padding-top: 3rem;
  font-family: 'Bitter', serif;
  background: ${containerGreyColor};
  @media screen and (min-width: 600px) {
    padding-top: 4rem;
  }
`;

const ContentContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1.25rem;
  margin: 0 auto;
  background: ${whiteColor};
  @media screen and (min-width: 1378px) {
    max-width: 1200px;
  }
`;

const Layout = () => (
  <Container>
    <Header />
    <ContentContainer>
      <Root />
    </ContentContainer>
  </Container>
);

export default Layout;