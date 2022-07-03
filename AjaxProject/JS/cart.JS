const products = [
    {
        id:0,
        price:80000,
        title:"사랑받는 남자 리트리버"
    },
    {
        id:1,
        price:44000,
        title:"사랑받는 여자 리트리버"
    },
    {
        id:2,
        price:70000,
        title:"사랑받는 리트리버"
    }
]
/// 카드 구현 완료
for(let i=0; i< products.length; i++){
    let templete = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
  </div>`
    $('.row').append(templete);
};
// 정렬 버튼 구현
$('#lowPriceSort').click(function(){
    products.sort(function(a,b){
        return a.price - b.price;
    })
    for(let i=0; i< products.length; i++){
    let templete = `<div class="card" style="width: 18rem;">
<img src="img/retriver.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${products[i].title}</h5>
  <p class="card-text">${products[i].price}</p>
  <a href="#" class="btn btn-primary">주문하기</a>
</div>
</div>`
$('.card_nav').append(templete);
};
}
)
$('#send_server').click(()=>{
    $.get("https://cors-anywhere.herokuapp.com/https://www.tournmaster.com/seantour_map/travel/beachinfo.do").done(function(e){
        var a = JSON.stringify(e);
        console.log(a)
    }).fail(function(){
        console.log("실패");
    })
});
