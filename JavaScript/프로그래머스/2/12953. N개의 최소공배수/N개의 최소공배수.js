//최대공약수 구하는 법 : gcd(b,a%b);

function gcd(a,b){
    if(b===0){
        return a;
    }
    return gcd(b,a%b);
}

//최소공배수
function lcm(a,b){
    return (a*b)/gcd(a,b);
}

function solution(arr) {
    let answer = arr[0];
    
    for(let i=1; i<arr.length; i++){
        answer = lcm(answer,arr[i]);
    }
    return answer;
}