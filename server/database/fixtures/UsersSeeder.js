const AbstractSeeder = require("./AbstractSeeder");

class UsersSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "users", truncate: true });
    this.usersIsAdmin = [true, false, true, true, false];
    this.usersCars = [1, 2, 3, 3, 2];
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 5; i += 1) {
      // Generate fake user data
      const fakeUsers = {
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        email: this.faker.internet.email(),
        city: this.faker.location.city(),
        cars_owned: this.usersCars[i],
        password: this.faker.internet.password(),
        is_admin: this.usersIsAdmin[i],
      };
      this.insert(fakeUsers);
    }
  }
}
module.exports = UsersSeeder;
