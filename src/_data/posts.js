const mysql = require('mysql2/promise');

// Set these variables using `netlify env:set DB_NAME "Database Name" etc.`
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = async function() {
	console.log('Getting posts...');
	let posts = [];

	const connection = await mysql.createConnection({
		host     : DB_HOST,
		user     : DB_USER,
		password : DB_PASSWORD,
		database : DB_NAME,
    ssl : {
      rejectUnauthorized: false
    }
	});

	const [rows] = await connection.execute('SELECT id, title, body, published FROM posts ORDER BY published DESC');

	for (let i = 0; i < rows.length; i++) {
		console.log(rows[i].title);
		posts.push({
			id    :rows[i].id,
			title     : rows[i].title,
			body      : Buffer.from(rows[i].body, 'binary').toString(),
			published : rows[i].published
		});
	}

	connection.end();
	console.log("Got " + posts.length + " posts");

	return posts;
}
