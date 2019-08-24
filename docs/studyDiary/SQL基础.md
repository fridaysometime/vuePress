---
title: SQL基础 
date: 2019-03-04
tags: 
- SQL
---

::: tip
SQL 的基础使用，增删改查
:::
<!--more -->

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

### SQL的索引

一般的应用系统，读写比例在10:1左右，而且插入操作和一般的更新操作很少出现性能问题，在生产环境中，我们遇到最多的，也是最容易出问题的，还是一些复杂的查询操作，因此对查询语句的优化显然是重中之重。说起加速查询，就不得不提到索引了；

索引在MySQL中也叫做“键”，是存储引擎用于快速找到记录的一种数据结构。索引对于良好的性能
非常关键，尤其是当表中的数据量越来越大时，索引对于性能的影响愈发重要。
索引优化应该是对查询性能优化最有效的手段了。索引能够轻易将查询性能提高好几个数量级。

1. 索引的原理：索引的目的在于提高查询效率，与我们查阅图书所用的目录是一个道理：先定位到章，然后定位到该章下的一个小节，然后找到页数。相似的例子还有：查字典，查火车车次，飞机航班等

   **本质都是：通过不断地缩小想要获取数据的范围来筛选出最终想要的结果，同时把随机的事件变成顺序的事件，也就是说，有了这种索引机制，我们可以总是用同一种查找方式来锁定数据。**

### MYSQL的索引管理

1. 功能

   索引的功能就是加速查找，primary key ,unique,联合唯一也都是索引

2. 分类

   ```
   普通索引index :加速查找
   主键索引：primary key ：加速查找+约束（不为空且唯一）
   唯一索引：unique：加速查找+约束 （唯一）
   联合索引
       -primary key(id,name):联合主键索引
       -unique(id,name):联合唯一索引
       -index(id,name):联合普通索引
   ```

3. 索引的两大类型

   hash和btree

   ```
   hash类型的索引：查询单条快，范围查询慢
   btree类型的索引：b+树，层数越多，数据量指数级增长（我们就用它，因为innodb默认支持它）
   不同的存储引擎支持的索引类型也不一样
   ```

4. 创建索引

   * 建表的时候创建

   * 建表后创建：

     ```
     create index name on s1(name); #添加普通索引
     create unique age on s1(age);添加唯一索引
     alter table s1 add primary key(id); #添加住建索引，也就是给id字段增加一个主键约束
     create index name on s1(id,name); #添加普通联合索引
     ```



5. 并不是有索引就能提高查询速度，也分情况
6. 读取查询一个百万计数据库该怎么办，读取前十条指令

![[æç"´å¯¼å¾-ç´¢å¼ç¯]](http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-2/70973487.jpg)



### MySQL例题

创建表

```python
创建表

1、创建student和score表

create or replace table employees(

empID  INT(10)  NOT NULL  UNIQUE  PRIMARY KEY  ,

empName  VARCHAR(20)  NOT NULL , #姓名

sex  VARCHAR(4)  , #性别

birth  date, #出生日期

deptID  INT(20) , #部门编码

jobs VARCHAR(20) , #工作岗位

firJob date,  #开始工作的日期

hiredate date,#开始工作的日期

politicalStatus  VARCHAR(20) ,  # 政治面貌

leader  INT(10) #领导编码

);

create or replace table salary(

sid  INT(10)  NOT NULL  UNIQUE  PRIMARY KEY  ,

empID INT(10) not null,

salary INT(10) not null,#工资

lastedit date #上次调薪日期

);

create or replace table departments(

deptid  INT(10)  NOT NULL  UNIQUE  PRIMARY KEY  ,

deptname VARCHAR(20) not null,#部门名称

faterdeptid INT(10)   # 上级部门编码

);
```

**问题列表**

**单表查询**

1. 显示所有职工的基本信息

   select * from employees

2. 查询所有职工所属部门的部门号，不显示重复的部门号

   select distinct e.deptID from employees e

3. 求出所有职工的人数

   select count(1) from employees

4. 列出最高工和最低工资

   select max(s.salary) as '最高工资',min(s.salary) as '最低工资' from salary s

5. 列出职工的平均工资和总工资

   select AVG(s.salary) as '平均工资',SUM(s.salary) as '总工资' from salary s 

6. 显示所有女职工的年龄

   select e.empID, e.empName, (DATEDIFF(CURDATE(),e.birth) DIV 365) as '年龄' from employees e where e.sex = '女';

7. 列出所有姓刘的职工的职工号、姓名和出生日期

   select e.empID,e.empName,e.birth from employees e where e.empName like '刘%'

8. 列出1990年以前出生的职工的姓名、参加工作日期

   select e.empName,e.firJob from employees e where YEAR(e.firJob)<1990

9. 列出总人数大于4的部门号和总人数

   select e.deptID, count(1) from employees e group by e.deptID having count(1)>4

10. 列出所有陈姓和李姓的职工姓名

    select e.empName  from employees e  where e.empName like'张%' or e.empName like'李%'

11. 列出所有部门号为1002和1003的职工号、姓名

    select e.empID, e.empName  from employees e  where e.deptID in (1002,1003);

12. 将职工表worker中的职工按出生的先后顺序排序

    select * from employees e order by e.birth asc

13. 求出各部门党员的人数

    select e.deptID,count(1) from employees e  where e.politicalStatus = '党员' GROUP BY e.deptID

**多表查询**

1、列出每名职工的职工号、姓名和部门名。 

select e.empID, e.empName, d.deptname  from employees e,departments d  where e.deptID = d.deptid

2、列出市场部的所有女职工的姓名和政治面貌。 

select e.empName,e.politicalStatus,d.deptname from employees e,departments d where e.deptID = d.deptid and  e.sex= '女' and d.deptname = '市场部'

3、显示所有职工的姓名、部门名和工资数。 

select e.empName,d.deptname,s.salary from employees e LEFT JOIN departments d on e.deptID = d.deptid LEFT JOIN salary s on e.empID = s.empID 

4、显示所有职工的职工号、姓名、部门名和工资，并按部门名顺序排列。 

select e.empid, e.empName,d.deptname,s.salary  from employees e LEFT JOIN departments d on e.deptID = d.deptid LEFT JOIN salary s on e.empID = s.empID ORDER BY e.deptID

5、显示各部门名和该部门的所有职工平均工资。 

SELECT d.deptname, AVG(s.salary)  from  departments d LEFT JOIN employees e on d.deptid = e.deptID LEFT JOIN salary s on e.empID = s.empID GROUP BY d.deptname 

6、显示所有平均工资高于1200的部门名和对应的平均工资。 

SELECT d.deptname, AVG(s.salary)  from  departments d LEFT JOIN employees e on d.deptid = e.deptID LEFT JOIN salary s on e.empID = s.empID GROUP BY d.deptname  having AVG(s.salary)>1200

7、查询刘欣所在的部门。 

select d.deptname from employees e, departments d  where e.deptID = d.deptid  and e.empName = '刘欣'

8、查询部门名为财务处的职工的情况。 

select * from employees e,departments d where e.deptID = d.deptid and d.deptname ='财务处'

9、列出工资在1000－2000之间的所有职工姓名。 

select e.empName,s.salary from salary s,employees e where s.salary between 1000 and 2000 and s.empID = e.empID

10、显示工资最高的前3名职工的职工号和姓名。

select e.empID, e.empName from salary s, employees e where s.empID = e.empID ORDER BY s.salary desc LIMIT 3