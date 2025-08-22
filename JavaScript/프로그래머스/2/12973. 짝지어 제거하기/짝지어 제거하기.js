// 스택을 이용하자. 
// 일단 모든 것을 다 푸쉬를 하는데, 스택에 들어간 마지막 것과 지금 넣으려는 것이 같으면 Pop
// 그래서 스택의 길이가 0이면 1, 아니면 0을 리턴한다.
function solution(s)
{
    var stack=[];

    for(let i=0; i<s.length; i++){
        if(stack[stack.length-1]===s[i]){
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }
    
    return stack.length===0 ? 1: 0;
}