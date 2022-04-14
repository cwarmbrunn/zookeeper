const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const fs = require("fs");
const path = require("path");

const express = require("express");
const QueryString = require("qs");

const { animals } = require("./data/animals.json");
const { type } = require("express/lib/response");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware that will provide a path to a location in our application
// In this case, the public folder, and instruct the server to make these files resources
// This means that all of our front-end code can now be accessed without having a specific
// endpoint created for it!
app.use(express.static("public"));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
