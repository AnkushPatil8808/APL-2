const result = await db.collection('students').find().toArray();
console.log(result);
