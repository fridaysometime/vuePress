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

2.  PS查看进程

   - grep是搜索关键字

   > ps -ef | grep java

   - -aux 显示所有状态

   > ps -aux | grep java

3.  kill杀掉进程

   - kill 命令用于终止进程
   - -9 强迫进程立即停止

   > kill -9 [PID]

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

   netstat -anp | grep 端口号

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
   whereis  locate(这两者是直接搜索数据库，速度快) find（搜索硬盘，速度较慢，但数据最齐全） which（用来搜索执行挡$Path设置的目录）
   which ls
   whereis file //找出file的位置
   locate file//查找所有目录下的文件
   find file//查看当前目录下的所有文件

8.  每天早上6点到12点，每隔2小时执行一次/usr/bin/httpd.sh怎么实现

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

10.  文档链接
    软连接：源文件消失，目的文件也消失
    硬连接： 其中一个修改，另一个也修改，但删除源文件时，目的文件不删除
    In file1 file2 //建立file1的链接，命名为file2
    In -s file1 file2 //建立file1的软连接

11. 管道

    **管道就是将前一个命令的 标准输出 作为后一个命令的 标准输入。**







