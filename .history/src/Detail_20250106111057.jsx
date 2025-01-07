import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  console.log(props.shoes)
  let a = props.shoes.find((element)=> element.id)
  console.log(a)

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes'+ (parseInt(a.id)+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{a.title}</h4>
          <p>{a.content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;