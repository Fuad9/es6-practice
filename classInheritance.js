// Class
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
    }

    register() {
        console.log(this.username + " is now registered");
    }
}
let bob = new User("bob", "bob@email.com", "12345");

bob.register();

// Inheritance
class Member extends User {
    constructor(username, email, password, memberAddress) {
        super(username, email, password);
        this.address = memberAddress;
    }

    showAddress() {
        console.log(this.username + " home is at " + this.address);
    }
}

let mike = new Member("mike", "mike@email.com", 123, "Dhaka");
mike.showAddress();
mike.register();