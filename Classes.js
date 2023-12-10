class User {
  /**
   * Creates an instance of User.
   * @constructor
   * @param {number} id - The user ID.
   * @param {string} name - The user's name.
   * @param {string} lastname - The user's lastname.
   * @param {string} email - The customer's email.
   * @param {Address} address - The user's address.
   */
  constructor(id, name, lastname, address, email) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.email = email;
  }
}

class Customer extends User {
  /**
   * Creates an instance of Customer.
   * @constructor
   * @param {number} id - The customer ID.
   * @param {string} name - The customer's name.
   * @param {Address} address - The customer's address.
   * @param {CreditCard[]} creditCards - The customer's credit cards.
   */
  constructor(id, name, address, email, creditCards) {
    super(id, name, address, email);
    this.email = email;
    this.creditCards = creditCards;
  }
}

class Owner extends User {
  /**
   * Creates an instance of Owner.
   * @constructor
   * @param {number} id - The owner ID.
   * @param {string} name - The owner's name.
   * @param {Address} address - The owner's address.
   * @param {BankAccount} bankAccount - The owner's bank account.
   * @param {Property[]} properties - The properties owned by the owner.
   */
  constructor(id, name, address, email, bankAccount, properties) {
    super(id, name, address, email);
    this.bankAccount = bankAccount;
    this.properties = properties;
  }
}

class Organization extends User {
  /**
   * Creates an instance of Organization.
   * @constructor
   * @param {number} id - The organization ID.
   * @param {string} name - The organization's name.
   * @param {Address} address - The organization's address.
   * @param {string} accountManager - The account manager for the organization.
   * @param {BankAccount} bankAccount - The organization's bank account.
   * @param {Property[]} properties - The properties associated with the organization.
   */
  constructor(id, name, address, email,  accountManager, bankAccount, properties = []) {
    super(id, name, address, email);
    this.accountManager = accountManager;
    this.bankAccount = bankAccount;
    this.properties = properties;
  }
}

class BankAccount {
  /**
   * Creates an instance of BankAccount.
   * @constructor
   * @param {number} idUser - The user ID associated with the bank account.
   * @param {string} bank - The bank name.
   * @param {string} branch - The branch name.
   * @param {string} accountNumber - The account number.
   */
  constructor(idUser, bank, branch, accountNumber) {
    this.idUser = idUser;
    this.bank = bank;
    this.branch = branch;
    this.accountNumber = accountNumber;
  }
}

class Property {
  /**
   * Creates an instance of Property.
   * @constructor
   * @param {number} id - The property ID.
   * @param {Room[]} rooms - The rooms in the property.
   * @param {string} contactPerson - The contact person for the property.
   * @param {string} phone - The contact phone number for the property.
   * @param {Address} address - The property address.
   */
  constructor(id, rooms, contactPerson, phone, address) {
    this.id = id;
    this.rooms = rooms;
    this.contactPerson = contactPerson;
    this.phone = phone;
    this.address = address;
    this.ratings = [];
  }

  /**
   * @type {Rating[]} - The ratings for the property.
   */
  ratings;
}

class Rating {
  /**
   * Creates an instance of Rating.
   * @constructor
   * @param {number} idCustomer - The customer ID associated with the rating.
   * @param {number} stars - The number of stars given in the rating.
   * @param {number} idProperty - The property ID associated with the rating.
   */
  constructor(idCustomer, stars, idProperty) {
    this.idCustomer = idCustomer;
    this.stars = stars;
    this.idProperty = idProperty;
  }
}

class Room {
  /**
   * Creates an instance of Room.
   * @constructor
   * @param {number} id - The room ID.
   * @param {number} peopleCapacity - The capacity of the room in terms of people.
   * @param {number} beds - The number of beds in the room in terms of people.
   * @param {number} bathrooms - The number of bathrooms in the room in terms of people.
   * @param {boolean} available - Indicates if the room is available.
   * @param {number} costPerDay - The cost per day for the room.
   */
  constructor(id, peopleCapacity, beds, bathrooms, available, costPerDay) {
    this.id = id;
    this.peopleCapacity = peopleCapacity;
    this.beds = beds;
    this.bathrooms = bathrooms;
    this.available = available;
    this.costPerDay = costPerDay;
  }
}

class Reservation {
  /**
   * Creates an instance of Reservation.
   * @constructor
   * @param {Property} property - The property for which the reservation is made.
   * @param {Date} startDate - The start date of the reservation.
   * @param {Date} endDate - The end date of the reservation.
   * @param {Room[]} rooms - The rooms reserved.
   * @param {number} price - The total price of the reservation.
   * @param {string} status - The status of the reservation.
   */
  constructor(property, startDate, endDate, rooms, price, status) {
    this.property = property;
    this.startDate = startDate;
    this.endDate = endDate;
    this.rooms = rooms;
    this.price = price;
    this.status = status;
  }
}

/**
 * Reservation status options.
 * @readonly
 * @enum {string}
 */
const ReservationStatus = {
  /** The reservation is booked. */
  BOOKED: 'Booked',
  /** The reservation is paid. */
  PAID: 'Paid',
  /** The reservation is cancelled. */
  CANCELLED: 'Cancelled'
};

/**
 * Payment options.
 * @readonly
 * @enum {string}
 */
const PaymentOptions = {
  /** Payment by cash. */
  CASH: 'Cash',
  /** Payment by card. */
  CARD: 'Card'
};

module.exports = { 
  Customer, 
  Owner, 
  Organization, 
  BankAccount, 
  Property, 
  Rating, 
  Room, 
  Reservation, 
  ReservationStatus, 
  PaymentOptions };