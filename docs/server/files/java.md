# 后端知识总结

## java jdk 配置

- jdk 下载 https://www.oracle.com/java/technologies/downloads/
- jdk 安装目录 D:\Program
- jre 安装路径 D:\Program\Jre(新建空文件夹)
- 配置环境变量（用户变量）

```bash
新建 JAVA_HOME  目录D:\Program\Java\jdk1.8.0_321

Path编辑 新建 %JAVA_HOME%\bin
```

## idea 破解方法(2021.3)

- ja-netfilter-v2.2.2 文件解压到 D 盘根目录 （在我百度网盘中）

- 打开 idea 点击帮助中的倒数第四项，修改配置文件

  ![](../images/peizhi.jpg)

- 在文件中追加 -javaagent:D:\ja-netfilter-v2.2.2\ja-netfilter.jar 关闭重启后，点击注册即可看到破解成功的到期时间
