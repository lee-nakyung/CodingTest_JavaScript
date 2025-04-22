function solution(n)
{
    var answer = 0;
    
    var arr = n.toString(); //숫자를 -> 문자열로 변환 , 문자열은 + 하면 그대로 붙으니까
    for(let i=0; i<arr.length; i++){
        answer+=Number(arr[i]);
    }
    return answer;
}