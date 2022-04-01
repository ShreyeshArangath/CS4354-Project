const express = require("express");
const app = express();
const PORT = 9000; //TODO: Change this to be dynamic
app.listen(9000, () => {
    console.log("Running the backend server on port 9000");
})