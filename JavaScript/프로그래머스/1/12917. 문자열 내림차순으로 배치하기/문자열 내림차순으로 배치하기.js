// 문자열을 내림차순으로 배치하기.
// 그러면 일단 문자열을 배열로 바꿔야한다.
// s.split(" ")


function solution(s) {
    var answer = '';
    answer = s.split("").sort().reverse().join("");
    return answer;
}