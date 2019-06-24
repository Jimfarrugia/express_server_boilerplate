# Express Server Boilerplate

My aim for this project is to create a reusable starting-point for Node Express applications.

Features:

- [x] MongoDB with Mongoose
- [x] MVC Structure
- [x] RESTful API
- [ ] Authentication with Passport

### Getting started:

1. Clone or download the repo and cd into the project's root directory.

2. Install node modules by running:

   `$ npm install`

3. Create a file named `.env` in the root directory.

4. Add the following line to the `.env` file:


    `DB_HOST={mongodb://localhost/my_collection}`
    (replace the `{}` and the text inside with your database URI)

5. Add the following line with your server port number:

   `PORT=3000`

6. Save and close the `.env` file.

**Note:** _The `.env` file is ignored in the git repo (it will not be uploaded when the repo is pushed)._

---

### Packages Included:

- express
- express-handlebars
- mongoose
- body-parser
- method-override
- morgan
- dotenv
- nodemon (devDependancy)

---

_Originally adapted from [this boilerplate](https://github.com/CoderAcademy-SYD/express-boilerplate)._
