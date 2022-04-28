---
title: 后端知识总结
sidebar: auto
sidebarDepth: 2
---

# 后端知识总结

::: tip 后端

愿天下没有难学的技术

:::

## java jdk配置

-  jdk下载 https://www.oracle.com/java/technologies/downloads/ 
-  jdk安装目录  D:\Program      
-  jre安装路径 D:\Program\Jre(新建空文件夹) 
-  配置环境变量（用户变量） 

```bash
新建 JAVA_HOME  目录D:\Program\Java\jdk1.8.0_321

Path编辑 新建 %JAVA_HOME%\bin
```

##  idea破解方法(2021.3)

- ja-netfilter-v2.2.2文件解压到D盘根目录 （在我百度网盘中）

- 打开idea 点击帮助中的倒数第四项，修改配置文件

  ![](images/peizhi.jpg)

- 在文件中追加     -javaagent:D:\ja-netfilter-v2.2.2\ja-netfilter.jar   关闭重启后，点击注册即可看到破解成功的到期时间

