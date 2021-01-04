# tinymce-plugins
This is tinymce plugins

## 前言
因为项目需要用到富文本编辑器众多富文本编辑器中，选择了 Tinymce，根据项目需要对Tinymce 进行扩展和增强插件，记录一下，并同时分享给需要帮助的人。


[tinymce 官方文档]( https://www.tiny.cloud/docs/)

[tinymce 中文文档]( http://tinymce.ax-z.cn/)

[项目demo地址](http://fivecc.gitee.io/tinymce-plugins/demo/)

[CSDN 博客](https://blog.csdn.net/qq_41923622/article/details/111810804)

[个人博客](https://blog.fivecc.cn)

QQ邮箱: fivecc@qq.com

## 简述
This is tinymce plugins
该项目主要为 tinymce 富文本编译器的扩展插件，或增强优化插件
目前整理完成插件列表如下：

 - [x]  imagetools [增强优化]： 图片编辑工具插件， 对图片进行处理。优化跨域，功能更丰富； 
 - [x]  table [增强优化]：表格插件，处理表格。 增强优化表格控制，增加表格转图片功能，便捷布局按钮；
 - [x]  indent2em[增强优化]：首行缩进插件。提供中文段落排版的首行缩进2个字符的功能。增强优化 加入字间距非默认情况，也能实现准确首行缩进2字符；
 - [x]  letterspacing：设置间距插件。可以设置文档中的文字间距；
 - [x]  layout： 一键布局插件。可以给文档段落进行一键快速排版布局；
 - [x]  importword： 导入word插件。可以直接导入word ,并且保证word中图片不会丢失，自动转为base64;
 - [x]  upfile： 文件上传。可以点击导入文件，可自定义编辑文件名;
 - [ ]  bdmap： 百度地图： 支持更改尺寸，自定义标签，开启导航功能（后续抽取整理）;
 
 
## 使用说明
  未使用过 tinymce ，可以查看莫若卿大佬的 [tinymce  中文文档 ](http://tinymce.ax-z.cn/)
   ####  imagetools 使用方法：
  增强效果：
  ![在这里插入图片描述](https://s3.ax1x.com/2020/12/28/ro4Lng.png)

  
 ```javascript
   tinymce.init({
     selector: '#tinydemo',
     plugins: "image imagetools",
     toolbar: "image",
    });
   ```
   [点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/imagetools.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)
   更多配置 见 [插件 / imagetools](http://tinymce.ax-z.cn/plugins/imagetools.php)

####  table 使用方法：
增强效果：
![在这里插入图片描述](https://s3.ax1x.com/2020/12/28/ro4Rne.png)

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "table",
    toolbar: "table"
});
```
 [点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/table.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)
   更多配置 见 [插件 / table](http://tinymce.ax-z.cn/plugins/table.php)
   
####  indent2em 使用方法：

 当使用 本项目 letterspacing 插件，如需使用首行缩进 请替换原有indent2em，使用该项目indent2em插件。

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "indent2em",
    toolbar: "indent2em"
});
```
 [点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/indent2em.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)
   更多配置 见 [插件 / indent2em](http://tinymce.ax-z.cn/plugins/indent2em.php)


####  letterspacing 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "letterspacing",
    toolbar: "letterspacing"
});
```
[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/letterspacing.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)
   
   更多配置(选配) :
 
 提供字段 letterspacing 配置参数【String类型】，空格隔开；
 
 ```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "letterspacing",
    toolbar: "letterspacing",
    letterspacing: "0px 2px 4px 6px 24px"
});
```


####  layout 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "layout",
    toolbar: "layout"
});
```
[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/layout.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)

   更多配置 (选配):
         
   提供 一键布局 默认参数字段  layout_options  配置参数【Object类型】目前一共3个属性：
   1. alignment 【对齐方式：justify（默认） , left , right , center 等】；
   2.  lineheight 【设置行高】默认1.5
   3.  indent2em 【设置首行缩进】 默认 首行缩进 2字段 

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "layout",
    toolbar: "layout",
    layout_options: {alignment:'left',lineheight: 1.5,indent2em: '2em'}
});
```

####  importword 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "importword",
    toolbar: "importword"
});
```
[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/importword.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)

   更多配置(选配) :
         
   提供 导入word 插件 
   预处理函数 importword_handler 配置参数【Function类型】传入3个参数  
   1. editor : editor 编辑器实列【object】
   2. files : 导入的文件 【object】
   3. next : 下一步骤回调函数 传入files标签字符串【Function】
   
   过滤函数 importword_filter  配置参数【Function类型】传入3个参数
   
   1. result : 导入word 生成的 html标签字符串【String】
   2. insert : 插入回调函数 传入 html标签字符串【String】
   3. message: 转换过程中产生的错误信息集【Array】
     
```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "importword",
    toolbar: "importword",
    importword_handler: function(editor,files,next){
                var file_name = files[0].name
                if(file_name.substr(file_name.lastIndexOf(".")+1)=='docx'){
                    notificationID = editor.notificationManager.open({
                        text: '正在转换中...',
                        type: 'info',
                        closeButton: false,
                    });
                     next(files);
                }else{
                    editor.notificationManager.open({
                        text: '目前仅支持docx文件格式，若为doc111，请将扩展名改为docx',
                        type: 'warning',
                    });
                }
                // next(files);
    }
    importword_filter: function(result,insert,message){ 
       // 自定义操作部分
      insert(result) //回插函数
    }
});
```

####  upfile 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "upfile",
    toolbar: "upfile"
});
```

[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.2/upfile.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.2)

   更多配置(选配) :
         
   提供 upfile 插件  过滤函数 file_callback 配置参数【Function类型】传入2个参数
   
   1. file : 文件对象【file】
   2. succFun : 成功回调函数 传入 html标签字符串【Function类型】(url|string,obj)
     
```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "upfile",
    toolbar: "upfile",
    file_callback: function (file, succFun) {
       // 自定义处理文件操作部分
      succFun(url,{text: 'xx.pdf'}) //成功回调函数 text 显示的文本
    }
});
```

#### 欢迎提出建议，动手点赞 ，或提pr
   
