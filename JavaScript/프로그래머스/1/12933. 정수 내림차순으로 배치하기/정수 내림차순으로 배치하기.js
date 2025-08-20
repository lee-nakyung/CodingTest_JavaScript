// 숫자를 문자열로 -> 그리고 배열로 -> sort 한다음에 다시 문자열로 그리고 다시 숫자로

function solution(n) {
    var answer = 0;
    
    return parseInt(n.toString().split("").sort((a,b)=>b-a).join(""))
}