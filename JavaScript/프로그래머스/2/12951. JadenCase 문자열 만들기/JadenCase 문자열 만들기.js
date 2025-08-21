// 첫 문자는 대문자, 나머지는 소문자가 기본
// 첫 문자가 알파벳이 아닐 때에는 그 다음 문자는 소문자. 
// 첫 문자를 판별하려면? 그 앞이 공백이여야함. 
// 따라서 공백이면 ? 그 다음 s[i]가 소문자. 

function solution(s) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
       if(s[i-1]===" "){
           answer+=s[i].toUpperCase();
       } else if (i===0){
           answer+=s[i].toUpperCase();
       } else {
           answer+=s[i].toLowerCase();
       }
    }
    return answer;
}