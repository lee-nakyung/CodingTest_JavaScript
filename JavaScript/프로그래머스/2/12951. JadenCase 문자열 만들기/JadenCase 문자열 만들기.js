// 공백으로 나눠진 문자열의 첫 글자는 대문자, 나머지는 다 소문자
// 공백으로 나누면 => 공백이 사라지고, 복원이 불가능하다. 따라서 문자 단위로 접근하는 것이 올바르다. 
// toLowerCase, toUpperCase, split, map + join(" "), 인덱스로 문자열 조작 
// 1. 문자열 전체를 소문자로 변환한다.
// 2. 문자 하나하나 순회하면서 첫 글자는 대문자로 바꾸는 방식으로 접근한다.
// 3. 이전 문자가 공백인 경우, 첫 문자를 대문자로 바꾼다.
// 4. 변환한 문자들을 이어붙여 결과 문자열을 만든다.

function solution(s) {
    var answer = '';
    
    // 1
    var lower = s.toLowerCase();
    
    // 첫 자리 이거나 앞에가 공백이면 그 다음 글자는 대문자
    for(let i=0; i<lower.length; i++){
        if(i===0 || lower[i-1]===" "){
            answer += lower[i].toUpperCase();
        }
        else {
               answer +=lower[i];
        }
     
    }

    return answer;
}