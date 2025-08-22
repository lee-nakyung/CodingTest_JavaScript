// 최댓값 = 즉 Math.max로 구한 것들은, 이제 sizes[i]에서 최댓값중에 제일 최댓값 을 구해야한다. 
// garo에 들어갈 것은 sizes[0]에서 제일 큰 값. 
function solution(sizes) {

    let garo = [];
        let sero = [];
    
    for(let i=0; i<sizes.length; i++){
         
        garo.push(Math.max(...sizes[i]));
        sero.push(Math.min(...sizes[i]));

        
    }

    return Math.max(...garo) * Math.max(...sero);
}