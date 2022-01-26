import bcrypt from "bcryptjs";

export const userDataSet = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },

  {
    name: "User one",
    email: "one@example.com",
    password: bcrypt.hashSync("1234", 10),
  },

  {
    name: "User two",
    email: "two@example.com",
    password: bcrypt.hashSync("1234", 10),
  },

  {
    name: "User three",
    email: "three@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
];
