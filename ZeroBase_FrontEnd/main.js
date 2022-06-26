let arr = [
    [10,11,12],
    [20,21,22],
    [30,31,32]
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

console.log(between(15,10))