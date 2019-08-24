---
title: anaconda 基础 
date: 2019-03-12
tags: 
- Python
---

::: tip
命令行似的调试代码，可视化做的很好，还能弄成PPT格式，不过这里主要记录一些安装时候遇到的坑，以及每次换电脑，重新装都要上网百度，那我还是看自己的比较好
:::
<!--more -->



# anaconda 基础

**install:**

1. 安装anaconda

2. 给anaconda里创建多个不同版本的python环境

3. 给python环境下安装Spyder

   conda install -n python-env-name spyder

4. 给python环境下安装jupyter

   conda install -n python-env-name jupyter

**anaconda兼容多python版本：**

1. 创建环境时，指定要安装在环境中的python版本

* 给python3环境起名,例起名py3：conda create -n py3 python=3.5
* 给python2环境起名,例起名py2：conda create -n py2 python=2.7

2. 进入指定的python环境：

* windows进入python3：activate py3(python-env-name); Linux使用：source activate python-env-name
* windows退出python3环境：deactivate py3；Linux使用：source deactivate python-env-name
* 列出anaconda下python环境：conda info --envs 或conda env list;当前所在环境旁边有一个*

3.  列出环境下的package：

* conda list -n python-env-name
* conda list (默认查看root环境，即base环境)

4. 给python环境安装package

* conda install package_name (默认安装到base环境)
* 给指定python环境安装package：conda install --name python-env-name package_name
* conda install numpy=1.10 来指定所需的包版本

5. 给python环境删除package

* conda remove package_name

6. 给python环境更新package

* conda update package_name

7. 共享环境

   共享环境非常有用，它能让其他人安装你的代码中使用的所有包，并确保这些包的版本正确。比如你开发了一个药店数据分析系统，你要提交给项目部署系统的王二狗来部署你的项目，但是王二狗并不知道你当时开发时使用的是哪个python版本，以及使用了哪些包和包的版本。

   可以在你当前的环境中终端中使用 conda env export > environment.yaml 将你当前的环境保存到文件中包保存为YAML文件（包括Pyhton版本和所有包的名称）。

   命令的第一部分 conda env export 用于输出环境中的所有包的名称（包括 Python 版本）

   在 GitHub上共享代码时，最好同样创建环境文件并将其包括在代码库中。这能让其他人更轻松地安装你的代码的所有依赖项。

8. 导出的环境文件，在其他电脑环境中如何使用

   首先在conda中进入你的环境，比如activate py3

   然后在使用以下命令更新你的环境：其中-f表示你要导出文件在本地的路径，所以/path/to/environment.yml要换成你本地的实际路径conda env update -f=/path/to/environment.yml

9. 寻找package

   anaconda search -t conda package_name

   anaconda show DavidMertz/accelerate-skimage

   conda install --channel <https://conda.anaconda.org/DavidMertz> accelerate-skimage

   conda install --name python35 --channel <https://conda.anaconda.org/conda-forge> accelerate jieba

**jupyter:**

1. cmd进入python代码文件夹

2. 输入jupyter notebook,默认进入base环境的；进入其他环境的先activate python-env-name,再jupyter notebook

3. 找到一个用于存放config文件的文件夹，用cmd来查找路径：

   ```
   在cmd中 输入命令 jupyter notebook --generate-config（前面是两个-后面是一个-）
   ```

