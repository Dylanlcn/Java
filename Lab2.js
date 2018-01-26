/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication1;
import java.util.Scanner;
import java.io.*;

/**
 *
 * @author Dylan
 */
public class JavaApplication1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws FileNotFoundException{
   
     Scanner scanner= new Scanner(System.in);
     System.out.println("Please enter a Text file");
     String x = scanner.next();

     System.out.println("Please enter Character");
     String y = scanner.next();
 
     System.out.println(read(x,y));
    
    }
      public static int read(String x, String y) throws FileNotFoundException {         
   int sum = 0;
   
  String location = x+"."+"txt";

Scanner file = new Scanner(new File(location));
file.useDelimiter(y);

while(file.hasNext()){
     
sum++;
file.next();
   }
return sum;}
      
      
      
      
      
    }
    
 
    
