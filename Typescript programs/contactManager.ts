// contactManager.ts

// 1. Interface
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

// 2. ContactManager Class
class ContactManager {
    private contacts: Contact[] = [];

    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log("✅ Contact added successfully");
    }

    viewContacts(): Contact[] {
        return this.contacts;
    }

    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const contact = this.contacts.find(c => c.id === id);

        if (!contact) {
            console.log("❌ Contact not found");
            return;
        }

        if (updatedContact.name) contact.name = updatedContact.name;
        if (updatedContact.email) contact.email = updatedContact.email;
        if (updatedContact.phone) contact.phone = updatedContact.phone;

        console.log("✅ Contact updated successfully");
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index === -1) {
            console.log("❌ Contact not found");
            return;
        }

        this.contacts.splice(index, 1);
        console.log("✅ Contact deleted successfully");
    }
}

// 3. Testing Script
const manager = new ContactManager();

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
