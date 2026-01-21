Object Oriented Programming
    It has main pillars :
        Class / Object
        Encapsulation - 1) Mainly focus on data  , 2) permission access either to read or write or both 
                        3) validation while setting the data 
        all attributes of a class are private in nature but indirectly we can 
                        access them so, to achieve  this we create getter and setter methods

                        for eg :  private long password ;  
                        we create a setter method which is write only method to 
                        set the password and we cannot read it as we have not created a getter method for it ( read method) .
        Abstraction : focussing on implementation hiding (achieved by either abstract class or interface)
        Inheritance :  when a child class is inheriting the features of base class like a child inherit the properties of father
        Polymorphism :  many forms when one object behaves many forms. 
   
   package OOPS;



public abstract class AbstractionExample {

    // contains abstract or non-abstract methods

    public abstract void phoneCall();  // implementation is hidden
   
    public void aboutPhone(){

        long memory;
    };  // non abstract which is not hidden and already revealed the implementation

    public static void main(String[] args) {
        
        Incentive incentive;

        incentive = new Manager(); // we cannot  create an object of abstract class
        incentive.diwaliBonus();

        incentive = new SE();
        incentive.diwaliBonus();
    }
    
}


interface  Incentive
{
     
     abstract void diwaliBonus(); // but this bonus will be different as per their role

}


class Manager implements Incentive{
 
 public void diwaliBonus()
    {
        //logic
    }
}

class SE implements Incentive
{

   public void diwaliBonus()
    {
        // logic
    }

}

//Write a program for bankaccount to know the balance after depositing and withdrawing the amount 
// and also having the loan account facilitiy to calculate the emi and monthly emi's will be
//paid by customer using either by card or cash 

interface BaseClass
{




}
interface  SubClass extends BaseClass{

public void amount();
}
class ChildClass  implements SubClass
{
public void amount()
{

}

}
public static void main(String[] args) {
    SubClass sc = new SubClass();
    sc.amount();
}
}

package OOPS;

//concrete class
public class EncapsulationExample {

    private int id;
    private String name;
    private long phoneno;
   //public double balance; // is calulated via deposit() and withdraw()
    private double balance;

    
    public int getId() {
        return id;
    }
 
    public String getName() {
        return name;
    }
    public void setName(String Aadharname) {
        
        this.name = Aadharname;
    }
    public long getPhoneno() {
        return phoneno;
    }
    public void setPhoneno(long phoneno) {

        if(phoneno >= 10)
        this.phoneno = phoneno;
    }

    public  void deposit(double amount)
    {
        if(amount>0)
        {
            balance += amount;
        }
    }
    public double getBalance() {
        return balance;
    }

    public static void main(String[] ar)
    {

        EncapsulationExample obj = new EncapsulationExample();
        obj.setName("Niti Dwivedi");

        obj.deposit(5000);
        System.out.println("Hi!" + obj.getName() +"After depositing the updated Balance is:" + obj.getBalance());
    }
    
}



package OOPS;

 interface InterfaceExample{

public  void phoneCall();  // by default these abstract and they do not have  body
public void phoneSms(); 
public  void phoneAudio(); 
    
}



Object Oriented Programming : reusability  , scalable , write maintainable , security 
class  -- Entity class :  POJO - Data(Variables) 2) Behaviour (Methods)
        -- Real world entities  : Employee , BankAccount, Student , Teacher , Vehicle 
    It has main pillars :
        Class / Object  : from this blueprint which is a class , the Actual thing which we create  from this blueprint is an object
       Each object has its own data but shares same behaviour
        Encapsulation - wrapping data + methods together and hiding data using private access specifier
        1) Mainly focus on data  , 2) permission access either to read or write or both 
                        3) validation while setting the data 

                        1)Data Security
                        2)Validation Control
                        3) Easy Maintenance

        all attributes of a class are private in nature but indirectly we can 
                        access them so, to achieve  this we create getter and setter methods

                        for eg :  private long password ;  
                        we create a setter method which is write only method to 
                        set the password and we cannot read it as we have not created a getter method for it ( read method) .
        Abstraction : focussing on implementation hiding (achieved by either abstract class or interface)
                       Show what to do , and hide how to do
       
       
        Inheritance :  when a child class is inheriting the features of base class like a child inherit the properties of father
        Polymorphism :  many forms when one object behaves many forms. 
        There  are two types static polymorphism and dynamic polymorphism

        Static Polymorphism : When you have multiple methods with the same name but different
                                signature in same class  -- overloading
        dynamic Polymorphism : When you have multiple methods with the same name , with same 
                                signature in child class  -- overriding


                class Hr{
                public void salary(String role , int vc)
                {
                        // manager

                }

                 
                }
                Class TeamLead extends Hr{


                     public void salary(String role , int vc)
                {

                    //se
                }
                

                }


