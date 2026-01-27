import java.util.Scanner;

// Parent Class (Inheritance)
class Account {
    private double balance;   // Encapsulation

    // Constructor
    Account(double balance) {
        this.balance = balance;
    }

    // Getter
    public double getBalance() {
        return balance;
    }

    // Setter
    public void setBalance(double balance) {
        this.balance = balance;
    }
}

// Child Class 1
class BankAccount extends Account {

    BankAccount(double balance) {
        super(balance);   // calls parent constructor
    }

    void deposit(double amount) {
        setBalance(getBalance() + amount);
    }

    void withdraw(double amount) {
        if (amount <= getBalance()) {
            setBalance(getBalance() - amount);
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    void showBalance() {
        System.out.println("Balance: " + getBalance());
    }
}

// Child Class 2
class LoanAccount extends Account {
    private int months;

    LoanAccount(double loanAmount, int months) {
        super(loanAmount);   // loanAmount stored as balance
        this.months = months;
    }

    double calculateEMI() {
        return getBalance() / months;
    }

    void payEMI(String mode) {
        System.out.println("EMI paid by: " + mode);
    }
}

// Main Class
public class BankApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Initial Balance: ");
        BankAccount acc = new BankAccount(sc.nextDouble());

        System.out.print("Enter Deposit Amount: ");
        acc.deposit(sc.nextDouble());

        System.out.print("Enter Withdraw Amount: ");
        acc.withdraw(sc.nextDouble());

        acc.showBalance();

        System.out.print("Enter Loan Amount: ");
        double loan = sc.nextDouble();

        System.out.print("Enter Number of Months: ");
        int months = sc.nextInt();

        LoanAccount la = new LoanAccount(loan, months);

        System.out.println("Monthly EMI: " + la.calculateEMI());

        System.out.print("Pay EMI by (Cash/Card): ");
        la.payEMI(sc.next());

        sc.close();
    }
}
