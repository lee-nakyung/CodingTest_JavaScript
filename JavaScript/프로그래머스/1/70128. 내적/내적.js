

function solution(a, b) {
    var answer = 0;
    
    // a[0]*b[0] + a[1]*b[1] + a[2]*b[2]
    for(let i=0; i<a.length; i++){
        answer+=a[i]*b[i];
    }
    return answer;
}