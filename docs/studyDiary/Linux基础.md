## Linux基础

1. 10个linux命令

   - ls 查看目录中的文件
   - cd /home 进入 '/ home' 目录；cd .. 返回上一级目录；cd ../.. 返回上两级目录
   - mkdir dir1 创建一个叫做 'dir1' 的目录
   - rmdir dir1 删除一个叫做 'dir1' 的目录 （只能删除空目录）
   - rm -f file1 删除一个叫做 'file1' 的文件'，-f 参数，忽略不存在的文件，从不给出提示。
   - rm -rf /mulu 目录下面文件以及子目录下文件
   - cp /test1/file1 /test3/file2 如将/test1目录下的file1复制到/test3目录，并将文件名改为file2
   - mv /test1/file1 /test3/file2 如将/test1目录下的file1移动到/test3 目录，并将文件名改为file2
   - mv * ../ Linux当前目录所有文件移动到上一级目录
   - ps -ef|grep xxx 显示进程pid
   - kill 使用kill命令来终结进程。先使用ps命令找到进程id，使用kill -9命令，终止进程。
   - tar –xvf file.tar 解压 tar包
   - unzip file.zip 解压zip
   - unrar e file.rar 解压rar
   - free -m 查看服务器内存使用情况

2. PS查看进程

   * 显示所有进程

     ps -aux

   - grep是搜索关键字

   > ps -ef | grep java

   - -aux 显示所有状态

   > ps -aux | grep java

3. kill杀掉进程

   kill命令是通过发送信号给进程达到中断的目的

   - kill 命令用于终止进程
   - -9 强迫进程立即停止

   > kill -9 [PID]
   >
   > 发送的信号是：SIGKILL，相当于exit，不能被捕捉或忽略，所以会立即杀死进程
   >
   > **kill -11**：发送的信号是：SIGTERM，当进程接受到这个信号后，大部分会释放自己的资源，然后再停止。但是有一部分，接收到信号以后，可以不立即停止，例如如果正在等待IO，则不会立即作出响应。所以SIGTERM信号会被阻塞、忽略

4. 启动服务

   ./start.sh

5. 查看日志

   tail -f xx.out

   vi 文件名 #编辑方式查看，可修改
   cat 文件名 #显示全部文件内容
   more 文件名 #分页显示文件内容
   less 文件名 #与 more 相似，更好的是可以往前翻页
   tail 文件名 #仅查看尾部，还可以指定行数
   head 文件名 #仅查看头部,还可以指定行数

6. 查看端口号

   使用什么命令查看网络是否连通---netstat

   netstat -anp | grep 端口号

   linux 中查看监听网络端口命令:netstat -a

7. find查找文件

   如果知道一个文件名称，怎么查这个文件在linux下的哪个目录，如：要查找tnsnames.ora文件

   > find / -name tnsnames.ora

   find / -name httpd.conf　　#在根目录下查找文件httpd.conf，表示在整个硬盘查找
   find /etc -name httpd.conf　　#在/etc目录下文件httpd.conf
   find /etc -name '*srm*'　　#使用通配符*(0或者任意多个)。表示在/etc目录下查找文件名中含有字符串‘srm’的文件find . -name 'srm*' 　　#表示当前目录下查找文件名开头是字符串‘srm’的文件

   按照文件特征查找 　　　　
   find / -amin -10 　　# 查找在系统中最后10分钟访问的文件(access time)
   find / -atime -2　　 # 查找在系统中最后48小时访问的文件
   find / -empty 　　# 查找在系统中为空的文件或者文件夹
   find / -group cat 　　# 查找在系统中属于 group为cat的文件
   find / -mmin -5 　　# 查找在系统中最后5分钟里修改过的文件(modify time)
   find / -mtime -1 　　#查找在系统中最后24小时里修改过的文件
   find / -user fred 　　#查找在系统中属于fred这个用户的文件
   find / -size +10000c　　#查找出大于10000000字节的文件(c:字节，w:双字，k:KB，M:MB，G:GB)
   find / -size -1000k 　　#查找出小于1000KB的文件

   linux文档的搜索
   whereis  locate(这两者是直接搜索数据库，速度快)

   find（搜索硬盘，速度较慢，但数据最齐全） which（用来搜索执行挡$Path设置的目录）
   which ls
   whereis file //找出file的位置
   locate file//查找所有目录下的文件
   find file//查看当前目录下的所有文件

8. 每天早上6点到12点，每隔2小时执行一次/usr/bin/httpd.sh怎么实现

   答：crontab -e 然后添加一行

   0 6，8，10，12 * * * /bin/bash /usr/bin/httpd.sh

9. Linux的文件系统目录配置

   ​	/home  每个账号在该目录下都有一个文件夹，进行数据的管理
   ​        /usr 有点像windows的program files和winNT结合的目录，主要包括系统的主要程序、本机端额外安装的软件、图形接口所需要的文档、额外的函数库、共享目录与文件等
   ​        /bin  /usr/bin  /usr/local/bin 存放执行挡  如可执行的指令等
   ​        /boot 存放linux开机会用到的文件
   ​        /dev 存放linux的任何装置和接口设备文档
   ​        /etc 存放系统设定文档 如账号密码文件、各种服务的起始档等
   ​        /lib  /usr/lib /usr/local/lib 系统使用的函数库放置的目录
   ​        /mnt /media 是软盘和光盘预设挂载点的地方
   ​        /opt 主机额外安装软件所摆放的目录
   ​        /proc 该目录是一个虚拟档案系统，他放置的数据都是在内存中，所         以本身不占用任何的硬盘空间
   ​        /root 系统管理员的家目录
   ​        /sbin  /usr/sbin  /usr/local/sbin 放置一些只有系统管理员才能动用          的执行指令
   ​        /srv 一些服务启动之后，这些服务所需要取用的数据目录
   ​        /tmp 让一般使用者或者正在执行的程序暂时放置档案的地方
   ​        /var  主要针对系统执行过程中，常态性变动档案放置的目录
   文档的路径有：绝对路径 (absolute) 与相对路径 (relative)。
   绝对路径为：由根目录 (/) 开始写起的文件名或目录名称
   相对路径为相对于目前路径的文件名写法。 ./表示相对当前路径，../表示相对于上一级目录的路径，~代表home目录，~account代表当前账号的home目录）

10. 文档链接
    软连接：源文件消失，目的文件也消失
    硬连接： 其中一个修改，另一个也修改，但删除源文件时，目的文件不删除
    In file1 file2 //建立file1的链接，命名为file2
    In -s file1 file2 //建立file1的软连接

11. 管道

    **管道就是将前一个命令的 标准输出 作为后一个命令的 标准输入。**

    管道是一种通信机制，通常用于进程间的通信（也可通过socket进行网络通信），它表现出来的形式将前面每一个进程的输出（stdout）直接作为下一个进程的输入（stdin）。

    管道命令使用`|`作为界定符号，管道命令与上面说的连续执行命令不一样

    常用：tail -1000f catalina.out|grep keyword

12. 创建文件

    典型的如 touch，vi 也可以创建文件，其实只要向一个不存在的文件输出，都会创建文件

13. 权限修改

     chmod

    chmodu+xfile给file的属主增加执行权限chmodu+xfile给file的属主增加执行权限 chmod 751 file 给 file 的属主分配读、写、执行(7)的权限，给 file 的所在组分配读、执行(5)的权限，给其他用户分配执行(1)的权限
    chmodu=rwx,g=rx,o=xfile上例的另一种形式chmodu=rwx,g=rx,o=xfile上例的另一种形式 chmod =r file 为所有用户分配读权限
    chmod444file同上例chmod444file同上例 chmod a-wx,a+r file同上例
    $ chmod -R u+r directory 递归地给 directory 目录下所有文件和子目录的属主分配读的权限

    chmod 777 a.txt 修改文件
    chmod -R 777 hello 修改目录

14. 用什么命令对一个文件的内容进行统计？(行号、单词数、字节数)

    wc 命令 - c 统计字节数 - l 统计行数 - w 统计字数。

15. 怎么使一个命令在后台运行

    一般都是使用 & 在命令结尾来让程序自动运行。(命令后可以不追加空格)

16. 使用什么命令查看 ip 地址及接口信息

    ifconfig

17. awk

    awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。

    awk是一种编程语言，用于对文本和数据进行处理的

    具有强大的**文本格式化**能力

    利用命令awk，可以将一些文本整理成为我们想要的样子

    命令awk是**逐行**进行处理的

    * 对比

      *  命令grep，更适合单纯的查找或匹配文本

      * 命令sed，更适合对匹配到的文本进行编辑

      * 命令awk，更适合文本格式化，对文本进行较复杂的格式处理

    最简单的例子：

    awk -F: '{print $1,$2}' test.txt

    -F:用于指定舒服的分隔符

    打印出文件中，以：分割的文笔

18. 网络连通性：

    ping

19. 查看日期

    date

20. 查看当前用户

    whoami

21. 切换用户

    su

    sudo su -切换到root用户

22. 如何在性能测试的时候查看进程

    top

    iostat查看CUP和各设备IO使用率

    vmstat查看内存使用情况

23. Sed

    如何替换一个文件中的字符串

    ```
    sed  's/原字符串/替换字符串/' 目录名
    例如；sed  'aaa/bbb'  test.txt // 将test.txt中'aaa'替换成'bbb'
    ```

24. ![img](https://images2015.cnblogs.com/blog/1030344/201703/1030344-20170316201635260-959773941.png)

25. linux修改密码命令

    passwd

26. 如何找到一个文件中含有aaa 和 bbb和行

    ```
    grep 'aaa' *.txt|xargs grep 'bbb' 
    ```











