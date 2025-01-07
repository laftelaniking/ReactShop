import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let a = props.shoes.find((x)=> x.id == id )
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  

  useEffect(()=>{
    //그 다음에 실행됨
    setTimeout(()=>{ setAlert(false) }, 2000)
    return ()=>{
      //여기있는게 먼저 실행됨
      //타이머 제거, 서버연결 ajax 중지
      clearTimeout(a)
    }
  }, [count])  //mount

  return(
    <div className="container">
      <button onClick={()=>{ setCount(count+1) }} >버튼</button>
      {count}
      {/* 삼항연산자    alert == true ? 보여준다: 안보여준다 */}
      {/* {
        alert == true ? 
        <div className="alert alert-warning">
          3초이내 구입시 할인 
        </div>
        : null
      } */}
      

      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes'+ (parseInt(id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      
      {/* UI 만드는법 */}
        1. html css로 디자인
        2. UI의 현재상태를 저장할 state 만들기
        3. 

    </div>
  )
}



export default Detail;