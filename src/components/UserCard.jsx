import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../features/contacts/contactSlice';
const UserCard = (props) => {
    const dispatch = useDispatch()
    
    const achorTagStyle = {
        textDecoration:"none"
    }
    const {name,cardNo,cardId,email,phoneno,editEvent,deleteEvent} = props
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              contact {cardNo}
            </Typography>
            <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
              <strong>Name: </strong>{name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
            <strong>Email: </strong>{email}
            </Typography>
            <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
            <strong>Phone: </strong>{phoneno}
            </Typography>
           
          </CardContent>
          <CardActions>
           <Link style={achorTagStyle} to={`/edit/${cardId}`}><Button sx={{mx:1}} onClick={editEvent} startIcon={<EditIcon/>} variant='contained' size="small">Edit</Button></Link>
            <Button onClick={deleteEvent} startIcon={<DeleteIcon/>} variant='contained' color='error' size="small">Delete</Button>
          </CardActions>
        </React.Fragment>
      );
  return (
    <>
    <Box sx={{ minWidth: 275 }}>
    <Card  variant="outlined">{card}</Card>
  </Box>
    </>
  )
}

export default UserCard
