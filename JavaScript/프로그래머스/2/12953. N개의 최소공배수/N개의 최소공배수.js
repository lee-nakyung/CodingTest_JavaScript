// 최대공약수
function gcd(a,b){
    return b===0 ? a : gcd(b,a%b);
}

// 최소공배수
function lcm(a,b){
    return (a*b)/gcd(a,b);
}

function solution(arr) {
    var result = arr[0];
    for(let i=1; i<arr.length; i++){
        result = lcm(result,arr[i]);
    }
    return result;
}
