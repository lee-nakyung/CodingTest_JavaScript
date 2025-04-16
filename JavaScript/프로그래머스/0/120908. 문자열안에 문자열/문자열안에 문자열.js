function solution(str1, str2) {
    
    
    //문자열 str1 안에 str2가 포함돼 있는지 확인하는 문제이므로, includes() 하나로 해결 가능.
    return str1.includes(str2) ? 1 : 2;
}