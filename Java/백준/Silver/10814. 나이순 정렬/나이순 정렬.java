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
    
        
        int N = Integer.parseInt(br.readLine());
        String array[][]=new String[N][2];
        
        for(int i=0; i<N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
        	array[i][0]=st.nextToken(); //나이(문자열로 저장됨)
        	array[i][1]=st.nextToken();  //두번째 string
        }
        
        Arrays.sort(array,(a,b)->{ //[나이,이름]
        	return Integer.parseInt(a[0])- Integer.parseInt(b[0]); //나이를 숫자로 변환해서 비교 
        });
        
        for(int i=0; i<N; i++) {
        	bw.write(array[i][0]+" "+array[i][1]+"\n");
        }
        
        bw.flush();
       
        
    }
    
}




