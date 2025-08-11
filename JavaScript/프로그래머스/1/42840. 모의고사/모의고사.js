function solution(answers) {
// 1. 일단 사람들별로 찍는 패턴을 선언
// 2. 수포자들의 점수를 저장할 배열을 선언 
// 3. answer.length와 patterns.length를 비교해서 만약 정답값이랑 같으면 scores에 +1
// 4. 가장 높은 점수 저장 
// 5. 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담는다. 
    
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5],
    ]
    
    const scores=[0,0,0];
    
    for(let i=0; i<answers.length; i++){
        for(let j=0; j<patterns.length; j++){
            const pick = patterns[j][i%patterns[j].length];
            if(answers[i]===pick){
                scores[j]+=1;
            }
        }
    }
    
    const maxScore = Math.max(...scores);
    
    const highestScores = [];
    for(let i=0; i<scores.length; i++){
        if(scores[i]===maxScore){
            highestScores.push(i+1);
        }
    }
    
    return highestScores;
}