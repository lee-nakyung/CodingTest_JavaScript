function solution(money) {
    
    let x = 0;
    let y =0;
    
    x= Math.floor(money/5500);
    y = money%5500;
    
    return [x,y];
}