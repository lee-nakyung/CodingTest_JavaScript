// 문자열이니까 배열로 반환을 해야합니다. split 메소드

function solution(s) {
    var answer = s.split(" ");
    return Math.min(...answer)+" "+Math.max(...answer);
}