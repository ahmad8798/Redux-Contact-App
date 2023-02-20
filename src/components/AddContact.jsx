import React, { useState } from "react";
import  { Avatar, Button, Grid,Paper, TextField } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import { addContact } from "../features/contacts/contactSlice";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddContact = () => {
    const contacts = useSelector((state)=>state.contacts.value)
    const dispatch = useDispatch()
    const home = useNavigate()
    console.log(contacts)
    const [form,setForm] = useState({name:"",email:"",phoneno:""})
    
    const [formErrors,setFormErrors] = useState({})
    const added = Boolean(form.name)&&Boolean(form.email)&&Boolean(form.phoneno)

    const paperStyling = {
        padding:20,height:'70vh',width:300,margin:"20px auto",borderRadius:"1.2rem"
    }   
    const avatarStyle = {
        backgroundColor:"#B05A7A"
    }

    const buttonStyle ={
        margin:"1.5rem auto",
        borderRadius:'1.5rem'
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        console.log("form values before..",form)
        setForm({...form,[name]:value})
        console.log("form values after",form)
    }
       const validate = (formValues)=>{
        const inputErrors = {}
        if(!formValues.name){
            inputErrors.name = "name is required";
        }
        if(!formValues.email){
            inputErrors.email = "Email is required"
        }
        else if(!formValues.phoneno){
            inputErrors.phoneno = "phone no is required"
        }else if(formValues.phoneno.length<10 && formValues.phoneno.length>10){
               inputErrors.phoneno = "phone no length must be 10"
        }
        return inputErrors
       }

       const handleSubmit = (e)=>{
              e.preventDefault()
            setFormErrors(validate(form))
            const checkEmail = contacts.find((contact)=>
                contact.email===form.email
            )
            const checkPhone = contacts.find((contact)=>
                contact.phoneno===form.phoneno
            )
            if(checkEmail){
                return toast.error("this email is already exists")
            }
            if(checkPhone){
                return toast.error("this number is already exists")
            }
            if(!form.name||!form.email||!form.phoneno){
                return toast.warning('please fill all the fields')
            }
           
            if(form.phoneno.length<10){
               return toast.error("phone No length must be 10")
            }
            if(form.phoneno.length>10){
                return toast.error("phone No length should not exceed 10")
             }

           dispatch(addContact({id:contacts.length,...form}))
            // setForm({...form,name:'',email:'',phoneno:''})
            toast.success("Contact added succesfully !!");
             home('/')
        }
  return (
        <Grid container>
            <Paper elevation={10} style={paperStyling}>
            <form onSubmit={handleSubmit}>
            <Grid align="center">
            <Avatar style={avatarStyle}><PersonIcon/></Avatar>    
            <h1>Add Contact</h1>
            </Grid>
            <TextField name="name" value={form.name} onChange={handleChange} label="Name" variant="standard" placeholder="Enter Name" type={"text"} fullWidth></TextField>
                <p>{formErrors.name}</p>
            <TextField name="email" value={form.email} onChange={handleChange} label="Email" variant="standard" placeholder="Enter Your Email" type={"email"} fullWidth></TextField>
                <p>{formErrors.email}</p>
            <TextField name="phoneno" value={form.phoneno} onChange={handleChange} label="Phone no" variant="standard" placeholder="Enter Your Phone No" type={"number"} fullWidth></TextField>
                <p>{formErrors.phoneno}</p>
                <Button type="submit" style={buttonStyle} variant="contained" fullWidth>Add To Contact</Button>
               
            </form>
            </Paper>
        </Grid>
  );
};

export default AddContact;
