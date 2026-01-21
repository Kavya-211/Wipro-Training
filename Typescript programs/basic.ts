class basic {
    
    username: string;
    password: string;
    
    constructor() {
        this.username = "";
        this.password = "";
    }
   
    input(username: string, password: string): void {
        this.username = username;
        this.password = password;
    }
   
    display(): void {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    }
}
let basic1: User = new User();
user1.input("Reethu", "1607");
user1.display();