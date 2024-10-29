import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';
import { Box, Button, Divider,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addEllipsis } from '../utils/util';


const Bar=styled(Box)`
display:flex;
margin-top:10px;
`
const Div=styled(Box)(({theme})=>({
  width:"85%",
  backgroundColor:"white",
  [theme.breakpoints.down("md")]:{
    width:"100%"
  }
}))

const Deal=styled(Box)`
padding:10px 20px;
display:flex;
justify-content:space-between;
`
const Imgbox=styled(Box)`
padding:25px 15px;
text-align:center;
`

const Prodimg=styled("img")(
  {
    width:"100%",
    height:150
  }
)
const Heading=styled(Typography)`
text-align:left;
font-size:20px;
`

const Side = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width:"15%",
    objectFit:"cover"
  },
  [theme.breakpoints.down('md')]: {
    display:"none",
  },
}));






const Products=({product,category,title})=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      };
  return (
    <>
    <Bar>
    <Div>
    <Deal>
    <Heading style={{fontWeight:600}}>{title}</Heading>
    <Link to={`/${category}`}><Button variant='contained'>View all</Button></Link>
    </Deal>
    <Divider/>
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}  swipeable={false} draggable={false}>
    {
      product.map((data,index)=>{
      return (
      <Link to={`${data.category}/details/${data.id}`} style={{textDecoration:"none", color:"black"}} key={index}>
      <Imgbox >
      <Prodimg src={data.img} alt={index} style={{objectFit:"contain"}}></Prodimg>
      <Typography style={{fontWeight:600}}>{addEllipsis(data.title)}</Typography>
      <Typography style={{color:"green"}}>{data.discount}</Typography>
      <Typography>{data.tagline}</Typography>
      </Imgbox>
      </Link>
      )})
    }
    </Carousel>
    </Div>
    <Side >
    <img src='https://rukminim1.flixcart.com/fk-p-flap/530/810/image/428e75500dbf89d1.jpeg?q=20' alt="advertise" style={{width:"100%",height:"100%"}}></img>
    </Side>
    </Bar>
    </>
  )
}

export default Products