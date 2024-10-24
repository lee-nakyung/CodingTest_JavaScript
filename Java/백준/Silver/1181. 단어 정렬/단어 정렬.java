import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//        StringTokenizer st = new StringTokenizer(br.readLine());
//        
        
        int N = Integer.parseInt(br.readLine());
        
        HashSet<String> set = new HashSet<>(); //중복 제거 이므로 해시셋 선언하
        
        for(int i=0; i<N; i++) {//set에다가 문자열 추가하기
        	set.add(br.readLine());
        }
        
        List<String> word = new ArrayList<>(set);//리스트로 바꿔줌. sort 해야되기 때문에
        
        
        Collections.sort(word,(a,b)->{
        	if(a.length()==b.length()) {
        		return a.compareTo(b);
        	}
        	else {
        		return a.length()-b.length();
        	}
        });
        
        
        for(int i=0; i<word.size(); i++) {//리스트는 사이즈로 받아야함.
        	System.out.println(word.get(i));//리스트는 get으로 요소를 가져와서 출력. 
        }
        
        
        
        
        
       
    }
    
}




