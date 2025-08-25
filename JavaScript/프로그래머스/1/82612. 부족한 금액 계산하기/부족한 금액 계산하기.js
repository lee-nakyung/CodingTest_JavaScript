// for 문으로 1부터 count까지 올라가게 하면 될 것 같다.


function solution(price, money, count) {
    var sum = 0;
    for(let i=1; i<=count; i++){ // 1일때, 1*3 으로 3이 나온다. 2일때, 
        sum += price*i;
        console.log(sum);
    }
    
    return money>sum ? 0 : sum-money;
}