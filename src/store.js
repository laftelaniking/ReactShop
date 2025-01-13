import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({ //slice는 state와 비슷하다고 보면됨
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    addAge(state, action){
      state.age += action.payload      
    }
  }
})

let shoes = createSlice({  //state랑 비슷함   let [스테이트] = useState()
  name : 'shoes',  // slice를 식별하는 역할을 함
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name  : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){   //action은 dispatch로 보낸 값을 저장한다. type과 payload(택배임)
      let id = action.payload
      let shoes = state.find((x)=> x.id == id )
      shoes.count = shoes.count + 1
      console.log(shoes.count)
    },
    addProduct(state, action){
      //장바구니에 없다면 state에 추가
      let id = action.payload.id
      if(!state.find((x)=> x.id == id)){    //state에 상품이 없으면 !false니까 true가 됨
        state.push({id : action.payload.id, name : action.payload.title, count : 1})
      } else{
        state.find((x)=> x.id == id).count += 1  //상품이 이미 있으면 +1
      }
      
    }
  }
})


export let { changeName, addAge } = user.actions 
export let { addCount, addProduct } = shoes.actions    //destructuring 문법이다. 


export default configureStore({
  reducer : {
    user : user.reducer,
    shoes : shoes.reducer
   }
})








