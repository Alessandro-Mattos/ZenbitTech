import {configureStore} from "@reduxjs/toolkit";
import contactFormSlice from "./contactFormSlice";

const store = configureStore({
    reducer: {
        contactForm: contactFormSlice
    }
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType < typeof store.getState >;

export default store;
