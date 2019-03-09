import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Root from './Root';
import Header from './components/Header';
import OrderConfirmationModal from './components/seats/OrderConfirmationModal';
import PopUpSnackbar from './components/PopUpSnackbar';
import { whiteColor, containerGreyColor } from './constants';

const Container = styled.div`
  position: relative;
  height: inherit;
  font-family: 'Bitter', serif;
  background: ${containerGreyColor};
`;

const ContentContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1.25rem;
  margin: 0 auto;
  margin-top: 3rem;
  background: ${whiteColor};
  @media screen and (min-width: 600px) {
    padding-top: 3rem;
  }
  @media screen and (min-width: 1378px) {
    max-width: 1200px;
  }
`;

const Layout = ({ orderModalDisplayed }: any) => {
  const [isSnackbarOpen, setSnackbarState] = useState(false);
  const [snackbarVariant, setSnackbarVariant] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('Default message');

  const handleSnackbar = (text: string, variant: string) => {};
  return (
    <Container>
      {orderModalDisplayed && (
        <OrderConfirmationModal handleSnackbar={handleSnackbar} />
      )}
      <Header />
      <ContentContainer>
        <Root />
      </ContentContainer>
      <PopUpSnackbar
        isOpen={isSnackbarOpen}
        variant={snackbarVariant}
        message={snackbarMessage}
      />
    </Container>
  );
};

const mapStateToProps = ({ modals }: any) => ({
  orderModalDisplayed: modals.orderModalDisplayed
});

const connectedLayout: any = connect(mapStateToProps)(Layout);

export default withRouter(connectedLayout);
