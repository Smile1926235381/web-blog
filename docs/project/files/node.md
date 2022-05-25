# node

## 一.项目使用 mysql

- 1. 安装mysql模块  `npm install mysql`

- 2. 配置mysql模块

  ```js
  const mysql = require('mysql')
  
  // 1. 建立与mysql 数据库连接
  const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'student'
  })
  
  // 测试是否连接成功
  db.query('SELECT 1', (err, result) => {
    if (err) return console.log(err.message)
    console.log(result)  //[ RowDataPacket { '1': 1 } ]
  })
  ```

- 3. 查询数据

  ```js
  const selectSql = 'SELECT * FROM users'
  db.query(selectSql, (err, result) => {
    if (err) return console.log(err.message)
    console.log(result)
  })
  ```

- 4. 插入数据

  ```js
  // 1.需要插入的数据
  const user = {
    username: 'jack',
    password: '123456'
  }
  // 2.执行sql ?占位符
  const sqlStr = 'INSERT INTO users SET ?'
  
  db.query(sqlStr, user, (err, result) => {
    if (err) return console.log(err.message)
    if (result.affectedRows === 1) {
      console.log('插入数据成功')
    }
  })
  ```

- 5. 更新数据

  ```js
  const user = { id: 2, username: 'admin', password: 'admin123' }
  
  const sqlStr = 'UPDATE users SET ? WHERE id=?'
  
  db.query(sqlStr, [user, user.id], (err, result) => {
    if (err) return console.log(err.message)
  
    if (result.affectedRows === 1) {
      console.log('更新数据成功')
    }
  })
  ```

- 6. 删除数据

  ```js
  const sqlStr = 'DELETE FROM users WHERE id=?'
  
  db.query(sqlStr, 2, (err, result) => {
    if (err) return console.log(err.message)
    if (result.affectedRows === 1) {
      console.log('删除数据成功')
    }
  })
  ```

- 7. 标记删除

  ```js
  const sqlStr = 'UPDATE users SET isDelete=1 WHERE id=?'
  
  db.query(sqlStr, 1, (err, result) => {
    if (err) return console.log(err.message)
    if (result.affectedRows === 1) {
      console.log('删除数据成功')
    }
  })
  ```

- 8. 查询isDelete=1的数据

  ```js
  const sqlStr = 'SELECT * FROM users WHERE isDelete=?'
  
  db.query(sqlStr, 1, (err, result) => {
    if (err) return console.log(err.message)
    console.log(result)
  })
  ```

  

