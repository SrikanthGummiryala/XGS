// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const contactRoutes = require("./routes/contactRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api", contactRoutes);

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log("MongoDB connection error:", err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const XLSX = require("xlsx");
// require("dotenv").config();

// const Contact = require("./models/Contact"); // adjust path to your model

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ POST route: Save contact + update Excel
// app.post("/api/contact", async (req, res) => {
//   try {
//     // Save to MongoDB
//     const newContact = new Contact(req.body);
//     await newContact.save();

//     // Fetch all contacts from MongoDB
//     const allContacts = await Contact.find().lean();

//     // Convert MongoDB data to worksheet
//     const worksheet = XLSX.utils.json_to_sheet(allContacts);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

//     // Save to Excel file
//     XLSX.writeFile(workbook, "contacts.xlsx");

//     res.json({ message: "✅ Contact saved and Excel updated!" });
//   } catch (error) {
//     console.error("❌ Error saving contact:", error);
//     res.status(500).json({ error: "Failed to save contact" });
//   }
// });

// // ✅ GET route: Download Excel file
// app.get("/api/export-excel", async (req, res) => {
//   try {
//     const allContacts = await Contact.find().lean();

//     const worksheet = XLSX.utils.json_to_sheet(allContacts);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

//     const filePath = "contacts.xlsx";
//     XLSX.writeFile(workbook, filePath);

//     res.download(filePath); // lets you download Excel directly
//   } catch (error) {
//     console.error("❌ Error exporting Excel:", error);
//     res.status(500).json({ error: "Failed to export Excel" });
//   }
// });

// // ✅ Connect MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.log("MongoDB connection error:", err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const XLSX = require("xlsx");
require("dotenv").config();

const Contact = require("./models/Contact"); // adjust path to your model

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// POST route: Save contact + update Excel
app.post("/api/contact", async (req, res) => {
  try {
    // Save to MongoDB
    const newContact = new Contact(req.body);
    await newContact.save();

    // Fetch all contacts with only required fields
    const allContacts = await Contact.find().lean();

    // Pick only required fields
    const formattedContacts = allContacts.map((c) => ({
      id: c._id.toString(),
      fullName: c.fullName,
      phone: c.phone,
      service: c.service,
      country: c.country,
      date: c.date,
      time: c.time,
      message: c.message,
    }));

    // Convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(formattedContacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    // Save to Excel file
    XLSX.writeFile(workbook, "contacts.xlsx");

    res.json({ message: "Contact saved and Excel updated!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// GET route: Download Excel file
app.get("/api/export-excel", async (req, res) => {
  try {
    const allContacts = await Contact.find().lean();

    // Pick only required fields
    const formattedContacts = allContacts.map((c) => ({
      id: c._id.toString(),
      fullName: c.fullName,
      phone: c.phone,
      service: c.service,
      country: c.country,
      date: c.date,
      time: c.time,
      message: c.message,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedContacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    const filePath = "contacts.xlsx";
    XLSX.writeFile(workbook, filePath);

    res.download(filePath); // download Excel directly
  } catch (error) {
    console.error("Error exporting Excel:", error);
    res.status(500).json({ error: "Failed to export Excel" });
  }
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
