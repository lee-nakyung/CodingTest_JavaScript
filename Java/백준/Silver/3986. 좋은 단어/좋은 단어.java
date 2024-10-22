import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());
        int count = 0;
        
        for(int i=0; i<N; i++) {
        	
        	 Stack <Character> stack = new Stack<>();
        	String s = br.readLine();
        	
        	for(int j=0; j<s.length(); j++) {
        		char c = s.charAt(j);
        		
        		if(!stack.isEmpty() && stack.peek() == c) {
        			stack.pop();
        		}
        		else {
        			stack.push(c);
        		}
        		
        	}
        	
        	if(stack.isEmpty()) {
        		count++;
        	}
        	
        	
        	
        }
        System.out.println(count);
        
       
    }
}
