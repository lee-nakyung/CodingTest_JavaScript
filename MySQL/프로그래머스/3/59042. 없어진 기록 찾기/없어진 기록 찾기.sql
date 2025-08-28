# 동물 보호소에 들어온 동물의 정보를 담은 테이블 => ANIMAL_INS
# 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블 => ANIMAL_OUTS

# 입양은 갔는데 들어온 기록이 없는 -> animal_outs는 있는데 ANIMAL_INS는 없는 것.
# LEFT OUTER JOIN 사용하기
# 없는것이 Right OUTER JOIN에서는 왼쪽으로 

SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_INS AS I
RIGHT OUTER JOIN ANIMAL_OUTS O ON I.ANIMAL_ID=O.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL
ORDER BY ANIMAL_ID
