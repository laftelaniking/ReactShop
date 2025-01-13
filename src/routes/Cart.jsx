import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addCount, changeName, addAge } from '../store';

function Cart(){
  let state = useSelector((state)=> state )   //store에 있던 모든 state를 사용가능
  let dispatch = useDispatch()
  console.log(state)

  return(
    <>
      {state.user.name} {state.user.age}의 장바구니
      <button onClick={()=>{dispatch(addAge(1))}}>버튼</button>
      <Table>
        <thead>
          <tr> 
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.shoes.map((a, i)=>
              <tr key={i}>
                <td>{state.shoes[i].id}</td>
                <td>{state.shoes[i].name}</td>
                <td>{state.shoes[i].count}</td>
                <td><button onClick={()=>{
                  dispatch(addCount(state.shoes[i].id))
                  // console.log(addCount(i))
                }}>+</button></td>
              </tr>
            )
          }
          
        </tbody>
      </Table>
    </>
  )
}


export default Cart;