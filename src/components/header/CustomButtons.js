import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Button, Badge, Typography } from '@mui/material';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../App';
import Profile from './Profile';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(Box)(({ theme }) => ({
  width: "600px",
  margin: '0 3% 0 30px',
  display: 'flex',
  justifyContent: "space-between",
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const Login = styled(Button)`
  font-size: 20px;
  cursor: pointer;
  background-color: white;
  color: blue;
  text-transform: none;
  height: 25px;
  font-style: italic;
`;

const Seller = styled(Typography)`
  font-size: 20px;
  font-style: italic;
  cursor: pointer;
`;

const Cartbox = styled(Box)`
  display: flex;
`;

export const username = (value) => {
  return value;
}

export default function CustomButtons() {
  const { accounts, setaccounts } = useContext(DataContext);
  const [open, setopen] = useState(false);
  const [over, setover] = useState(true);
  const navigate = useNavigate();

  // Destructure totalquantity only if cart is not needed
  const { totalquantity } = useSelector(state => state.carts);

  // No need to reassign totalquantity; if cart is empty, totalquantity will be 0
  // Just ensure totalquantity is used directly from Redux state

  const handleChange = () => {
    setopen(true);
  }

  const handleOver = () => {
    setover(false);
  }

  const handleClick = () => {
    navigate("/Cartdetails");
  }

  return (
    <>
      <Wrapper>
        {accounts ? (
          <Profile accounts={accounts} setaccounts={setaccounts}></Profile>
        ) : (
          <Login onClick={handleChange} variant='contained'>Login</Login>
        )}
        <Seller>Become A Seller</Seller>
        <Cartbox>
          <Seller onMouseOver={handleOver} onMouseOut={() => setover(true)}>More</Seller>
          {over ? <KeyboardArrowDownIcon style={{ marginTop: "3px" }} /> : <KeyboardArrowUpIcon style={{ marginTop: "3px" }} />}
        </Cartbox>
        <Cartbox>
          <Badge badgeContent={totalquantity} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Seller onClick={handleClick}>cart</Seller>
        </Cartbox>
        <LoginDialog open={open} setopen={setopen} />
      </Wrapper>
    </>
  );
}
