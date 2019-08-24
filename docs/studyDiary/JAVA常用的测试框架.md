###  JAVA常用的测试框架

TestNG与JUnit的相同点 
1. 使用annotation，且大部分annotation相同。 
2. 都可以进行单元测试（Unit test）。 
3. 都是针对Java测试的工具。

TestNG与JUnit的不同点： 
1. JUnit只能进行单元测试，TestNG可以进行单元测试，功能测试，端到端测试，集成测试等。 
2. TestNG需要一个额外的xml配置文件，配置测试的class、method甚至package。 
3. TestNG的运行方式更加灵活：命令行、ant和IDE，JUnit只能使用IDE。 
4. TestNG的annotation更加丰富，比如@ExpectedExceptions、@DataProvider等。 
5. 测试套件运行失败，JUnit 4会重新运行整个测试套件。TestNG运行失败时，会创建一个XML文件说明失败的测试，利用这个文件执行程序，就不会重复运行已经成功的测试。

testng优点:

　　1.1 漂亮的HTML格式测试报告

　　1.2 支持并发测试

　　1.3 参数化测试更简单

　　1.4 支持输出日志

　　1.5 支持更多功能的注解

**TestNG常用注解：执行顺序如下**

@BeforeSuite > @BeforeTest > @BeforeMethod > @Test > @AfterMethod > @AfterTest > @AfterSuite

| @BeforeSuite  | 表示会在当前测试集合中的任意一个测试用例开始运行前执行 |
| ------------- | ------------------------------------------------------ |
| @AfterSuite   | 表示会在当前测试集合中的所有测试程序运行结束之后执行   |
| @BeforeTest   | 表示会在Test中的任意一个测试用例开始运行前执行         |
| @AfterTest    | 表示会在Test中的所有测试用例运行结束后执行             |
| @BeforeGroups | 分组测试用例的任一测试用例开始运行前执行               |
| @AfterGroups  | 分组测试用例的所有测试用例运行结束后执行               |
| @BeforeClass  | 在当前测试类的任意一个测试用例开始运行前执行           |
| @AfterClass   | 在当前测试类的所有测试用例运行结束后执行               |
| @BeforeMethod | 在每个测试方法开始运行前执行                           |
| @AfterMethod  | 在每个测试方法运行结束后执行                           |
| @Test         | 被认为是一个测试方法，既一个测试用例                   |

**如何创建TestNG测试集合**

测试集合：在自动化测试的执行过程中，通常会产生批量运行多个测试用例的需求，此需求称为运行测试集合（Test Suite）

TestNG的测试用例可以是相互独立的，也可以按照特定的顺序来执行（配置TestNG.xml）

配置testNG.xml文件---指定测试类和类中的测试方法

**依赖测试（dependsOnMethod）**

@Test(dependsOnMethod = {"方法名称"})

被依赖的方法优先于此方法执行

**特定顺序执行测试用例（priority）**

@Test(priority = 0/1/2/3/4/…)

按照数字大小顺序优先执行，优先执行1，然后是2…

**如何跳过某个测试方法（enabled = false）**

@Test(priority = 0/1… , enabled = false)

执行结束后，在测试报告中显示跳过的测试用例数，例如skip=1

**数据注解**

参数化测试（@Parameters-》通过xml文件从外部给测试方法传参）：<Parameter name="Type" value="chrome"/>  -》

**数据驱动**

（@DataProvider）

**测试报告中自定义日志（Reporter.log（“输入自定义内容”））**

　@Test(groups = {"人"})

　　public void student(){

　　　　System.out.println("学生方法被调用");

　　　　Reporter.log("学生方法自定义日志");

　　}



