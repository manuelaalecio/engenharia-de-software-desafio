const { google } = require("googleapis");

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1UMowOsjdKCZ2DoQscGbYWpKe-pguAldjr5TY6JiMbKI";
  const range = "A4:H";

  return {
    auth,
    googleSheets,
    spreadsheetId,
    range,
  };
}

async function getData() {
  const { auth, googleSheets, spreadsheetId, range } = await getAuthSheets();

  try {
    const response = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (rows.length) {
      const studentsData = rows.map((row) => ({
        name: row[1],
        p1: parseInt(row[3]),
        p2: parseInt(row[4]),
        p3: parseFloat(row[5]),
        absences: parseInt(row[2]),
      }));

      // Calculates the average and checks the status of each student
      studentsData.forEach((student) => {
        const average = (student.p1 + student.p2 + student.p3) / 3;
        let status = "";

        if (student.absences >= 15) {
          status = "Reprovado por falta";
        } else if (average < 50) {
          status = "Reprovado por nota";
        } else if (average >= 50 && average < 70) {
          status = "Exame Final";
        } else {
          status = "Aprovado";
        }

        console.log(
          `${student.name}: Média = ${average.toFixed(1)}, Status = ${status}`
        );
      });
    } else {
      console.log("Nenhum dado encontrado.");
    }
  } catch (error) {
    console.error("Erro ao obter os dados da planilha:", error);
  }
}

getData();
