function solution(arr) {
    
    const min = Math.min(...arr);
const idx = arr.indexOf(min);

    
    if(arr.length === 1){
        arr.pop();
        arr.push(-1);
    } else {
           arr.splice(idx,1); 
    }
    
    return arr;
}