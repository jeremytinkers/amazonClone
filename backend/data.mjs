import bcrypt from "bcrypt";

//user data:-
const usersDb = [
    {
        name: 'Jeremiah',
        email: 'admin@example.com',
        password: bcrypt.hashSync('abracadabra', 8), //encrypting , 8 ->no of salt rounds
        isAdmin: true,
    },
    {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('notSoAbracadabra', 8), 
        isAdmin: false,
    },
];


//product data:-
const data = [

    {
        id: 1,
        name: "Product 1",
        imgSrc: "p1.jpg",
        price: 123,
        rating: 3.5,
        noReviews: 130,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        curStock: 4
    },


    {
        id: 2,
        name: "Product 2",
        imgSrc: "p2.jpg",
        price: 154,
        rating: 4.5,
        noReviews: 9910,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        , curStock: 13
    },

    {
        id: 3,
        name: "Product 3",
        imgSrc: "p3.jpg",
        price: 189,
        rating: 3.5,
        noReviews: 980,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        , curStock: 211
    },
    {
        id: 4,
        name: "Product 4",
        imgSrc: "p4.jpg",
        price: 89,
        rating: 2,
        noReviews: 110,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        , curStock: 10
    },
    {
        id: 5,
        name: "Product 5",
        imgSrc: "p5.jpg",
        price: 23,
        rating: 4.5,
        noReviews: 276,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        , curStock: 13
    },


]

export { data, usersDb };