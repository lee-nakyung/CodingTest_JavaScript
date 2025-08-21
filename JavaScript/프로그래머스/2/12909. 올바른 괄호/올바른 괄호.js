// count 변수를 선언해서, 
// (를 만나면 +1 )를 만나면 -1 를 한다.
// 근데 만약 )를 만났는데 그 때의 count 값이 0이면, false를 반환한다. 
// count값이 최종 0 이면 , true를 반환하고 그렇지 않으면 false를 반환한다.

function solution(s){
    var count = 0;

    for(let i=0; i<s.length; i++){
        if(s[i]=="("){
            count++;
        } else if (s[i]==")"){
            if(count===0){
                return false;
            }
            count--;
        }
    }
    
    return count ===0 ? true : false;
}