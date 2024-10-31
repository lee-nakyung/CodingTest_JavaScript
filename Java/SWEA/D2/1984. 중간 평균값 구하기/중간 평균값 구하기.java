import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Solution {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
     

        int T = Integer.parseInt(br.readLine());
      
        for(int i=0 ;i<T; i++) {
        	StringTokenizer st = new StringTokenizer(br.readLine());
        	int max = Integer.MIN_VALUE;
        	int min = Integer.MAX_VALUE;
        	int sum=0;
        	
        	for(int j=0; j<10; j++) {
        		int a = Integer.parseInt(st.nextToken());
        		sum+=a;
        		max = Math.max(max,a);
        		min = Math.min(min, a);
        		
        		
        	}
        	
        	sum=sum-min-max;
        	
        	int answer = (int)Math.round(sum/8.0);
        	
        	bw.write("#"+(i+1)+" "+answer+"\n");
        	bw.flush();
        	
        }
        
 
 
}
}




