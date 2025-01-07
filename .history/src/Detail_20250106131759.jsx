import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let a = props.shoes.find((x)=> x.id == id )

  useEffect(()=>{
    console.log('안녕')
  })

  let [count, setCount] = useState();

  return(
    <div className="container">
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