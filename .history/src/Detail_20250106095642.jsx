import { useParams } from "react-router-dom";

function Detail(props){

   useParams();

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes1.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[현재url에 입력한 숫자].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;