const express = require("express");
const { google } = require("googleapis");

const app = express();

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1NigEbtxeUV1ZPDXv5YvXYzdo1pvwNOdTFg-FY3V-Ofw";

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
}

app.get("/database", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
  const database = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  res.send(database.data);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
