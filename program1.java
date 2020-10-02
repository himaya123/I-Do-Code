package rectangle1;


public class Rectangle1 
{
    private int width,height;
    public void setVal (int w,int h);
    
   
  
    { 
        width=w;
        height=h;
        
    }
    
public void displayArea()
{
    System.out.println ("Area is: "+(width*height));
}  
    public static void main(String[] args)
    {
      Rectangle1 r=new rectangle1 ();
      r.SetVal (100, 20);
      r.displayArea();
    }
    }
