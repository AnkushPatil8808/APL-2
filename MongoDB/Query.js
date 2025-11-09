const res = await db.collection('students').find({ name: "Kunal" }).toArray();
console.log(res);
