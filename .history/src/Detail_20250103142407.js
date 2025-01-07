function Detail(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={ import.meta.env.BASE_URL + 'shoes1.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail