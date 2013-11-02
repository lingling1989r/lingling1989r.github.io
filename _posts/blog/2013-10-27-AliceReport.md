---
layout: post
title: Alice's report
description: 也许每天，也许每周，Recording Everyday
category: blog
---

##Report

【2013-10-27】

好久没笔试，其实不见得会是花了不必要的时间和精力，有些东西还是值得吸收下的。
譬如 '负载均衡' ：[负载均衡][]
学习下譬如'数据库的性能':[db1][],[db2][],[db3][],[db4][]

上午，半小时orocle的在线测试，还没测完，添加一栏'待办事项' 给自己。总是只发现需求，然后就戛然而止。严重批评，要记下来，再加个'完成奖励'一栏给自己，记录待办事项里完成的东西，

下午，晕乎乎的。自己太浮躁。
和黄大聊了会，像两个落难的cheaken.
没事，都会好的。等有日回头再看今天，肯定不一样的心情的。
我最近晕乎乎的。。偶尔想自己一个人呆着。。晚上不来实验室了。

【2013-10-28、29】
+
就看电视剧睡觉了。今天写了点专利，这两天最好赶紧弄完，姐姐要开始搞仿真了。
在没有任何先验经验的情况下，我要独自探索前进的道路！

【2013-10-30】

下午去把专利寄过去。
###python 学习疑问
1,python的getattr(): 
value = getattr(obj, "attribute") 这个返回值可能是个函数！因为attribute可能是个函数，然后后续可以用value(args).
也就是

	func =getattr(obj,"method",None)
	if callable(func):
		result = func(args)

上述代表：只有在该方法存在的时候才去调用。

2,Unicode 一种编码方式可以将所有的编码符号都纳入其中，UTF-8是unicode的一种实现方式。
"严"的unicode是4E25
大端（big endian）: 4E  25
小端（little endian）: 25  4E

区别大小端，在文件的开头放置“零宽度非换行空格”，FEFF,若文本头两个字节是 FE FF就是大端，否则 小端

【2013-10-31】
10月最后一天，惊觉短信没用完。该干的活没干。


【2013-11-01】
不擅长的东西，刚开始进度都会有点慢。

我不愿送人，亦不愿人送我。对自己真正舍不得离开的人，离别的那一刹那像是开刀，凡是开刀的场合照例是应该先用麻醉剂，使病人在迷蒙中度过那场痛苦，所以离别的苦痛最好避免。一个朋友说，“你走，我不送你；你来，无论多大风多大雨，我要去接你。”我最赏识那种心情。——梁实秋《送行》

注册了[好知][]：
打算以后每周抽时间学习


###python学习疑问
1，global x, y, z
有点像static的含义，或者和没有声明global的变量相比，有点像传值和传引用的差别。

2, 我对分布之类的不懂

觉得对 [指数分布][] 忘记了 ，再看一眼也没能回忆起来是什么。。好悲伤。。

[random][] 这个链接讲了一些random相关的汇总。同时也发现[这个站][]也还不错
random.random()函数一般用于产生 uniform distribution


对于Non-uniform Distributions 常用有
（1）Normal Distribution: 适合成绩，身高，体重

（2）Exponential Distribution: 适合用于仿真 arrival or interval time values for in homogeneous Poisson
processes such as the rate of radioactive decay or requests coming into a web server.



##待办事项
---------2013-10-27-----------

1，看书'博弈论'相关，有记录，有分享（100块）

2，排序算法复习（10块）

3，大数的加减乘除（2块）

4, 完成27日的链接材料的阅读（10块）

5，仿真写完（600块）

6，集中式专利修改+分布式专利申请（100块）


##完成奖励

[负载均衡]:http://hi.baidu.com/aking_roc/item/3f62cb0f57b49736a3332a9e
[db1]: http://blog.csdn.net/chyliu/article/details/1870553
[db2]: http://database.51cto.com/art/200708/53458.htm
[db3]: http://blog.sina.com.cn/s/blog_5ec651430101ag8x.html
[db4]: http://www.cnblogs.com/wlb/archive/2010/03/14/1685361.html
[random]: http://pymotw.com/2/random/
[好知]: http://www.howzhi.com/me/
[这个站]: http://doughellmann.com/
[指数分布]: http://zh.wikipedia.org/wiki/%E6%8C%87%E6%95%B0%E5%88%86%E5%B8%83

