import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        int N = Integer.parseInt(br.readLine());
        int count = 0;
        
        //3  1
        //4  -1
        //5  1
        //6  2
        //7 -1
        //8  2
        //9  3
        //10 2
        //11 3
        //12 4
        //13 3
        //n%5==1 == n/5 +1
        //n%5==3 == n/5 +1
        //n%5==2 == n/5+2
        //n%5==4 == n/5+2
        
        if(N==4 || N==7) {
        	count = -1;
        }
        
        else if(N%5==1||N%5==3) {
        	count = N/5+1;
        }
        
        else if(N%5==2 || N%5==4) {
        	count = N/5+2;
        }
        
        else if(N%5==0) {
        	count = N/5;
        }
       
        
        System.out.println(count);
        
     
        
    }
}
