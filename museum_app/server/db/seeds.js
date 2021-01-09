//const { db } = require("mongodb");

use gallery;
db.dropDatabase();

db.objects.insertMany( 
    [
        {
            artist: "Bob", 
            title: "Bob's work",
            date: "1985-10-05"

        },
        {
            artist: "Bob", 
            title: "Bob's other work",
            date: "1986-02-05"

        }

    ]

 )