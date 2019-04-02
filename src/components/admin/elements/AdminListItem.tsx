import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import UpdateItemButton from '../../buttons/UpdateItemButton';
import { mainColor, greyColor } from '../../../constants';

interface Props {
  item: any;
  handleSnackbar: (message: string, status: string) => void;
  handleRemove: (id: number) => void;
}

const StyledItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const ItemsContainer = styled.div`
  flex: 1;
`;

const ItemColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.2rem;
  padding-top: 0.5rem;

  & .input-focused {
    color: ${mainColor} !important;
  }

  & .input-underline::after {
    border-bottom-color: ${mainColor};
  }

  & strong {
    width: 100%;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
  & span {
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
`;

const AdminListItem = ({ item, handleSnackbar, handleRemove }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [itemValues, setItemValues] = useState(item);
  const [inputValues, setInputValues] = useState(item);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  const renderProperties = (item: any) => {
    const keys = Object.keys(item);
    return keys.map(
      (key: string, index: number) =>
        key !== 'id' && (
          <ItemColumn key={index.toString()}>
            {editMode ? (
              <TextField
                label={key}
                name={key}
                value={inputValues[key]}
                onChange={handleChange}
                margin="none"
                InputLabelProps={{
                  classes: {
                    focused: 'input-focused'
                  }
                }}
                InputProps={{
                  classes: {
                    underline: 'input-underline'
                  }
                }}
              />
            ) : (
              <Fragment>
                <strong>{key}</strong>
                <span>{itemValues[key]}</span>
              </Fragment>
            )}
          </ItemColumn>
        )
    );
  };

  const editItem = () => {
    setEditMode(true);
  };

  const cancelEdit = () => {
    setInputValues(itemValues);
    setEditMode(false);
  };

  const saveItem = async () => {
    // Move logic to parent component
    const result = await item.update(inputValues);
    if (result.error) {
      handleSnackbar(result.message, 'error');
    } else {
      setItemValues(result);
      setEditMode(false);
      handleSnackbar('Succesfully updated', 'success');
    }
  };

  const removeItem = () => handleRemove(item.id);

  return (
    <StyledItem>
      <ItemsContainer>{renderProperties(item)}</ItemsContainer>
      <ButtonsContainer>
        {editMode ? (
          <Fragment>
            <UpdateItemButton handleClick={saveItem} type="save" />
            <UpdateItemButton handleClick={cancelEdit} type="cancel" />
          </Fragment>
        ) : (
          <Fragment>
            <UpdateItemButton handleClick={editItem} type="edit" />
            <UpdateItemButton handleClick={removeItem} type="remove" />
          </Fragment>
        )}
      </ButtonsContainer>
    </StyledItem>
  );
};

export default AdminListItem;
