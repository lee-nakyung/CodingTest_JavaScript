function solution(n){
    let array = Array(n + 1).fill(true); 
    array[0] = array[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (array[i]) {
            for (let j = i * i; j <= n; j += i) {
                array[j] = false;
            }
        }
    }

    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (array[i]) answer++;
    }
    return answer;
}
