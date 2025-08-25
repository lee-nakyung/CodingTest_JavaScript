// 스택을 이용한다
// 스택에 넣고. 그 stack[stack.length-1] 이랑 지금 넣으려는 것이 같으면 pop을 한다.
// 그리고 리턴한다.
// 만약 지금 스택에 

function solution(arr)
{
    var stack=[];
    
    for(let i=0; i<arr.length; i++){
        if(stack[stack.length-1]===arr[i]){
            continue;
        }
        else {
            stack.push(arr[i]);
        }
    }
    
    return stack;
}