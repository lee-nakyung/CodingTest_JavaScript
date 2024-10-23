import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int count = 0;
        
        
        for(int i=0; i<N; i++) {
        	int a = Integer.parseInt(st.nextToken());
        	boolean isPrime = true;
        	
        	if(a==1) {
        		isPrime = false;
        	}
        	
        	else {
        		for(int j=2; j*j<=a; j++) {
        			if(a%j==0) {
        				isPrime = false;
        			}
        		}
        	}
        	
        	if(isPrime) {
        		count++;
        	}
        }
        
        System.out.println(count);
        
       
        
    }
}
