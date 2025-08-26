// 숫자를 뒤집으려면 문자열로 바꾼 뒤에, reverse를 해야함
//3진법으로 바꾸고, reverse하고, 10진법
// n진법으로 바꿀때에는 toString()
// 10진법으로 바꿀 때에는 이전 진법을 표기한다 parseInt(number,3);
function solution(n) {
    var answer = 0;
    
    answer = parseInt(n.toString(3).split("").reverse().join(""),3);
    
    return answer;
}