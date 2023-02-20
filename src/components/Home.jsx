import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../features/contacts/contactSlice'
import UserCard from './UserCard'
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Home = () => {
    const anchorStyle = {
        textDecoration:"none"
        
    }
const contacts = useSelector((state)=>state.contacts.value)
const dispatch = useDispatch()
  return (
    <>
       <Grid container justifyContent="center" spacing={3}>
        <Grid item align="center" lg={8} md={8} sm={11} xs={11}>
            <Link style={anchorStyle}  to="/add"><Button variant="outlined" endIcon={<AddCircleIcon/>} color="secondary">Add Contact</Button></Link>
        </Grid>
          {contacts.map(contact=>{

            return( 
            <Grid key={contact.id} item lg={8} md={8} sm={11} xs={11}>
            <Paper sx={{borderRadius:"1rem"}} elevation={8}>
            <UserCard deleteEvent={()=>dispatch(deleteContact({id:contact.id}))} cardNo={contact.id+1} cardId={contact.id} name={contact.name} email={contact.email} phoneno={contact.phoneno}/>
            </Paper>
            </Grid>
           
            )
          })}
       </Grid>
    </>
  )
}

export default Home
