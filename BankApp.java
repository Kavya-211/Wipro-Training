import java.util.Scanner;

class BankAccount {
    double balance;

    BankAccount(double balance) {
        this.balance = balance;
    }

    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    void showBalance() {
        System.out.println("Balance: " + balance);
    }
}

class LoanAccount {
    double loanAmount;
    int months;

    LoanAccount(double loanAmount, int months) {
        this.loanAmount = loanAmount;
        this.months = months;
    }

    double calculateEMI() {
        return loanAmount / months;
    }

    void payEMI(String mode) {
        System.out.println("EMI paid by: " + mode);
    }
}

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
