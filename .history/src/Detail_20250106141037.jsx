import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let a = props.shoes.find((x)=> x.id == id )
  let [alert, setAlert] = useState(true);
  let ]

  useEffect(()=>{
    //여기코드는 컴포넌트 로드& 업데이트 마다 실행됨  
    setTimeout(()=>{ setAlert(false) }, 3000)
  })
  // 리액트에서 UI만들기
  //  1.UI상태를 저장할 state만들기
  //  2.state에 따라서 UI가 어떻게 보일지 설정하기
  return(
    <div className="container">
      {/* 삼항연산자    alert == true ? 보여준다: 안보여준다 */}
      {
        alert == true ? 
        <div className="alert alert-warning">
          3초이내 구입시 할인 
        </div>
        : null
      }
      

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