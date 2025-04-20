function solution(num, k) {
    var answer = 0;
    
    var nums = num.toString();
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]===k.toString()){
            return i+1;
        }
    }
    return -1;
}