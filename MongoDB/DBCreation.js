const db = client.db('studentDB');
await db.createCollection('students');
console.log("Collection Created!");
