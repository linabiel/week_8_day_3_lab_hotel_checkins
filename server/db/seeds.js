use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Yellow Wagtail",
        guest_email: "Sutherland",
        checked_in_status: "2017-06-01"
    },
    {
        guest_name: "Red Kite",
        guest_email: "Knockshinnoch",
        checked_in_status: "2017-01-22"
    },
    {
        guest_name: "Little Egret",
        guest_email: "Seamill",
        checked_in_status: "2018-08-15"
    }
]);
