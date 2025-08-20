// 자릿수의 합을 구하려면 일단 문자열 -> 배열 -> 자릿수의 합
// x%자릿수의 합 == 0 이면 true 아니면 false
function solution(x) {

    var array = x.toString().split("").map(Number);
             let sum = 0;
    for(let i=0; i<array.length; i++){
        sum +=array[i];
    }
        if(x%sum===0){
            return true;
        } 
    return false;
    }