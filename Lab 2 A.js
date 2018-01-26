// Input number it will reverse them and print
package javaapplication1;
import java.util.Scanner;
/**
 *
 * @author dnguyen3
 */
public class JavaApplication1 {


        
        
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        Scanner input = new Scanner(System.in);
                System.out.println("Please enter number");
                
       int number = input.nextInt();
   
    
  System.out.println (reverse(number));

    
  
}
    
    public static String reverse(int numbers){
       int temp;
       int revnum=0;
       int i=0;
       int number2 = numbers;
      String x ="";
      
       
       while(numbers>0){
           temp= numbers %10;
          
           numbers=numbers/10;
           revnum = revnum *10+temp;
       }
       
       while(number2 %10 ==0){
       i++;
       number2 /=10;
      
       }
       
       for(int j=0;j<i;j++){
           x= x + "0";
       }
 
        x= x + Integer.toString(revnum);
        
       return x;
    }
}
Lab2.txt
Open with
Displaying Lab2.txt.
