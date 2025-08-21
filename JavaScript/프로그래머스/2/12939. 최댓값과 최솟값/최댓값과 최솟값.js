// 문자열이니까 배열로 반환을 해야합니다. split 메소드 사용

function solution(s) {
    var answer = s.split(" "); // ["1","2","3","4"]
    return Math.min(...answer)+" "+Math.max(...answer);
}