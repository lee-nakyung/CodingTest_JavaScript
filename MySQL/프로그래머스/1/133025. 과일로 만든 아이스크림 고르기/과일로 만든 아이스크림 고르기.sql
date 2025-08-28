# FIRST_HALF => 아이스크림 가게의 상반기 주문 정보를 담은 테이블, 기본키는 FLAVOR
# ICECREAM_INFO => 아이스크림 성분에 대한 정보를 담은 테이블, 기본키는 FLAVOR 이자 외래키
# 구하고자 하는 것 => 총주문량이 3000보다 높으면서 주 성분이 과일인 아이스크림의 맛
# 순서 => 총 주문량이 큰 순서대로 

SELECT F.FLAVOR
FROM FIRST_HALF F
JOIN ICECREAM_INFO I ON F.FLAVOR = I.FLAVOR
WHERE F.TOTAL_ORDER > 3000 AND I.INGREDIENT_TYPE = "fruit_based"
ORDER BY F.TOTAL_ORDER DESC