import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
       
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        
        bw.write(String.valueOf(gcd(a,b))+"\n");
        bw.write(String.valueOf(lcm(a,b)));
        
        bw.flush();
                
    }
    

public static int gcd(int m, int n) { //최대공약
	if(m%n==0) {
		return n;
	}
	return gcd(n,m%n);
}

public static int lcm(int a, int b) {
	return a*b/gcd(a,b);
}

}

