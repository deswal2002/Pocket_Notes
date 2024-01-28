import { createSlice } from '@reduxjs/toolkit'

export const FileSlice = createSlice({
  name: 'File_save',
  initialState:{filename:"",colour:""},
  reducers: {
    update: (state) => {
      const file_you_choice=JSON.parse(localStorage.getItem("your_choice"))|| []
      state.filename=file_you_choice[0]
      state.colour=file_you_choice[1]
      console.log(state.filename)
    },
    close_updates:(state)=>{
      state.filename=""
      state.colour=""
    }
    
    
    
  },
})
export const { update,close_updates } = FileSlice.actions

export default FileSlice.reducer