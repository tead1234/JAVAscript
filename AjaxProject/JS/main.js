

$.getJSON({
    type: "GET",
    url: "https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start=127.1058342,37.359708&goal=129.075986,35.179470&option=trafast"
	,
    Headers: {"X-NCP-APIGW-API-KEY-ID": "n7gct2pkrc"} ,
    Headers: {"X-NCP-APIGW-API-KEY": "CtR3a3U3TWNORK4VQmKipTQM20SbAHKXd9hW88CS"},
    dataType: "json",
    data: JSON.stringify(requestData),
    success: function(resultData) {
        console.log("성공")
    },
    error: function(jqXHR, textStatus, errorThrown) {
        // 에러 로그는 아래처럼 확인해볼 수 있다. 
        alert("업로드 에러\ncode : " + jqXHR.status + "\nerror message : " + jqXHR.responseText);
    }
});