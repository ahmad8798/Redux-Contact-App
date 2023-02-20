import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../features/contacts/contactSlice";
export const store =  configureStore({
    reducer:{
        contacts:contactSlice
    }
})