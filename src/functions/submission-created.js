const mysql = require('mysql2/promise');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;

exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)

	const connection = await mysql.createConnection({
		host     : DB_HOST,
		user     : DB_USER,
		password : DB_PASSWORD,
		database : DB_NAME,
    ssl : {
      rejectUnauthorized: false
    }
	});

  const sql = "INSERT INTO subscribers (email) VALUES (?)";

  // Use this line to really update data in PlanetScale (or elsewhere)
  // const result = await connection.execute(sql, [email]);
  // Or this line to fake success!
  const result = [{affectedRows: 1}];

  if (result.length > 0 && result[0].affectedRows == 1) {
    // Success
    console.log("Added!")
    return {
      statusCode: 200,
      body: "Successfully subscribed!"
    }
  } else {
    // Failure
    console.log("Failed!")
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify(error),
    };
  }
}
