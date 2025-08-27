# 동물 보호소에 들어온 동물의 정보를 담은 테이블 => ANIMAL_INS
# 구해야 할 것 => 아픈 동물의 아이디와 이름을 조회

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = "Sick"
ORDER BY ANIMAL_ID 