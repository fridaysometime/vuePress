# SQL基础

## SQL

sql: 数据操作语言dml，数据定义语言ddl;

### SQL DML

* select
* update
* delete
* insert int

### SQL DDL

* create db
* alter db
* create table
* alter table
* drop table
* create index
* drop index



**常用-MySQL**

1. **top**:select  top number(percent) columns_name from table= select column_name from table limit number;
2. **like**: select column_name from table where column_name like '%x%';  (以X开始：'X%'; 以X结束：'%X'; 包含X：'%X%' ; 不包含：not like);
3. **in**: select column_name from table where column_name in (v1,v2...);
4. **BETWEEN **:SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2
5. **表的Alias**：
   SELECT column_name(s)
   FROM table_name
   AS alias_name
6. **列的Alias**：
     SELECT column_name AS alias_name
       FROM table_name
7. **inner join**:
     SELECT column_name(s)
       FROM table_name1
       INNER JOIN table_name2 
       ON table_name1.column_name=table_name2.column_name;

**functions**:

1. **group by**: 
   SELECT column_name, aggregate_function(column_name)
   FROM table_name
   WHERE column_name operator value
   GROUP BY column_name

   聚合函数以外的列都要在group by后面的列出现

2. **having**：在 SQL 中增加 HAVING 子句原因是，WHERE 关键字无法与合计函数一起使用；
   SELECT column_name, aggregate_function(column_name)
   FROM table_name
   WHERE column_name operator value
   GROUP BY column_name
   HAVING aggregate_function(column_name) operator value

```
---
title: SQL基础  
date: 2019-03-04
tags:
- SQL
---
```





