// filter 메소드를 이용해서 min 값이 아닌 것들만 해서 다시 새로운 배열을 반환하자. 

function solution(arr) {
    
    var answer=[];
    
    var min = Math.min(...arr);
    
    arr = arr.filter(num => num!= min);
    
    if(arr.length ===0 ){
        answer.push(-1);
    } else {
        return arr;
    }
    
    return answer;

  
}