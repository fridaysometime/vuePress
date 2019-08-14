## cookie 和 session



1. cookie和session的原理

   cookie采用的是客户端的会话状态的一种储存机制。它是服务器在本地机器上存储的小段文本或者是内存中的一段数据，并随每一个请求发送至同一个服务器。

   

   session是一种服务器端的信息管理机制，它把这些文件信息以文件的形式存放在服务器的硬盘空间上（这是默认情况，可以用memcache把这种数据放到内存里面）当客户端向服务器发出请求时，要求服务器端产生一个session时，服务器端会先检查一下，客户端的cookie里面有没有session_id，是否过期。如果有这样的session_id的话，服务器端会根据cookie里的session_id把服务器的session检索出来。如果没有这样的session_id的话，服务器端会重新建立一个。PHPSESSID是一串加了密的字符串，它的生成按照一定的规则来执行。同一客户端启动二次session_start的话，session_id是不一样的。 

   

 2. cookie与session的区别：

    Cookie保存在客户端浏览器中，而Session保存在服务器上。Cookie机制是通过检查客户身上的“通行证”来确定客户身份的话，那么Session机制就是通过检查服务器上的“客户明细表”来确认客户身份。Session相当于程序在服务器上建立的一份客户档案，客户来访的时候只需要查询客户档案表就可以了。

    ①存在的位置：

    cookie 存在于客户端，临时文件夹中；  session存在于服务器的内存中，一个session域对象为一个用户浏览器服务

    ②安全性
    cookie是以明文的方式存放在客户端的，安全性低，可以通过一个加密算法进行加密后存放；

    session存放于服务器的内存中，所以安全性好

    ③网络传输量
    cookie会传递消息给服务器；  session本身存放于服务器，不会有传送流量

    ④生命周期(以20分钟为例)
    cookie的生命周期是累计的，从创建时，就开始计时，20分钟后，cookie生命周期结束；
    session的生命周期是间隔的，从创建时，开始计时如在20分钟，没有访问session，那么session生命周期被销毁。但是，如果在20分钟内（如在第19分钟时）访问过session，那么，将重新计算session的生命周期。关机会造成session生命周期的结束，但是对cookie没有影响

    ⑤访问范围
    cookie为多个用户浏览器共享；  session为一个用户浏览器独享

3.  为什么说session 比cookie更安全？

   真正的cookie存在于客户端硬盘上的一个文本文件，如果两者一样的话，只要cookie就好了，让客户端来分提服务器的负担，并且对于用户来说又是透明的。但实际上不是。

   session的sessionID是放在cookie里，要想功破session的话，得分两步：

   第一要得到sessionID。攻破cookie后，你要得到sessionID,sessionID是要有人登录，或者启动session_start才会有，你不知道什么时候会有人登录。

   第二取有效sessionID。sessionID是加密的，第二次session_start的时候，前一次的sessionID就没有用了，session过期时sessionid也会失效，想在短时间内功破加了密的 sessionID很难。session是针对某一次通信而言，会话结束session也就随着消失了。
   使session失效的方法：
   1.关闭tomcat  2.重启web应用  3.session时间到  4.无效的session