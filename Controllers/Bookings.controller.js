const BookingsRouter = require("express").Router();
const BookingsModel = require("../Models/Bookings.model");

// GET ALL THE USERS
/**
 * METHOD = GET
 * REQUEST - {}
 * RESPONSE - ARRAY<USERS>
 */
BookingsRouter.get("/", (req, res, next) => {
  BookingsModel.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return res.status(200).json({
          data: cursor,
          success: true,
          message: "Booking fetched successfully!!!",
        });
      } else {
        return res.status(200).json({
          data: [],
          success: true,
          message: "No Data Found!!!",
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        success: false,
        message: "Error Fetching Booking Data!!!",
        error: err,
      });
    });
});

// CREATE NEW MAHAL
/**
 * METHOD = POST
 * INPUT = Object<MahalModel>
 * OUTPUT = Object<Mahal>
 */
BookingsRouter.post("/create", (req, res, next) => {
  // Getting details from request object
  const data = req.body;
  // Creating Mahal Model data
  const Bookings = new BookingsModel(data);
  // Save query
  Bookings.save()
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "Bookings created successfully!!!",
        });
      }
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Alas! Error Occurred",
          err: err.message,
        });
      }
    });
});

module.exports = BookingsRouter;
