// 들어온 배열 중에서 더 큰 값을 width로 몰고, 더 작은 값을 height로 몰아서
// 그 중에서 그 배열 중에서 제일 큰값 * 제일 큰값을 하면 될 것이다.


function solution(sizes) {
    const width=[];
    const height=[];
    for(let i=0; i<sizes.length; i++){
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        
        width.push(max);
        height.push(min);
    }
    
    return Math.max(...width) * Math.max(...height);
}