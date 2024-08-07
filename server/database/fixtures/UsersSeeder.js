const AbstractSeeder = require("./AbstractSeeder");

class UsersSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "users",
      truncate: true,
    });

    this.usersCars = [1, 2, 3];
    this.usersPostalCode = ["33920", "17000", "64000"];
    this.email = ["toto@toto.com", "tata@toto.com", "titi@toto.com"];
    this.first_name = ["Toto", "Tata", "Titi"];
    this.last_name = ["Toto", "Tata", "Titi"];
    this.birthdate = ["1990-01-01", "1990-09-01", "1990-10-01"];
    this.role = ["admin", "user", "user"];
    this.city = ["Bordeaux", "Fougères", "Montpellier"];
  }

  run() {
    for (let i = 0; i < 3; i += 1) {
      const fakeUsers = {
        lastname: this.last_name[i],
        firstname: this.first_name[i],
        birthdate: this.birthdate[i],
        email: this.email[i],
        city: this.city[i],
        postal_code: this.usersPostalCode[i],
        role: this.role[i],
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        cars_owned: this.usersCars[i],
        image: "https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        refName: `users_${i}`,
      };
      this.insert(fakeUsers);
    }
  }
}
module.exports = UsersSeeder;