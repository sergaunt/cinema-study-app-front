import React from 'react';
import styled from 'styled-components';

import DefaultButton from './../components/buttons/DefaultButton';
import { greyColor, whiteColor, containerGreyColor } from './../constants';

const Container = styled.div`
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 1px ${greyColor};
  background: ${containerGreyColor};
  overflow: hidden;
`;

const TableRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  border-bottom: 1px solid ${greyColor};

  &:first-child {
    background: ${whiteColor};
    border-bottom: none;
    box-shadow: 0px -15px 16px 12px rgba(0, 0, 0, 0.75);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 0.5rem 0.2rem;
  font-size: 14px;
  text-align: center;

  &&:not(:last-child) {
    border-right: 1px solid ${greyColor};
  }
`;

const CellLine = styled.span`
  width: 100%;
`;

const WideCell = styled(TableCell)`
  grid-column: 1 / 5;
`;

const SessionsTable = ({ sessions }: any) => {
  const getRows = () => {
    if (sessions.length === 0) {
      return (
        <TableRow>
          <WideCell>No sessions found</WideCell>
        </TableRow>
      );
    }
    return sessions.map((session: any) => (
      <TableRow key={session.id.toString()}>
        <TableCell>
          <span>{session.city}</span>
        </TableCell>
        <TableCell>
          <span>{session.cinema}</span>
        </TableCell>
        <TableCell>
          <CellLine>{session.date}</CellLine>
          <CellLine>{session.time}</CellLine>
        </TableCell>
        <TableCell>
          <DefaultButton
            text="Buy Ticket"
            to={`/sessions/${session.id.toString()}`}
            color={whiteColor}
          />
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Container>
      <TableRow>
        <TableCell>City</TableCell>
        <TableCell>Cinema</TableCell>
        <TableCell>Date and time</TableCell>
        <TableCell />
      </TableRow>
      {getRows()}
    </Container>
  );
};

export default SessionsTable;