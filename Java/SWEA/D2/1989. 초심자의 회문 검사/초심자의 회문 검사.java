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
        
       
        for(int i=0; i<T; i++) {
        	String s = br.readLine();
        	 int answer = 1; 
             
        	
        	for(int j=0; j<s.length()/2; j++) {
        		if(s.charAt(j)!=s.charAt(s.length()-j-1)) {
        			answer =0;
        			break;
        		}
        	}
        	
        	bw.write("#"+(i+1)+" "+answer+"\n");
        }
      
       bw.flush();

    
}
}




