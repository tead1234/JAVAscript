var xhr = new XMLHttpRequest();
var url = 'http://api.data.go.kr/openapi/tn_pubr_public_traffic_light_api'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'hFv6v8mxbGG4c5TIwfG%2FwYNVgHDJz61zqizx9iuW2VJeqBQqHbg28JUK%2BXMpb69vPpU6X%2BxIrbQMPk7eGUqp8w%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('0'); /**/
queryParams += '&' + encodeURIComponent('signguNm') + '=' + encodeURIComponent('서울시'); /**/
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.UNSENT) {
        console.log('unsent');
      }
      if (xhr.readyState === xhr.OPENED) {
        console.log('opened');
      }
      if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        console.log('headers received');
      }
      if (xhr.readyState === xhr.LOADING) {
        console.log('loading');
      }
    if (this.readyState == 4) {
        console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+this.responseText);
    }
};

xhr.send('');