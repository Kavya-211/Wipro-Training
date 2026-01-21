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
let user1: User = new User();
user1.input("Reethu", "1607");
user1.display();
///npm i ts-node@latest