import java.util.Scanner;
public class Constructor {
   double volume;
    Constructor() {
        int side = 10;
        volume = side * side * side;
        System.out.println("Constructor without parameter");
        System.out.println("Volume is " + volume);
    }
    Constructor(int l, int b, int h) {
        volume = l * b * h;
        System.out.println("Constructor with parameter");
        System.out.println("Volume is " + volume);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        new Constructor();
        int l = sc.nextInt();
        int b = sc.nextInt();
        int h = sc.nextInt();

        new Constructor(l, b, h);
    }
}
