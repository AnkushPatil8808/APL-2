await db.collection('students').updateOne({ name: "Kunal" }, { $set: { marks: 90 } });
