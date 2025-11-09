const data = await db.collection('students').find().sort({ marks: -1 }).toArray();
console.log(data);
