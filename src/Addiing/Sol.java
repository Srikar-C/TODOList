import java.util.*;
class Sol{
    public static void main(){
        String str="2023-12-22 => 14:26 => nnvjkh";
        String s[]=str.split(" => ");
        for(int i=0;i<s.length;i++){
            System.out.println(s[i]);
        }
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the new value");
        String st=sc.next();
        s[2]=st;
        for(int i=0;i<s.length;i++){
            System.out.println(s[i]);
        }
    }
}