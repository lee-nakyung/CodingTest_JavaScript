// 피보나치 dp 활용
function solution(n) {
    var answer = 0;
    var dp = new Array(n+1).fill(0); // 배열 선언
    dp[0]=0;
    dp[1]=1;
    
    for(let i=2; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2])%1234567;
    }
    return dp[n];
}