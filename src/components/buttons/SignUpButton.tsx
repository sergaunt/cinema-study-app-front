import * as React from 'react';
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import styled from 'styled-components';

interface Props {
  text: string;
  handleClick: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Container = styled.div<any>``;

const StyledButton = styled(Button)<any>`
  && {
  }
`;

const StyledText = styled.span<any>`
  && {
    margin-left: 5px;
    @media screen and (max-width: 470px) {
      display: none;
    }
  }
`;

const SignUpButton = ({ text, handleClick }: Props) => {
  return (
    <Container>
      <StyledButton variant="contained" color="primary" onClick={handleClick}>
        <VpnKeyIcon />
        <StyledText>{text}</StyledText>
      </StyledButton>
    </Container>
  );
};

export default SignUpButton;
