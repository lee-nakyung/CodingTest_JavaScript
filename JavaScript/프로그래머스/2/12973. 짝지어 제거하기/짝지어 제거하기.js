// 1. 일단 기본적으로는 다 푸쉬를 수행한다.
// 2. 근데 내 앞에 있는 것과 지금 내가 넣으려는게 같다? 그러면 팝을 한다.
// 3. 그리고 없어지면 stack의 길이가 0이다? 이러면 1을 리턴, 아닐 경우 0을 리턴한다.

function solution(s)
{
    var stack = [];
    
    for(let i=0; i<s.length; i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop();
        }else {
            stack.push(s[i]);
        }
    }
    
    
    return stack.length===0 ? 1 : 0;
}