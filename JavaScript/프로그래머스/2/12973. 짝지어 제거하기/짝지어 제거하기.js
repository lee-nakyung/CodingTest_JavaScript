function solution(s)
{
    const stack = [];
    // 일단 기본적으로는 스택에 하나씩 푸쉬를 한다. 
    // 그런데 내 앞에 있는 문자열이 지금 내 문자랑 같으면 pop을 한다.
    // 나중에 길이가 0이면 1을 반환하고, 그렇지 않으면 0을 반환한다.
    
    for(const c of s){
        if(stack.length > 0 && stack[stack.length-1] === c){
            stack.pop();
        }else {
            stack.push(c);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}