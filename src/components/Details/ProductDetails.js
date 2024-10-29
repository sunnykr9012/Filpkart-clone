import { Box, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';
import styled from '@emotion/styled';

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`
const Image=styled('img')(({theme})=>({
  width:"390px",
  [theme.breakpoints.down('sm')]:{
    width:"330px"
  }
  }))
const SmallText = styled(Box)`
    width:100;
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }`
const ProductDetails = ({users}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
    <Typography style={{fontWeight:400}}>{users.title}</Typography>
    <Typography style={{marginTop:5,color:"#878787",fontSize:14}}>8 Ratings & 1 Reviews
    <span><img src={fassured} alt="assured" style={{width: 77, marginLeft: 20}} /></span>
    </Typography>
    <Typography>
    <span style={{ fontSize: 28 }}>₹{users.newPrice}</span>&nbsp;&nbsp;&nbsp; 
    <span style={{ color: '#878787' }}><strike>₹{users.prevPrice}</strike></span>&nbsp;&nbsp;&nbsp;
    <span style={{ color: '#388E3C' }}>{users.discount} off</span>
    </Typography>
    <Typography>Available offers</Typography>
    <SmallText style={{backgroundColor:"white"}}>
    <Typography><StyledBadge/> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
    <Typography><StyledBadge/> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
    <Typography><StyledBadge/> Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
    <Typography><StyledBadge/> Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
    </SmallText>
    <Table style={{backgroundColor:"white"}} >
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <Image src={adURL} alt="flipkart"></Image>
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{users.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
    </>
  )
}
export default ProductDetails;
