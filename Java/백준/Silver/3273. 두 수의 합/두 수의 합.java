import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int count = 0;
        int N = Integer.parseInt(br.readLine());
        int array[] = new int[N];
        
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        HashSet<Integer> hashSet = new HashSet<>();
        
        for(int i=0; i<N; i++) {
        	array[i]= Integer.parseInt(st.nextToken());
        	
        	hashSet.add(array[i]);
        	
        }
        
        int X = Integer.parseInt(br.readLine());
        
        for(int i=0; i<N; i++) {
        	if(hashSet.contains(X-array[i])) {
        		count++;
        	}
        }
        
        System.out.println(count/2);
        
        
       
    }
}
