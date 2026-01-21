public class Book {

    String title;
    String author;
    int year;
    Book() {
        title = "Not specified";
        author = "Unknown";
        year = 0;
    }
    Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Year: " + year);
    }
    public static void main(String[] args) {

        System.out.println("Book 1:");
        Book book1 = new Book();
        book1.displayInfo();

        System.out.println();
        System.out.println("Book 2:");
        Book book2 = new Book("Java Programming", "Sakshi", 2024);
        book2.displayInfo();
    }
}
