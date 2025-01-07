import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState()
// let [state이름] = useState(state값);

// let user = createSlice({
//   name : 'state이름',
//   initialState : 'state값'
// })

let user = createSlice({
  name : 'user',
  initialState : 'lee'
})

let shoes = createSlice({
  name : 'shoes',
  initialState : 'lee'
})



export default configureStore({
  reducer : {
    user : user.reducer
   }
})








