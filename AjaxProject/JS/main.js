
const options = [90,95,100,105];
var size_pants = [80,82,84,86,88];
//array foreach array[i] 이게 아니라 array.foreach(fun(i){}); 콜백 반복문으로 바꿈
// arrow를 쓰면 this값이 달라짐 ex function으로 함수속에서 쓰면 this가 재정의 arrow는 재정의 x
$('#option1').on('change', function(){
    if ($('#option1').val() == "셔츠"){
        $("#option2").html("");
        options.forEach(function(e){
            let shirt_option = `<option>${e}</option>`
            $("#option2").append(shirt_option);
        })
    }
    else if($('#option1').val() == "바지"){
        $("#option2").html("");
        size_pants.forEach(function(a){
            var options_pants = `<option>${a}</option>`
            $("#option2").append(options_pants);
        });
            
}
})
