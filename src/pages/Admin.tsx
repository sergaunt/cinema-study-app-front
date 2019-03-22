import React, { useState } from 'react';
import styled from 'styled-components';

import NavPanel from '../components/admin/NavPanel';
import AddCinemaForm from '../components/admin/AddCinemaForm';
import AddHallForm from '../components/admin/AddHallForm';
import AddMovieForm from '../components/admin/AddMovieForm';
import AddServicesForm from '../components/admin/AddServicesForm';
import CreateSessionForm from '../components/admin/CreateSessionForm';
import { SnackbarContext } from '../Layout';
import { TabType } from '../enums';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState(TabType.cinema);

  const getSelectedForm = (handleSnackbar: any) => {
    switch (selectedTab) {
      case TabType.cinema:
        return <AddCinemaForm handleSnackbar={handleSnackbar} />;
      case TabType.hall:
        return <AddHallForm handleSnackbar={handleSnackbar} />;
      case TabType.movie:
        return <AddMovieForm handleSnackbar={handleSnackbar} />;
      case TabType.services:
        return <AddServicesForm handleSnackbar={handleSnackbar} />;
      case TabType.session:
        return <CreateSessionForm handleSnackbar={handleSnackbar} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <NavPanel
        selectedTab={selectedTab}
        handleChange={(
          event: React.FormEvent<HTMLInputElement>,
          value: TabType
        ) => setSelectedTab(value)}
      />
      <SnackbarContext.Consumer>
        {({ handleSnackbar }: any) => getSelectedForm(handleSnackbar)}
      </SnackbarContext.Consumer>
    </Container>
  );
};

export default Admin;
