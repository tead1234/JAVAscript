let arr = [
    [10,11,12],
    [20,21,22],
    [30,31,32]
]
let input = [
    4,100, 500,247
]
let input_date=[
    "2021-01-27",
    "2021-02-27",
    "2021-03-14"
]


let star2 = function star(num) {
    let answer = ''
    for(let i = 0; i < num; i ++){
        answer += '*'
    }
    return answer
}

let between = (a,b)=> {
    var answer = []
    if ( a > b){
        [a,b] = [b,a]
    }
    console.log(a,b);
    for(let i = a+1; i < b; i ++){
        answer.push(i)
    }
    return answer
}

const find_moon_year = (year) => {
        if(year % 400 == 0){
            return true;
        }else if(year % 4 == 0 && year % 100 != 0 ){
            return true;
        }
        return false
}
const find_date = (date)=>{
    let day = new Date(date);
    const weekday = ['일','월','화','수','목','금','토'];
    return weekday[day.getDay()]
}

for(let i =0; i < input_date.length; i ++){
    console.log(`#${i+1} ` + find_date(input_date[i]));
}
