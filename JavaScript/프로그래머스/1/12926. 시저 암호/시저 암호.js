// 공백도 그대로 살려야함 
function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){ 
        if(s[i]===" "){
            answer+=" ";
            continue;
        }
        
        if(s[i]===s[i].toUpperCase()) // 만약 대문자이면{
            answer+=String.fromCharCode((s[i].charCodeAt(0)-65+n)%26+65);
        else {
            answer+=String.fromCharCode((s[i].charCodeAt(0)-97+n)%26+97);
        }
    }
    return answer;
}