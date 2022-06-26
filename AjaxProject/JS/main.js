
var options = `<option>95</option>
<option>100</option>
<option>105</option>`
var options_pants = `<option>80</option>
<option>82</option>
<option>84</option>`
$('#option1').on('change', function(){
    if ($('#option1').val() == "셔츠"){
        $("#option2").html("");
        $("#option2").append(options);
    }else{
        $("#option2").html("");
        $("#option2").append(options_pants);
    }
})
function 목표량계산기(arr, value){
    let sum = 0;
    for(let i=0; i < 5; i++){
        sum +=arr[i];
    }
    console.log(sum);
}
