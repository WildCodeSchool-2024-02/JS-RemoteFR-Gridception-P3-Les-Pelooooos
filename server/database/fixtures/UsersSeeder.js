const AbstractSeeder = require("./AbstractSeeder");
const ReservationsSeeder = require("./ReservationsSeeder");

class UsersSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "users",
      truncate: true,
      dependencies: [ReservationsSeeder],
    });
    this.usersIsAdmin = [
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
    ];
    this.usersCars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.usersDateOfBirth = [
      "2000-05-17",
      "2002-09-09",
      "2002-12-09",
      "2002-11-09",
      "2002-05-09",
      "2002-06-09",
      "2002-06-09",
      "2002-06-09",
      "2002-06-09",
      "2002-06-09",
      "2002-06-09",
    ];
    this.usersPostalCode = [
      "33920",
      "17000",
      "33000",
      "34000",
      "16000",
      "64000",
      "64000",
      "64000",
      "64000",
      "64000",
      "64000",
    ];
    this.usersConfirmPassword = [
      "****",
      "****",
      "****",
      "****",
      "****",
      "****",
      "****",
      "****",
      "****",
      "****",
      "****",
    ];
  }

  run() {
    for (let i = 0; i < 11; i += 1) {
      const fakeUsers = {
        gender: this.faker.person.gender(),
        lastname: this.faker.person.lastName(),
        firstname: this.faker.person.firstName(),
        date_of_birth: this.usersDateOfBirth[i],
        email: this.faker.internet.email(),
        city: this.faker.location.city(),
        postal_code: this.usersPostalCode[i],
        password: this.faker.internet.password(),
        confirm_password: this.usersConfirmPassword[i],
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
