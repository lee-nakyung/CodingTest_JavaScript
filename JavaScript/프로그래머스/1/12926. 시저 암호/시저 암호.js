function solution(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳
  let lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i]; // 현재 문자
    if (text == " ") { // 공백인 경우
      answer += " "; // 그대로 추가
      continue; // 다음 문자로 넘어감
    }
    
    let textArr = upper.includes(text) ? upper : lower; // 대소문자 여부에 따라 알파벳 배열 선택
    let index = textArr.indexOf(text) + n; // 현재 문자의 인덱스에 n만큼 이동
    if (index >= textArr.length) index -= textArr.length; // 배열을 벗어난 경우 원래 위치로 돌아옴
    answer += textArr[index]; // 암호화된 문자 추가
  }
  
  return answer; // 암호화된 문자열 반환
}