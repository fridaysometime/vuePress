## hadoop,storm与spark

### 1. hadoop、Storm各是什么运算

首先整体认识：Hadoop是[磁盘](http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww.aboutyun.com%2Fthread-6858-1-1.html&p=baidu&c=news&n=10&t=tpclicked3_hc&q=92051019_cpr&k=%B4%C5%C5%CC&k0=%CA%FD%BE%DD%B2%C9%BC%AF&kdi0=8&k1=%B1%E0%B3%CC&kdi1=8&k2=%B1%E0%B3%CC%D3%EF%D1%D4&kdi2=8&k3=%B4%C5%C5%CC&kdi3=8&k4=%CA%FD%BE%DD%BF%E2&kdi4=8&sid=22206017571c9009&ch=0&tu=u1692056&jk=c729b0949b2bd97a&cf=29&fv=14&stid=9&urlid=0&luki=4&seller_id=1&di=128)级计算，进行计算时，数据在磁盘上，需要读写磁盘；Storm是内存级计算，数据直接通过网络导入内存。读写内存比读写磁盘速度快n个数量级; storm更快；

Hadoop是实现了MapReduce的思想，将数据切片计算来处理大量的离线数据。Hadoop处理的数据必须是已经存放在HDFS上或者类似HBase的数据库中，所以Hadoop实现的时候是通过移动计算到这些存放数据的机器上来提高效率

注释：
1. 延时 ， 指数据从产生到运算产生结果的时间，“快”应该主要指这个。
2. 吞吐， 指系统单位时间处理的数据量。

storm的网络直传、内存计算，其时延必然比hadoop的通过hdfs传输低得多；当计算模型比较适合流式时，storm的流式处理，省去了批处理的收集数据的时间；因为storm是服务型的作业，也省去了作业调度的时延。所以从时延上来看，storm要快于hadoop。

从原理角度来讲：

- Hadoop M/R基于HDFS，需要切分输入数据、产生中间数据文件、排序、数据压缩、多份复制等，效率较低。
- Storm 基于ZeroMQ这个高性能的消息通讯库，不持久化数据。

为什么storm比hadoop快，下面举一个应用场景
说一个典型的场景，几千个日志生产方产生日志文件，需要进行一些ETL操作存入一个数据库。

假设利用hadoop，则需要先存入hdfs，按每一分钟切一个文件的粒度来算（这个粒度已经极端的细了，再小的话hdfs上会一堆小文件），hadoop开始计算时，1分钟已经过去了，然后再开始调度任务又花了一分钟，然后作业运行起来，假设机器特别多，几钞钟就算完了，然后写数据库假设也花了很少的时间，这样，从数据产生到最后可以使用已经过去了至少两分多钟。
而流式计算则是数据产生时，则有一个程序去一直监控日志的产生，产生一行就通过一个传输系统发给流式计算系统，然后流式计算系统直接处理，处理完之后直接写入[数据库](http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww.aboutyun.com%2Fthread-6858-1-1.html&p=baidu&c=news&n=10&t=tpclicked3_hc&q=92051019_cpr&k=%CA%FD%BE%DD%BF%E2&k0=%CA%FD%BE%DD%B2%C9%BC%AF&kdi0=8&k1=%B1%E0%B3%CC&kdi1=8&k2=%B1%E0%B3%CC%D3%EF%D1%D4&kdi2=8&k3=%B4%C5%C5%CC&kdi3=8&k4=%CA%FD%BE%DD%BF%E2&kdi4=8&sid=22206017571c9009&ch=0&tu=u1692056&jk=c729b0949b2bd97a&cf=29&fv=14&stid=9&urlid=0&luki=5&seller_id=1&di=128)，每条数据从产生到写入数据库，在资源充足时可以在毫秒级别完成。

同时说一下另外一个场景：
如果一个大文件的wordcount，把它放到storm上进行流式的处理，等所有已有数据处理完才让storm输出结果，这时候，你再把它和hadoop比较快慢，这时，其实比较的不是时延，而是比较的吞吐了。



最主要的方面：Hadoop使用[磁盘](http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww.aboutyun.com%2Fthread-6858-1-1.html&p=baidu&c=news&n=10&t=tpclicked3_hc&q=92051019_cpr&k=%B4%C5%C5%CC&k0=%CA%FD%BE%DD%B2%C9%BC%AF&kdi0=8&k1=%B1%E0%B3%CC&kdi1=8&k2=%B1%E0%B3%CC%D3%EF%D1%D4&kdi2=8&k3=%B4%C5%C5%CC&kdi3=8&k4=%CA%FD%BE%DD%BF%E2&kdi4=8&sid=22206017571c9009&ch=0&tu=u1692056&jk=c729b0949b2bd97a&cf=29&fv=14&stid=9&urlid=0&luki=4&seller_id=1&di=128)作为中间交换的介质，而storm的数据是一直在内存中流转的。
两者面向的领域也不完全相同，一个是批量处理，基于任务调度的；另外一个是实时处理，基于流。
以水为例，Hadoop可以看作是纯净水，一桶桶地搬；而Storm是用水管，预先接好（Topology），然后打开水龙头，水就源源不断地流出来了。



**Storm的适用场景**：
1）流数据处理
Storm可以用来处理源源不断流进来的消息，处理之后将结果写入到某个存储中去。
2）分布式RPC。由于Storm的处理组件是分布式的，而且处理延迟极低，所以可以作为一个通用的分布式RPC框架来使用

**Hadoop的适用场景**

1）海量数据的离线分析处理
2）大规模Web信息搜索
3）数据密集型并行计算

### 2. 高性能并行计算引擎Storm和Spark比较

Spark是一个基于内存计算的开源集群计算系统，目的是更快速的进行数据分析。Spark由加州伯克利大学AMP实验室Matei为主的小团队使用Scala开发，类似于Hadoop MapReduce的通用并行计算框架，Spark基于Map Reduce算法实现的分布式计算，拥有Hadoop MapReduce所具有的优点，但不同于MapReduce的是Job中间输出和结果可以保存在内存中，从而不再需要读写HDFS，因此Spark能更好地适用于数据挖掘与机器学习等需要迭代的Map Reduce的算法。

Spark基于这样的理念，当数据庞大时，把计算过程传递给数据要比把数据传递给计算过程要更富效率。每个节点存储（或缓存）它的数据集，然后任务被提交给节点。

所以这是把过程传递给数据。这和Hadoop map/reduce非常相似，除了积极使用内存来避免I/O操作，以使得迭代算法（前一步计算输出是下一步计算的输入）性能更高。

而Storm的架构和Spark截然相反。Storm是一个分布式流计算引擎。每个节点实现一个基本的计算过程，而数据项在互相连接的网络节点中流进流出。和Spark相反，这个是把数据传递给过程。



Storm在动态处理大量生成的“小数据块”上要更好（比如在Twitter数据流上实时计算一些汇聚功能或分析）。

Spark工作于现有的数据全集（如Hadoop数据）已经被导入Spark集群，Spark基于in-memory管理可以进行快讯扫描，并最小化迭代算法的全局I/O操作。

**storm的适用场景 **

1）流数据处理
Storm可以用来处理源源不断流进来的消息，处理之后将结果写入到某个存储中去。
2）分布式RPC。由于Storm的处理组件是分布式的，而且处理延迟极低，所以可以作为一个通用的分布式RPC框架来使用。



**简单来说：Hadoop适合于离线的批量数据处理适用于对实时性要求极低的场景Storm适合于实时流数据处理，实时性方面做得极好Spark是内存分布式计算框架，试图吞并Hadoop的Map-Reduce批处理框架和Storm的流处理框架，但是Spark已经做得很不错了，批处理方面性能优于Map-Reduce，但是流处理目前还是弱于Storm，产品仍在改进之中**