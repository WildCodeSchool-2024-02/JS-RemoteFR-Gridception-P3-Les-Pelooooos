const AbstractSeeder = require("./AbstractSeeder");
const ReservationsSeeder = require("./ReservationsSeeder");

class UsersSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "users",
      truncate: true,
      dependencies: [ReservationsSeeder],
    });
    this.usersIsAdmin = [true, false];
    this.usersCars = [1, 2];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeUsers = {
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        email: this.faker.internet.email(),
        city: this.faker.location.city(),
        cars_owned: this.usersCars[i],
        password: this.faker.internet.password(),
        is_admin: this.usersIsAdmin[i],
        reservations_id: this.getRef(
          `reservations_${Math.floor(Math.random() * 1) + 1}`
        ).insertId,
        refName: `users_${i}`,
      };
      this.insert(fakeUsers);
    }
  }
}
module.exports = UsersSeeder;
