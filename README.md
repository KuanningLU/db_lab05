# db_lab05
在crudExample.js加入
// 先查詢是否有這位學生
    const rows = await conn.query('SELECT * FROM STUDENT WHERE Student_ID = ?', [studentId]);

    if (rows.length === 0) {
      console.log('查無此人');
      return;
    }
