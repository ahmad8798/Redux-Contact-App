import { createSlice } from "@reduxjs/toolkit";
import { contactsData } from "./contactsData";
const contactSlice = createSlice({
    name:"contacts",
    initialState:{value:contactsData},
    reducers:{
        addContact:(state,action)=>{
            state.value.push(action.payload)
        },deleteContact:(state,action)=>{
            state.value = state.value.filter((contact)=>contact.id!==action.payload.id)
        },editContact:(state,action)=>{
            state.value.map((contact)=>{
                if(contact.id===action.payload.id){
                    contact.name = action.payload.name
                    contact.email = action.payload.email
                    contact.phoneno = action.payload.phoneno
                }
            })
        }
    }
})

export default contactSlice.reducer
export const {addContact,deleteContact,editContact} = contactSlice.actions