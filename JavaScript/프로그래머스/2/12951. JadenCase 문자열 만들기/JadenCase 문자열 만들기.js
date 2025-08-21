// 모든 단어의 첫 문자는 대문자 => 즉 앞이 공백이면 그 다음꺼 대문자
// 그 외는 소문자
// 첫문자가 알파벳. 
function solution(s) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
        if(s[i-1]===" " || i===0){
            answer += s[i].toUpperCase();
        console.log(answer);
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}