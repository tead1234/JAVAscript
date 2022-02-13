// 버튼을 누르면 클래스에 show와 active를 붙여야한다.
var numItems = $('.tab-button').length
// 귀찮으니깐 위에거 반복문으로 변경 ㄱ
// // 왜 let변수를 반복문에서써야하는가 
// var i = 0 이라고 정의하시면 변수의 범위가 for 반복문 이상으로 넓어져서 그렇습니다. 

// let i = 0 이라고 정의하시면 i라는 변수는 반복문 내에서 다른 코드가 참조할 수 있는 '범위' 를 갖기 때문에 

// 이벤트리스너 내에서 i를 찾을 때 각각 0,1,2의 값을 참조할 수 있습니다. 

// 예전에 var 이라는 변수밖에 없었을 땐 중요하게 다뤘었는데 

// 요즘은 let이라는 변수를 쓰기만 하면 버그가 전혀 없으니 깊게 이해안하셔도 상관없습니다.  
for(let i=0; i < numItems; i ++){
    $('.tab-button').eq(i).click(function(){
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('active');
        $('.tab-content').eq(i).addClass('show');
});
}