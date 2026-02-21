enum EventType {
  TECH,
  MUSIC
}

interface Customer {
  id: number;
  name: string;
  email: string;
  event: EventType;
}

function Logger(value: any, context: any) {
  console.log(`Decorator applied on ${context.name}`);
}

class EventCustomer implements Customer {
  id: number;
  name: string;

  @Logger
  email: string;

  event: EventType;

  constructor(id: number, name: string, email: string, event: EventType) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.event = event;
  }
}

const customers: Customer[] = [];

customers.push(
  new EventCustomer(1, "Kavya", "kavya@gmail.com", EventType.TECH)
);

customers.forEach(c => console.log(c));
