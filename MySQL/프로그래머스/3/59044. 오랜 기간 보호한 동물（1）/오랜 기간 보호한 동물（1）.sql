# 동물 보호소에 들어온 동물의 정보를 담은 테이블 => ANIMAL_INS
# 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블 => ANIMAL_OUTS
# 조인 키는 ANIMAL_ID
# 아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과, 보호 시작일을 조회
# 보호 시작일 순으로 정렬
# 즉 보호소에 들어왔지만, 입양을 보내지 않은 친구. ANIMAL_INS - ANIMAL_OUTS

SELECT I.NAME, I.DATETIME
FROM ANIMAL_INS I
LEFT OUTER JOIN ANIMAL_OUTS O ON I.ANIMAL_ID =O.ANIMAL_ID
WHERE O.DATETIME IS NULL
ORDER BY DATETIME
LIMIT 3
