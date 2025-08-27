# //ANIMAL_INS 는 동물 보호소에 들어온 동물의 정보를 담은 테이블 -> X
# //ANIMAL_OUTS 는 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블 -> ANIMAL_ID, NAME 
# //구해야 할 것은 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물과 이름을 조회하는 SQL 문을 작성하라.
# //동물 ID가 오름차순으로
# //ANIMAL_INS AS I
# //ANIMAL_OUTS AS O
# //ANIMAL_OUTS - ANIMAL_INS 를 해주어야 한다.
# //교집합을 제외하고, OUTS에 있는 것만 적용해주어야 한다. 
# //두 테이블의 교집합은 제외하고, ANIMAL_OUTS 테이블에만 해당되는 데이터를 조회하기 위해 RIGHT OUTER JOIN을 적용해야 한다.

SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_INS AS I
RIGHT OUTER JOIN ANIMAL_OUTS AS O ON I.ANIMAL_ID=O.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL
ORDER BY O.ANIMAL_ID;