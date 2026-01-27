
public class VowelCount {
    public static void main(String[] args) {
        String value = "Here is my java program";
        int count = 0;

        value = value.toLowerCase();

        for (int i = 0; i < value.length(); i++) {
            char ch = value.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);
    }
}
//use second use case count the total words dont include the spaces use s1.split()

