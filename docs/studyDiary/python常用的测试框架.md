### python常用的测试框架

#### unittest

1. 核心工作原理

   unittest中最核心的四个概念是：test case, test suite, test runner, test fixture。

   下面我们分别来解释这四个概念的意思，先来看一张unittest的静态类图（下面的类图以及解释均来源于网络，[原文链接](http://www.cnblogs.com/hackerain/p/3682019.html)）：

   ![unittest类图](http://img.blog.csdn.net/20161026164739484)

- 一个TestCase的实例就是一个测试用例。什么是测试用例呢？就是一个完整的测试流程，包括测试前准备环境的搭建(setUp)，执行测试代码(run)，以及测试后环境的还原(tearDown)。元测试(unit test)的本质也就在这里，一个测试用例是一个完整的测试单元，通过运行这个测试单元，可以对某一个问题进行验证。
- 而多个测试用例集合在一起，就是TestSuite，而且TestSuite也可以嵌套TestSuite。
- TestLoader是用来加载TestCase到TestSuite中的，其中有几个loadTestsFrom__()方法，就是从各个地方寻找TestCase，创建它们的实例，然后add到TestSuite中，再返回一个TestSuite实例。
- TextTestRunner是来执行测试用例的，其中的run(test)会执行TestSuite/TestCase中的run(result)方法。 
  测试的结果会保存到TextTestResult实例中，包括运行了多少测试用例，成功了多少，失败了多少等信息。
- 而对一个测试用例环境的搭建和销毁，是一个fixture。

一个class继承了unittest.TestCase，便是一个测试用例，但如果其中有多个以 `test` 开头的方法，那么每有一个这样的方法，在load的时候便会生成一个TestCase实例，如：一个class中有四个test_xxx方法，最后在load到suite中时也有四个测试用例。

到这里整个流程就清楚了：

写好TestCase，然后由TestLoader加载TestCase到TestSuite，然后由TextTestRunner来运行TestSuite，运行的结果保存在TextTestResult中，我们通过命令行或者unittest.main()执行时，main会调用TextTestRunner中的run来执行，或者我们可以直接通过TextTestRunner来执行用例。这里加个说明，在Runner执行时，默认将执行结果输出到控制台，我们可以设置其输出到文件，在文件中查看结果（你可能听说过HTMLTestRunner，是的，通过它可以将结果输出到HTML中，生成漂亮的报告，它跟TextTestRunner是一样的，从名字就能看出来，这个我们后面再说）。



2. 结果说明

   * 在第一行给出了每一个用例执行的结果的标识，成功是 `.`，失败是 `F`，出错是 `E`，跳过是 `S`。从上面也可以看出，测试的执行跟方法的顺序没有关系，test_divide写在了第4个，但是却是第2个执行的。（没有编写成testsuite）

   * 每个测试方法均以 `test` 开头，否则是不被unittest识别的。

   * 在unittest.main()中加 `verbosity` 参数可以控制输出的错误报告的详细程度，默认是 `1`，如果设为 `0`，则不输出每一用例的执行结果，即没有上面的结果中的第1行；如果设为 `2`，则输出详细的执行结果

3. 组织testSuite

   我们怎么控制用例执行的顺序呢？（这里的示例中的几个测试方法并没有一定关系，但之后你写的用例可能会有先后关系，需要先执行方法A，再执行方法B），我们就要用到TestSuite了。我们添加到TestSuite中的case是会按照添加的顺序执行的

4. test fixture之setUp() tearDown()

   如果我的测试需要在每次执行之前准备环境，或者在每次执行完之后需要进行一些清理怎么办？比如执行前需要连接数据库，执行完成之后需要还原数据、断开连接。总不能每个测试方法中都添加准备环境、清理环境的代码吧；

   我们添加了 `setUp()` 和 `tearDown()` 两个方法（其实是重写了TestCase的这两个方法），这两个方法在每个测试方法执行前以及执行后执行一次，setUp用来为测试准备环境，tearDown用来清理环境，已备之后的测试；

   可以看到setUp和tearDown在每次执行case前后都执行了一次。

   如果想要在所有case执行之前准备一次环境，并在所有case执行结束之后再清理环境，我们可以用 `setUpClass()` 与 `tearDownClass()`:

5. 跳过某个case 

   如果我们临时想要跳过某个case不执行怎么办？unittest也提供了几种方法：

   * skip装饰器

6. 输出报告

   用HTMLTestRunner输出漂亮的HTML报告

   我们能够输出txt格式的文本执行报告了，但是文本报告太过简陋，是不是想要更加高大上的HTML报告？但unittest自己可没有带HTML报告，我们只能求助于外部的库了。

   HTMLTestRunner是一个第三方的unittest HTML报告库

7. 总结

   1. unittest是Python自带的单元测试框架，我们可以用其来作为我们自动化测试框架的用例组织执行框架。
   2. unittest的流程：写好TestCase，然后由TestLoader加载TestCase到TestSuite，然后由TextTestRunner来运行TestSuite，运行的结果保存在TextTestResult中，我们通过命令行或者unittest.main()执行时，main会调用TextTestRunner中的run来执行，或者我们可以直接通过TextTestRunner来执行用例。
   3. 一个class继承unittest.TestCase即是一个TestCase，其中以 `test` 开头的方法在load时被加载为一个真正的TestCase。
   4. verbosity参数可以控制执行结果的输出，`0` 是简单报告、`1` 是一般报告、`2` 是详细报告。
   5. 可以通过addTest和addTests向suite中添加case或suite，可以用TestLoader的loadTestsFrom__()方法。
   6. 用 `setUp()`、`tearDown()`、`setUpClass()`以及 `tearDownClass()`可以在用例执行前布置环境，以及在用例执行后清理环境
   7. 我们可以通过skip，skipIf，skipUnless装饰器跳过某个case，或者用TestCase.skipTest方法。
   8. 参数中加stream，可以将报告输出到文件：可以用TextTestRunner输出txt报告，以及可以用HTMLTestRunner输出html报告。

   #### pytest

   1. 优点

      - 允许直接使用assert进行断言，而不需要使用self.assert*;
      - 可以自动寻找单测文件、类和函数;
      - 简单灵活，容易上手
      - 支持参数化
      - 能够支持简单的单元测试和复杂的功能测试，还可以用来做selenium/appnium等自动化测试、接口自动化测试（pytest+requests）
      - 可以很好的和jenkins集成
      - Modular fixtures可以用于管理小型或参数化的测试信息;
      - 与unittest和nose单测框架兼容;
      - 兼容性较好，支持Python 2.7，Python 3.4+。
      - 丰富的插件支持，共计有超过315个插件支持;
        - pytest-django: 针对Django框架的单测框架
        - pytest-twisted: 针对twisted框架的单测框架
        - pytest-cov: 产生覆盖率报告
        - pytest-instafail: 发送错误时报告错误信息
        - pytest-bdd 测试驱动开发工具
        - pytest-konira 测试驱动开发工具
        - pytest-timeout: 支持超时功能
        - pytest-pep8: 支持PEP8检查
        - pytest-flakes: 结合pyflakes进行代码检查

   2. 测试文件名必须以“test_”开头

   3. 测试类以Test开头，并且不能带有 init 方法

   4. 测试方法必须以“test_”开头

   5. 除了有setup/teardown，还能更自由的定义fixture装载测试用例

   6. pytest装饰器

      * ##### setup 与 teardown

        ##### 装载运行级别：

        - 模块级（setup_module/teardown_module）开始于模块始末
        - 类级（setup_class/teardown_class）只在类中前后运行一次(在类中)
        - 方法级（setup_method/teardown_method）开始于方法始末（在类中）
        - 类里面的（setup/teardown）运行在调用方法的前后
        - 函数级（setup_function/teardown_function）只对函数用例生效（不在类中）

      * fixture

        * 做测试前后的初始化设置，如测试数据准备，链接数据库，打开浏览器等这些操作都可以使用fixture来实现

        * 测试用例的前置条件可以使用fixture实现

        * 支持经典的xunit fixture ，像unittest使用的setup和teardown

        * fixture可以实现unittest不能实现的功能，比如unittest中的测试用例和测试用例之间是无法传递参数和数据的，但是fixture却可以解决这个问题

        * 上面所有的实例默认都是函数级别的，所以测试函数只要调用了fixture，那么在测试函数执行前都会先指定fixture。说到作用范围就不得不说fixture 的第二个参数scope参数。

          scope参数可以是session， module，class，function； 默认为function

          1.session 会话级别（通常这个级别会结合conftest.py文件使用，所以后面说到conftest.py文件的时候再说）

          2.module 模块级别： 模块里所有的用例执行前执行一次module级别的fixture

          3.class 类级别 ：每个类执行前都会执行一次class级别的fixture

          4.function ：前面实例已经说了，这个默认是默认的模式，函数级别的，每个测试用例执行前都会执行一次function级别的fixture

      * 自动生成报告

        ```python
        pytest -v test_1.py --junitxml=Path
        ```

      



