---
title: mysql
date: 2023-05-31 16:34:32
permalink: /pages/c0e587/
categories:
  - pages
  - Server
  - Mysql
tags:
  - 
---
# mysql

## 01-启动mysql

- net start mysql
- 进入：mysql -u root -p

## 02-DDL-数据库操作 127619

- 查询
  - 查询所有数据库`SHOW DATABASES;`
  - 查询当前数据库`SELECT DATABASE();`
- 创建
  - `CREATE DATABASE 数据库名`
  - `CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];`
- 删除
  - `DROP DATABASE [IF EXISTS] 数据库名;`
- 使用
  - `USE 数据库名;`

## 03-DDL-表操作

- 查询

  - 当前数据库的所有表 `SHOW TABLES;`
  - 查询表结构 `DESC 表名;`
  - 查询指定表的建表语句`SHOW CREATE TABLE 表名;`

- 创建表

  ```sql
  CREATE TABLE 表名(
  	字段1 字段1类型 [COMMENT 字段1注释]， 
  	字段2 字段2类型 [COMMENT 字段2注释]
  )[COMMENT 表注释];
  alter table emp change nickname tickname varchar(10);
  ```
  
- 添加

  - 添加字段 `ALTER TABLE 表名 ADD 字段名 类型 [COMMENT 注释][约束];`

- 修改

  - 修改数据类型 `ALTER TABLE 表名 MODIFY 字段名 新数据类型 ;`
  - 修改字段名和字段类型 `ALTER TABLE 表名 CHANGE  旧字段名 新字段名 类型 [COMMENT 注释];`

- 删除

  - 删除字段 `ALTER TABLE 表名 DROP 字段名;`

- 修改表名

  - `ALTER TABLE 表名 RENAME TO 新表名;`

- 删除表

  - `DROP TABLE IF EXISTS 表名;`
  - 删除指定表 并重新创建该表`TRUNCATE TABLE 表名;`

## 04-DML-添加数据

- 添加数据
  - 给指定字段添加数据 `insert into 表名 (字段1，字段2...) values (值1，值2...)`
  - 给全部字段添加数据 `insert into 表名 values (值1，值2)`
  - 批量添加数据 
    - `insert into 表名 （字段1，字段2...） values (值1，值2...)，(值1，值2...)`
    - `insert into 表名 values (值1，值2...)，(值1，值2...)`
- 更新数据
  - 注意：修改语句的条件可以有，也可以没有，如果没有条件，则会修改整张表的所有数据
  - `UPDATE SET 表名 字段1=值1，字段2=值2...[WHERE 条件]`
- 删除数据
  - `DELETE FROM 表名 [WHERE 条件]`

## 05-DQL-查询语句

- 查询多个字段
  - SELECT 字段，字段2... FROM 表名；
  - SELECT * FROM 表名；
  - 设置别名 SELECT 字段1 [as 别名1],字段2 [别名2]... FROM 表名；
  - 不要重读的SELECT DISTINCT name FROM 表名 ；
-  聚合函数（null值不参与所有聚合函数运算）
  - count 统计梳理
  - max 最大值   min最小值  avg平均值  sum求和
  - SELECT 聚合函数(字段列表) from 表名；

## 06-约束

| **约束** | **描述**                                         | **关键字**  |
| -------- | ------------------------------------------------ | ----------- |
| 非空约束 | 限制该字段值不能为null                           | not null    |
| 唯一约束 | 保证字段的所有数据都是唯一、不重复的             | unique      |
| 主键约束 | 主键是一行数据的唯一标识，要求非空且唯一         | primary key |
| 默认约束 | 保存数据时，如果未指定该字段值，则采用默认值     | default     |
| 外键约束 | 让两张表的数据建立连接，保证数据的一致性和完整性 | foreign key |

## 07-数据类型

- MySQL中的数据类型有很多，主要分为三类：数值类型、字符串类型、日期时间类型。
- 数值类型

| 类型        | 大小   | 有符号(SIGNED)范围                                    | 无符号(UNSIGNED)范围                                       | 描述               |
| ----------- | ------ | ----------------------------------------------------- | ---------------------------------------------------------- | ------------------ |
| TINYINT     | 1byte  | (-128，127)                                           | (0，255)                                                   | 小整数值           |
| SMALLINT    | 2bytes | (-32768，32767)                                       | (0，65535)                                                 | 大整数值           |
| MEDIUMINT   | 3bytes | (-8388608，8388607)                                   | (0，16777215)                                              | 大整数值           |
| INT/INTEGER | 4bytes | (-2147483648，2147483647)                             | (0，4294967295)                                            | 大整数值           |
| BIGINT      | 8bytes | (-2^63，2^63-1)                                       | (0，2^64-1)                                                | 极大整数值         |
| FLOAT       | 4bytes | (-3.402823466 E+38，3.402823466351 E+38)              | 0 和 (1.175494351  E-38，3.402823466 E+38)                 | 单精度浮点数值     |
| DOUBLE      | 8bytes | (-1.7976931348623157 E+308，1.7976931348623157 E+308) | 0 和  (2.2250738585072014 E-308，1.7976931348623157 E+308) | 双精度浮点数值     |
| DECIMAL     |        | 依赖于M(精度)和D(标度)的值                            | 依赖于M(精度)和D(标度)的值                                 | 小数值(精确定点数) |

- 字符串类型

| 类型       | 大小                  | 描述                         |
| ---------- | --------------------- | ---------------------------- |
| CHAR       | 0-255 bytes           | 定长字符串(需要指定长度)     |
| VARCHAR    | 0-65535 bytes         | 变长字符串(需要指定长度)     |
| TINYBLOB   | 0-255 bytes           | 不超过255个字符的二进制数据  |
| TINYTEXT   | 0-255 bytes           | 短文本字符串                 |
| BLOB       | 0-65 535 bytes        | 二进制形式的长文本数据       |
| TEXT       | 0-65 535 bytes        | 长文本数据                   |
| MEDIUMBLOB | 0-16 777 215 bytes    | 二进制形式的中等长度文本数据 |
| MEDIUMTEXT | 0-16 777 215 bytes    | 中等长度文本数据             |
| LONGBLOB   | 0-4 294 967 295 bytes | 二进制形式的极大文本数据     |
| LONGTEXT   | 0-4 294 967 295 bytes | 极大文本数据                 |

- 日期时间类型

| 类型      | 大小 | 范围                                       | 格式                | 描述                     |
| --------- | ---- | ------------------------------------------ | ------------------- | ------------------------ |
| DATE      | 3    | 1000-01-01 至  9999-12-31                  | YYYY-MM-DD          | 日期值                   |
| TIME      | 3    | -838:59:59 至  838:59:59                   | HH:MM:SS            | 时间值或持续时间         |
| YEAR      | 1    | 1901 至 2155                               | YYYY                | 年份值                   |
| DATETIME  | 8    | 1000-01-01 00:00:00 至 9999-12-31 23:59:59 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值         |
| TIMESTAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值，时间戳 |

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

- WHERE 限定选择的标准

  | **比较运算符**       | **功能**                                 |
  | -------------------- | ---------------------------------------- |
  | >                    | 大于                                     |
  | >=                   | 大于等于                                 |
  | <                    | 小于                                     |
  | <=                   | 小于等于                                 |
  | =                    | 等于                                     |
  | <> 或 !=             | 不等于                                   |
  | between ...  and ... | 在某个范围之内(含最小、最大值)           |
  | in(...)              | 在in之后的列表中的值，多选一             |
  | like 占位符          | 模糊匹配(_匹配单个字符, %匹配任意个字符) |
  | is null              | 是null                                   |

  常用的逻辑运算符如下:

  | **逻辑运算符** | **功能**                    |
  | -------------- | --------------------------- |
  | and 或 &&      | 并且 (多个条件同时成立)     |
  | or 或 \|\|     | 或者 (多个条件任意一个成立) |
  | not 或 !       | 非 , 不是                   |

- 1. AND 和 OR 运算符

  ```sql
  AND 表示必须同时满足多个条件
  OR  表示只要满足任意一个条件即可
  
  SELECT * FROM users WHERE status=0 AND id<3
  ```

- 2. ORDER BY 升序 降序

  ```SQL
  升序
  SELECT * FROM users ORDER BY id ASC
  
  降序
  SELECT * FROM users ORDER BY id DESC
  ```

  ```mysql
  SELECT COUNT(*) FROM usrs
  ```

- 3. between and区间查询

  ```mysql
  select 字段 from users where entrydate between '2000-01-01' and '2023-01-01';
  ```

- 4. in 包含

  ```mysql
  select id,name from users wheres job in(2,3,4);
  ```

- 5. 查询姓名为两个字的信息

  ```mysql
  select name from users where name like '__';
  
  查询张开头的员工信息
  
  select name from users where name like '张%';
  ```

  常用聚合函数：

  | **函数** | **功能** |
  | -------- | -------- |
  | count    | 统计数量 |
  | max      | 最大值   |
  | min      | 最小值   |
  | avg      | 平均值   |
  | sum      | 求和     |

- 1. COUNT(\*) 返回总数据条数

  ```mysql
  SELECT COUNT(*) FROM usrs
  ```

- 2. limit 分页

  ```mysql
  select * from users limit 0,5;
  
  计算公式：起始索引 = （查询页码 - 1） * 每页显示记录数
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
