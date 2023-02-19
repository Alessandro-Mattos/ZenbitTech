import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFormData {
    name: string;
    email: string;
    message: string;
  }


  const initialState: IFormData = {
    name: "",
    email: "",
    message: "",
  };

  const contactFormSlice = createSlice({
    name: "contactForm",
    initialState,
    reducers: {
      updateName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
      },
      updateEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      updateMessage: (state, action: PayloadAction<string>) => {
        state.message = action.payload;
      },
      resetForm: () => initialState,
    },
  });

  export const { updateName, updateEmail, updateMessage, resetForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
