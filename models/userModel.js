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