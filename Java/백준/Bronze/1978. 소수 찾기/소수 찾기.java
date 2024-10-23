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
        int array[]=new int[N];
        int count = 0;
        
        
        for(int i=0; i<N; i++) {
        	array[i] = Integer.parseInt(st.nextToken());
        	boolean isPrime = true;
        	
        	if(array[i]==1) {
        		isPrime = false;
        	}
        	
        	else {
        		for(int j=2; j*j<=array[i]; j++) {
        			if(array[i]%j==0) {
        				isPrime = false;
        				break;
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
