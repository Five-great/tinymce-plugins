# tinymce-plugins
This is tinymce plugins

## 前言
因为项目需要用到富文本编辑器众多富文本编辑器中，选择了 Tinymce，根据项目需要对Tinymce 进行扩展和增强插件，记录一下，并同时分享给需要帮助的人。


[tinymce 官方文档]( https://www.tiny.cloud/docs/)

[tinymce 中文文档]( http://tinymce.ax-z.cn/)

[项目demo地址](http://fivecc.gitee.io/tinymce-plugins/demo/)

[CSDN 博客](https://fivecc.blog.csdn.net/article/details/111810804)

[个人博客](https://fivecc.cn)

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
 - [x]  bdmap： 百度地图。 支持更改尺寸，自定义标签，开启导航功能,支持vue;
 - [x]  axupimgs: 多图上传。可同时上传多组图片，支持vue;
 - [x]  attachment: 附件上传。拥有附件类型对应图标，支持vue;
 
## 下载

```bash
 npm i @npkg/tinymce-plugins 或 cnpm i @npkg/tinymce-plugins -D
```
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
   [点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/imagetools.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)
   更多配置 见 [插件 / imagetools](http://tinymce.ax-z.cn/plugins/imagetools.php)

####  table 使用方法：
增强效果：
![在这里插入图片描述](https://s3.ax1x.com/2020/12/28/ro4Rne.png)

 提供一个配置项目 table_icons 自定义图标配置【Object】可配置icon 对象为
 
 1. align-left-table： 表格居左
 2. align-center-table： 表格居中
 3. align-right-table： 表格居右
 4. table-to-img： 表格转图片

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "table",
    toolbar: "table"
    table_icons: {// 以下下为默认配置
        'align-right-table': '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"></path></svg>',
        'align-left-table': '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"></path></svg>',
        'align-center-table': '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"></path></svg>'
    }
});
```
 [点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/table.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)
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
 [点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/indent2em.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)
   更多配置 见 [插件 / indent2em](http://tinymce.ax-z.cn/more-plugins/indent2em.php)


####  letterspacing 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "letterspacing",
    toolbar: "letterspacing"
});
```
[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/letterspacing.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)
   
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
[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/layout.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)

   更多配置 (选配):
         
   提供 一键布局 默认参数字段  layout_options  配置参数【Object类型】目前一共4个属性：
   1. style : 一键布局默认样式参数【Object】
   2. filterTags： 【Array】过滤标签，该数组中的标签，一键布局中将会被忽略（默认忽略 'table','tbody','td','tr'）
   3. tagsStyle： 单独标签样式处理【Object】
   4. clearStyle: 【Array】清除样式 ，一键布局后 ，数组中的样式将会清除掉。

   配置优先级从低到高： style < filterTags < tagsStyle < clearStyle 
   
```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "layout",
    toolbar: "layout",
    layout_options: {
                style: {
                   'text-align':'justify',
                   'text-indent':'2em',
                   'line-height': 1.5
                },
                filterTags：['table>*','tbody'], //'table，'tbody','td','tr' 将会忽略掉 同时 table>*，忽略table 标签 以及所有子标签
                clearStyle: ['text-indent'],//text-indent 将会被清除掉
                tagsStyle: {
                   'table': {
                       'line-height': 3,
                       'text-align': 'center'
                   },
                  'table,tbody,tr,td': { //支持并集选择
                    'line-height': 2
                   },
                   'tr>td,table>tbody': { //支持, 精准定位 通过 ' > '
                    'line-height': 3,
                    'text-align': 'center'
                   }
               }
    }
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
[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/importword.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)

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
                    editor.notificationManager.open({
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

[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/upfile.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)

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
####  bdmap 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "bdmap",
    toolbar: "bdmap"
});
```

[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/bdmap.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)

   更多配置(选配) :
         
   提供 `bdmap` 插件 `bdmap_options` 配置参数【object】 传入 4 个参数
   1. width: 百度地图默认宽度 默认 560
   2. height: 百度地图默认高度 默认 360
   3. outputIframe: 百度地图输出iframe路径， 默认 '.' （当前路径） `Vue` 默认 'https://unpkg.com/@npkg/tinymce-plugins/plugins/bdmap/bd.html'
   4. apiKey:  自定义百度地图apiKey `Vue` 中有效

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "bdmap",
    toolbar: "bdmap",
    bdmap_options: {
        width: 560,
        height: 360,
        outputIframe: 'https://unpkg.com/@npkg/tinymce-plugins',
        apiKey: 'ONXXXXXXXXXXXXXXnP'
    }
});
```

####  axupimgs（Vue）使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "axupimgs",
    toolbar: "axupimgs"
});
```

[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/axupimgs.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)

更多配置 见 [插件 / axupimgs](http://tinymce.ax-z.cn/more-plugins/axupimgs.php)

#### attachment 使用方法：

```javascript
tinymce.init({
    selector: '#tinydemo',
    plugins: "attachment",
    toolbar: "attachment"
});
```

[点击下载](https://github.com/Five-great/tinymce-plugins/releases/download/0.0.5/attachment.rar) [更多下载](https://github.com/Five-great/tinymce-plugins/releases/tag/0.0.5)

   更多配置(选配) :
         
   提供 `attachment` 插件  提供 `attachment_max_size`，`attachment_style`,`attachment_icons_path`,`attachment_upload_handler` 配置参数
   attachment_max_size: 附件大小限制  默认 209715200 （200M）【number】 
   attachment_style: 附件的样式，主要为保存数据后可以直接在其他页面展示。 【string】 
   attachment_icons_path： 附件的 图标的路径 icons ， 默认 当前路径  `Vue` 默认 'https://unpkg.com/@npkg/tinymce-plugins/plugins/attachment/icons'
   attachment_upload_handler： 附件上传处理函数 【function】 function(file, succFun, failFun, progressCallback)
   
   1. file : 文件对象【file】
   2. succFun : 成功回调函数 传入 (url|string)
   3. failFun : 失败回调函数 传入 (string)
   4. progressCallback: 进程回调函数 传入 (string)


```javascript

var xhrOnProgress = function (fun) {
    xhrOnProgress.onprogress = fun;
    return function () {
        var xhr = $.ajaxSettings.xhr();
        if (typeof xhrOnProgress.onprogress !== 'function')
            return xhr;
        if (xhrOnProgress.onprogress && xhr.upload) {
            xhr.upload.onprogress = xhrOnProgress.onprogress;
        }
        return xhr;
    }
  }

tinymce.init({
    selector: '#tinydemo',
    plugins: "attachment",
    toolbar: "attachment",
    attachment_max_size: 209715200,
    attachment_style:'.attachment>img{display:inline-block!important;max-width:30px!important;}'
    attachment_icons_path: 'https://unpkg.com/@npkg/tinymce-plugins/plugins/attachment/icons',
    attachment_upload_handler: function (file, succFun, failFun, progressCallback) {
            var data = new FormData();
            data.append("file", file);
            $.ajax({
                data: data,
                type: 'GET',
                url: './api/file.json',
                cache: false,
                contentType: false,
                processData: false,
                header:{'Content-Type':'multipart/form-data'},
                dataType: 'json',
                xhr: xhrOnProgress(function (e) {
                    const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                    progressCallback(percent);
                }),
            }).then(function (data) {
                if ( data.code== 200) {
                    succFun(data.data);
                } else {
                    failFun('上传失败:' + data.data);
                }
            }).fail(function (error) {
                failFun('上传失败:' + error.message)
            });
        },

        
});
```

# 在vue当中使用

只需将插件下载后引用到安装目录中

```javscript

|-- node_modules
| ...
|   |-- tinymce
|   | .
|   |-- |-- plugins
|   |   |   |-- letterspacing
|   |   |   |-- layout
|   |   |   |-- indent2em
|   |   |   |-- importword
|   |   |   |-- imagetools
|   |   |   |-- table
|   |   |   |-- bdmap
|   |   |   |-- axupimgs
|   |   |   |-- attachment
| ...

```
#### 引入

可以全部引入
```javascript
 import '@npkg/tinymce-plugins'
```
也可以按需引入
```javascript
import '@npkg/tinymce-plugins/importword' 
import '@npkg/tinymce-plugins/lineheight' 
import '@npkg/tinymce-plugins/layout' 
import '@npkg/tinymce-plugins/letterspacing' 
import '@npkg/tinymce-plugins/indent2em' 
import '@npkg/tinymce-plugins/upfile' 
import '@npkg/tinymce-plugins/imagetools'
import '@npkg/tinymce-plugins/attachment'

```
#### 欢迎提出建议，动手点赞 ，或提pr
   
