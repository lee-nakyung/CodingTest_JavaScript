// N진법 구하는 법 => n.toString(3);
// 

function solution(n) {
    var answer = 0;
    answer = n.toString(3).split("").reverse().join("").toString(10);
    return parseInt(answer,3);
}