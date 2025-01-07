import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let a = props.shoes.find((x)=> x.id == id )

  useEffect(()=>{
    //여기코드는 컴포넌트 로드& 업데이트 마다 실행됨  
    
  })
  
  console.log('안녕')

  let [count, setCount] = useState(0);
  

  return(
    <div className="container">
      <button onClick={()=>{setCount(count + 1)}}>버튼</button>
      <div className="alert alert-warning">
        3초이내 구입시 할인 
      </div>

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
    </div>
  )
}

export default Detail;