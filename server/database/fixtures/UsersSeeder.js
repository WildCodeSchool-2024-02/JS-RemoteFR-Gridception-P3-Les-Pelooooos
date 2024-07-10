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
    this.usersDateOfBirth = ["2000-05-17", "2002-09-09"];
    this.usersPostalCode = ["33920", "17000"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeUsers = {
        gender: this.faker.person.gender(),
        lastname: this.faker.person.lastName(),
        firstname: this.faker.person.firstName(),
        date_of_birth: this.usersDateOfBirth[i],
        email: this.faker.internet.email(),
        city: this.faker.location.city(),
        postal_code: this.usersPostalCode[i],
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        cars_owned: this.usersCars[i],
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
