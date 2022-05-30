# mysql

## mysql 基本语法

- 1. SELECT 从表中查询数据

  ```sql
  -- 表示注释

  -- 从from指定的表中，查询所有数据 *表示所有列
  SELECT * FROM 表名称

  -- 从from指定的表中 查询指定列名称数据，查询多个可以逗号分隔
  SELECT 列名称 FROM 表名称
  ```

- 2. INSERT INTO 向表中插入新的数据行

  ```sql
  INSERT INTO 表名 (列1,列2...) VALUES (值1,值2...)
  ```

- 3. UPDATE 修改表中数据

  ```sql
  UPDATE 表名 SET 列名称 = '新值' WHERE id = ?
  ```

- 4. DELETE 删除表中行

  ```
  DELETE FROM 表名 WHERE id = ?
  ```

- 5. WHERE 限定选择的标准

  ![](../images/calc.jpg)

- 6. AND 和 OR 运算符

  ```sql
  AND 表示必须同时满足多个条件
  OR  表示只要满足任意一个条件即可

  SELECT * FROM users WHERE status=0 AND id<3
  ```

- 7. ORDER BY 升序 降序

  ```SQL
  升序
  SELECT * FROM users ORDER BY id ASC

  降序
  SELECT * FROM users ORDER BY id DESC
  ```

- 8. COUNT(\*) 返回总数据条数

  ```
  SELECT COUNT(*) FROM usrs
  ```

## node 中使用 mysql

- 1. 安装 mysql 模块 `npm install mysql`

- 2. 配置 mysql 模块

  ```js
  const mysql = require('mysql')

  // 1. 建立与mysql 数据库连接
  const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'student',
  })

  // 测试是否连接成功
  db.query('SELECT 1', (err, result) => {
    if (err) return console.log(err.message)
    console.log(result) //[ RowDataPacket { '1': 1 } ]
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
    password: '123456',
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

- 8. 查询 isDelete=1 的数据

  ```js
  const sqlStr = 'SELECT * FROM users WHERE isDelete=?'

  db.query(sqlStr, 1, (err, result) => {
    if (err) return console.log(err.message)
    console.log(result)
  })
  ```
