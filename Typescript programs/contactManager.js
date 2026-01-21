// contactManager.ts
// 2. ContactManager Class
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        console.log("✅ Contact added successfully");
    };
    ContactManager.prototype.viewContacts = function () {
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = this.contacts.find(function (c) { return c.id === id; });
        if (!contact) {
            console.log("❌ Contact not found");
            return;
        }
        if (updatedContact.name)
            contact.name = updatedContact.name;
        if (updatedContact.email)
            contact.email = updatedContact.email;
        if (updatedContact.phone)
            contact.phone = updatedContact.phone;
        console.log("✅ Contact updated successfully");
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.log("❌ Contact not found");
            return;
        }
        this.contacts.splice(index, 1);
        console.log("✅ Contact deleted successfully");
    };
    return ContactManager;
}());
// 3. Testing Script
var manager = new ContactManager();
// Add contacts
manager.addContact({
    id: 1,
    name: "Kavya",
    email: "kavya@gmail.com",
    phone: "9999999999"
});
manager.addContact({
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    phone: "8888888888"
});
// View contacts
console.log("📋 All Contacts:");
console.log(manager.viewContacts());
// Modify contact
manager.modifyContact(1, {
    email: "kavya.updated@gmail.com"
});
// Delete contact
manager.deleteContact(2);
// Try deleting non-existing contact
manager.deleteContact(3);
// Final view
console.log("📋 Final Contacts:");
console.log(manager.viewContacts());
