# 아이스크림 가게의 상반기 주문 정보를 담은 테이블 FIRST_HALF
# 7월의 아이스크림 주문 정보를 담은 테이블 JULY 
# FIRST_HALF 기본키 => FLAVOR 외래키 => SHIPMENT_ID
# JULY 기본키 => SHIPMENT_ID , 외래키 => FLAVOR
# 7월 + 상반이 아이스크림 총 주문량 상위 3개 조회
# ORDER BY 총 주문량 DESC
# LIMIT 3
# 합계를 계산하는 SUM 생각하기
# 아이스크림 맛에 따라서 계산을 해야하므로 맛에 따라서 group by를 해준다. 

SELECT F.FLAVOR
FROM FIRST_HALF F
JOIN JULY J ON F.FLAVOR =J.FLAVOR
GROUP BY F.FLAVOR
ORDER BY SUM(F.TOTAL_ORDER) + SUM(J.TOTAL_ORDER) DESC
LIMIT 3;
