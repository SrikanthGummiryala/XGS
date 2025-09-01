const express = require("express");
const router = express.Router();
const { createContact, getContacts } = require("../controllers/contactController");

router.post("/contact", createContact);
router.get("/contacts", getContacts);

module.exports = router;
