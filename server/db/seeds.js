use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Lord Melbury",
        guest_email: "Sutherland",
        checked_in_status: true
    },
    {
        guest_name: "Dr Abbot",
        guest_email: "Knockshinnoch",
        checked_in_status: false
    },
    {
        guest_name: "Mr Johnson",
        guest_email: "Seamill",
        checked_in_status: true
    }
]);
