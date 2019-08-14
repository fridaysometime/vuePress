## Post和Get

**一，什么是Get/Post？**

在了解get和post之前，我们要先了解TCP/IP和http。简单来说，TCP/IP是网络架构，TCP/IP是五层网络架构（区分于OSI七层架构），TCP/IP自上而下分为应用层，传输层，网络层，数据链路层，物理层。更深入的知识这里就不涉及，有兴趣可以自己去了解。Http是位于应用层的协议，TCP位于传输层（区别于UDP），IP是位于网络层的。简单来说，Http是基于TCP/IP的一种通信协议（超文本传输协议，所有www都必须遵循这个协议，你所看到的网页都是基于这个协议）。



![img](https:////upload-images.jianshu.io/upload_images/11969846-75379c36a98e71a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/770/format/webp)



那初步知道了TCP/IP的网络模型和Http后，我们来进一步了解get和post。

**get和post是http上的两种请求方式，其本质是TCP链接，两者并无差别。**（请求方式：Get，Post，Put，Delect）（标准六种：get，post，put，delect，head，options）

**二·，GET/POST误解**

传统上，很多人认为get是通过url传输数据，post是通过response body传输数据；get的传参大小是2K，post是64K；post比get安全等等，这些都是错误的理解。



![img](https:////upload-images.jianshu.io/upload_images/11969846-bf867bad6292215f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/846/format/webp)



从上面的解释，我们已经知道Get和post其实就是TCP是两种链接。通过一定的技术手段，get也可以通过response body传参，post也可以通过url传参。

> 举个例子：在一条公路上，跑车很多运输货品的车辆，这些车辆就好比是TCP，同时，这些车辆有的运输多，有的运输少，因为没有交通规则往往会导致公路堵塞，所以这时就有了交通规则----HTTP，此时服务端和客户端就像是两个公司，一个提供货物，一个接收货物；而get就像是把货物放在车的上面，post就是放在货物箱里面。按理来说，你要是把货物放在上面的车辆在筛一些货物放在里面，或者是把货物箱里面的货物拿出来放在车上，都是可以的。（这里是引用知乎的解释）

**三，GET和POST的区别**

**其实两者在tcp传输中并无不同。**

那说了这么多，get和post的区别到底是什么呢？

get会产生一个TCP数据包，POST会产生两个TCP数据包。

get会发送http header和data给服务端，服务端返回一个200，请求成功。

post会先发送http header给服务端，告诉服务端等一下会有数据过来，服务端返回100，告诉客户端我已经准备接收数据，post在发送一个data给服务端，服务端返回200，请求成功。

但是上面所说的post会比get多一个tcp包其实不太严谨。多发的那个expect 100 continue header报文，是由客户端对http的post和get的请求策略决定的，目的是为了避免浪费资源，如带宽，数据传输消耗的时间等等。所以客户端会在发送header的时候添加expect 100去探探路，如果失败了就不用继续发送data，从而减少了资源的浪费。所以是否在发送一个包取决了客户端的实现策略，和get/post并没什么关系。有的客户端比如fireFox就只发送一个包。



Get和post是表单提交数据的两种基本方式，get请求数据通过域名后缀url传送，用户可见，不安全，post请求数据通过在请求报文正文里传输，相对比较安全。

get是通过url传递表单值，post通过url看不到表单域的值；

get传递的数据量是有限的，如果要传递大数据量不能用get，比如type=“file”上传文章、type=“password”传递密码或者< text area >发  Get和post是表单提交数据的两种基本方式，get请求数据通过域名后缀url传送，用户可见，不安全，post请求数据通过在请求报文正文里传输，相对比较安全。

post会有浏览器提示重新提交表单的问题，get则没有(加分的回答)

对于Post的表单重新敲地址栏再刷新就不会提示重新提交了，因为重新敲地址就没有偷偷提交的数据了。Post方式的正确的地址很难直接发给别人。

## GET和POST的区别

1. GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连，如EditPosts.aspx?name=test1&id=123456. POST方法是把提交的数据放在HTTP包的Body中.

2. GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制.

3. GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。

4. GET方式提交数据，会带来安全问题，比如一个登录页面，通过GET方式提交数据时，用户名和密码将出现在URL上，如果页面可以被缓存或者其他人可以访问这台机器，就可以从历史记录获得该用户的账号和密码.

### GET是从服务器上获取数据，POST是向服务器传送数据。

GET是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。POST是通过HTTP POST机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。

对于GET方式，服务器端用Request.QueryString获取变量的值，对于POST方式，服务器端用Request.Form获取提交的数据

GET传送的数据量较小，不能大于2KB（这主要是因为受URL长度限制）。POST传送的数据量较大，一般被默认为不受限制。但理论上，限制取决于服务器的处理能力。

GET安全性较低，POST安全性较高。因为GET在传输过程，数据被放在请求的URL中，而如今现有的很多服务器、代理服务器或者用户代理都会将请求URL记录到日志文件中，然后放在某个地方，这样就可能会有一些隐私的信息被第三方看到。另外，用户也可以在浏览器上直接看到提交的数据，一些系统内部消息将会一同显示在用户面前。POST的所有操作对用户来说都是不可见的。

