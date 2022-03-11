
var options = `<option>95</option>
<option>100</option>
<option>105</option>`
var size_pants = [80,82,84,86,88];
//array foreach array[i] 이게 아니라 array.foreach(fun(i){}); 콜백 반복문으로 바꿈
$('#option1').on('change', function(){
    if ($('#option1').val() == "셔츠"){
        $("#option2").html("");
        $("#option2").append(options);
    }else if($('#option1').val() == "바지"){
        $("#option2").html("");
        size_pants.forEach(function(i){
            var options_pants = `<option>${i}</option>`
            $("#option2").append(options_pants);
        })
            
}
})