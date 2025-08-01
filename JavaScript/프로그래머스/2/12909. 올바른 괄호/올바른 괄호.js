function solution(s){
    
// 이 문제는 스택을 이용하는 문제이고, ( 이게 들어온 후에 ) 이게 들어오면 상쇄가 되어서 없어짐
// 근데 만약에 ) 가 먼저 들어오면, 그건 false를 반환한다. 
    
    const stack = [];
    //s를 쭉 순회한다.
    // 그리고 만약에 (를 만나면 일단 stack에 push를 한다.
    for(const c of s){
        if(c==="("){
            stack.push(c);
            // 근데 만약 ) 를 만나면, pop을 하는데 stack의 길이가 0 이면 그건 return false를 한다.
            // 길이가 0 이 아닐때이제 pop을 하는거겠고..?
            // 길이가 0 이야 그러면 return false인거지..?
        }else if(c===")"){
            if(stack.length===0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0;
}