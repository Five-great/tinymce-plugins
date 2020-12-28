
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
  
  /*==============================================================*/
            var tinymceConfig= {
                tinyID: "mytextarea",//作用域ID
                placeholder: '', //默认文字
                infoHtml: $(this.tinyID).html(),//初始化内容
                GbaseUrl: '',//全局baseUrl
                OMHtml: '<div style="height: 1500px;"><p><h2>操作手册：</h2></p></div><p>666</p>', //设置操作手册Html
                CPHtml: '',
            }

          tinymce.init({
                 selector: '#'+tinymceConfig.tinyID,
                 language:'zh_CN',
                 menubar:false,
                 branding: false,
                 min_height:400,
                 max_height: 700,
                 plugins: ' print preview clearhtml searchreplace autolink layout fullscreen image upfile link media code codesample table charmap hr pagebreak nonbreaking anchor advlist lists textpattern help emoticons autosave bdmap indent2em lineheight formatpainter axupimgs powerpaste letterspacing imagetools quickbars attachment wordcount autoresize importword',
                 toolbar_groups: {
                         formatting: {
                             text: '文字格式',
                             tooltip: 'Formatting',
                             items: 'bold italic underline | superscript subscript',
                         },
                         alignment: {
                             icon: 'align-left',
                             tooltip: 'alignment',
                             items: 'alignleft aligncenter alignright alignjustify',
                         }
                  },
                 toolbar: ['|code formatselect fontselect fontsizeselect  forecolor backcolor bold italic underline strikethrough link alignment indent2em outdent indent lineheight letterspacing bullist numlist blockquote subscript superscript  layout removeformat table image media upfile attachment importword charmap  hr pagebreak  clearhtml    bdmap  formatpainter  cut copy undo redo restoredraft  searchreplace fullscreen help'],
                 table_style_by_css: true,
                 OperationManualHtml: '',
                 CommonProblemHtml: '',
                 fixed_toolbar_container:'#tinymce-app .toolbar',
                 custom_ui_selector: '#tinymce-app',
                 placeholder:''+tinymceConfig.placeholder,
                 file_picker_types: 'file',
                 powerpaste_word_import: "clean", // 是否保留word粘贴样式  clean | merge 
                 powerpaste_html_import: 'clean', // propmt, merge, clean
                 powerpaste_allow_local_images: true,//
                 powerpaste_keep_unsupported_src:true,
                 paste_data_images: true,
                 toolbar_sticky: false,
                 autosave_ask_before_unload: false,
                 fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                 font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;',
                 images_upload_base_path: '',
                 images_upload_handler: function (blobInfo, succFun, failFun) {//自定义插入图片函数  blobInfo: 本地图片blob对象, succFun(url|string)： 成功回调（插入图片链接到文本中）, failFun(string)：失败回调
                    var file = blobInfo.blob();
                    var reader = new FileReader();
                    reader.onload = function(e){
                     succFun(e.target.result)
                    }
                   reader.readAsDataURL(file)
                 },
                 file_picker_callback: function (succFun, value, meta) { //自定义文件上传函数 
                    var filetype = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4';
                    var input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', filetype);
                    input.click();
                    input.onchange = function () {
                        var file = this.files[0];
                        var data = new FormData();
                         data.append("file", file);
                        $.ajax({
                            data: data,
                            type: 'GET',
                            url: './api/file.json',
                            header:{'Content-Type':'multipart/form-data'},
                            cache: false,
                            contentType: false,
                            processData: false,
                            dataType: 'json',
                            xhr: xhrOnProgress(function (e) {
                                const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                                // console.log(percent);
                                progressCallback(percent);
                  
                            }),
                        }).then(function (data) {
                            if ( data.code== 200) {
                                succFun(data.data,{ text: data.data });
                            }
                        }).fail(function (error) {
                            failFun('上传失败:' + error.message)
                        });
                    }
                 },
                 file_callback: function (file, succFun) { //文件上传  file:文件对象 succFun(url|string,obj) 成功回调
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
                            succFun(data.data,{text: file.name});
                        } 
                    }).fail(function (error) {
                        // failFun('上传失败:' + error.message)
                    });
                 },
                 attachment_assets_path: './plugins/attachment/icons',
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
                 init_instance_callback: function(editor){
                     $('#tinymce-app').fadeIn(1000);
                  //    editor.execCommand('selectAll');
                  //    editor.selection.getRng().collapse(false);
                  //    editor.focus();
                 }
          }).then(function(res){
                 tinymce.feedBackIframeUrl ='./plugins/help/docBox.html'; //反馈链接
                 tinymceConfig.setFCHtml = function(html){//设置功能介绍Html
                    tinymce.functionHtml = html;
                  } 
                 tinymceConfig.setOMHtml = function(html){//设置操作手册Html
                    tinymce.OperationManualHtml = html;
                  } 
                  tinymceConfig.setCPHtml = function(html){//设置疑难问答Html
                    tinymce.CommonProblemHtml = html;
                  }
                  tinymceConfig.getHtml = function getHtml(){
                      let _html = tinyMCE.editors[tinymceConfig.tinyID].getContent();
                    return '<style>.attachment>img{display:inline-block!important;max-width:30px!important;}.attachment>a{display:contents!important;}</style>'+_html;
                   }
				  
                  tinymceConfig.setHtml = function setHtml(html){
                      return tinyMCE.editors[tinymceConfig.tinyID].setContent(html);
                  }
                  $.ajax({
                    type: "GET",
                    url: "./api/setFChtml.json",
                    async: true,
                    dataType: "json",
                    success: function(data) {
                       
                      tinymceConfig.setFCHtml(data.data);//设置功能介绍
                    },
                    error:function () {
                    }
                  })
                  $.ajax({
                    type: "GET",
                    url: "./api/setList.json",
                    async: true,
                    dataType: "json",
                    success: function(data) {
                      let temHtml=data.data
                      tinymceConfig.setOMHtml(temHtml)
                    }
                  })
                      $.ajax({
                        type: "GET",
                        url: "./api/setCP.json",
                        async: true,
                        dataType: "json",
                        success: function(data) {
                          tinymceConfig.setCPHtml(data.data);//设置疑难问答
                          let _html = $("#"+tinymceConfig.tinyID).html();
                             if(_html.indexOf('<div id="fvContentID">')!=-1){
                                 _html = _html.match(/<div id="fvContentID">([\s\S]*)<\/div>/)[1];
                             }
                         tinymceConfig.setHtml(_html)
                        },
                        error:function () {
                        }
                      })
                      //
                //公告栏
		        $.ajax({
                    type: "GET",
                    url: "./api/setGG.json",
                    async: true,
                    dataType: "json",
                    success: function(data) {
                           $("#tinymce-app").prepend('<div><p style="margin: 5px;">【公告栏】</p>'+data.data+'</div>')
                    },
                    error:function () {
                    }
                  })
             });



             tinymce.init({
                selector: '#'+tinymceConfig.tinyID+'2',
                language:'zh_CN',
                // menubar:false,
                branding: false,
                min_height:400,
                max_height: 700,
                plugins: ' print preview clearhtml searchreplace autolink layout fullscreen image upfile link media code codesample table charmap hr pagebreak nonbreaking anchor advlist lists textpattern help emoticons autosave bdmap indent2em lineheight formatpainter axupimgs powerpaste letterspacing imagetools quickbars attachment wordcount autoresize importword',
                toolbar_groups: {
                        formatting: {
                            text: '文字格式',
                            tooltip: 'Formatting',
                            items: 'bold italic underline | superscript subscript',
                        },
                        alignment: {
                            icon: 'align-left',
                            tooltip: 'alignment',
                            items: 'alignleft aligncenter alignright alignjustify',
                        }
                 },
                toolbar: ['|code formatselect fontselect fontsizeselect  forecolor backcolor bold italic underline strikethrough link alignment | ','layout upfile importword letterspacing indent2em table image imagetools '],
                table_style_by_css: true,
                OperationManualHtml: '',
                CommonProblemHtml: '',
                fixed_toolbar_container:'#tinymce-app2 .toolbar',
                custom_ui_selector: '#tinymce-app2',
                placeholder:''+tinymceConfig.placeholder,
                file_picker_types: 'file',
                powerpaste_word_import: "clean", // 是否保留word粘贴样式  clean | merge 
                powerpaste_html_import: 'clean', // propmt, merge, clean
                powerpaste_allow_local_images: true,//
                powerpaste_keep_unsupported_src:true,
                paste_data_images: true,
                toolbar_sticky: false,
                autosave_ask_before_unload: false,
                fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
                font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;',
                images_upload_base_path: '',
                images_upload_handler: function (blobInfo, succFun, failFun) {//自定义插入图片函数  blobInfo: 本地图片blob对象, succFun(url|string)： 成功回调（插入图片链接到文本中）, failFun(string)：失败回调
                   var file = blobInfo.blob();

                   
                  var reader = new FileReader();
                   reader.onload = function(e){
                    // target.result 该属性表示目标对象的DataURL
                    console.log(e.target.result);
                    succFun(e.target.result)
                  }
                  reader.readAsDataURL(file)
                },
                file_picker_callback: function (succFun, value, meta) { //自定义文件上传函数 
                   var filetype = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4';
                   var input = document.createElement('input');
                   input.setAttribute('type', 'file');
                   input.setAttribute('accept', filetype);
                   input.click();
                   input.onchange = function () {
                       var file = this.files[0];
                       var data = new FormData();
                        data.append("file", file);
                       $.ajax({
                           data: data,
                           type: 'GET',
                           url: './api/file.json',
                           header:{'Content-Type':'multipart/form-data'},
                           cache: false,
                           contentType: false,
                           processData: false,
                           dataType: 'json',
                           xhr: xhrOnProgress(function (e) {
                               const percent = (e.loaded / e.total * 100 | 0) + '%';//计算百分比
                               // console.log(percent);
                               progressCallback(percent);
                 
                           }),
                       }).then(function (data) {
                           if ( data.code== 200) {
                               succFun(data.data,{ text: data.data });
                           }
                       }).fail(function (error) {
                           failFun('上传失败:' + error.message)
                       });
                   }
                },
                file_callback: function (file, succFun) { //文件上传  file:文件对象 succFun(url|string,obj) 成功回调
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
                            succFun(data.data,{text: file.name});
                        } 
                    }).fail(function (error) {
                        // failFun('上传失败:' + error.message)
                    });
                },
                init_instance_callback: function(editor){
                    var  html2 ='<p>This is tinymce plugins 该项目主要为 tinymce 富文本编译器的扩展插件，或增强优化插件 目前整理完成插件列表如下：</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;imagetools [增强优化]： 图片编辑工具插件， 对图片进行处理。优化跨域，功能更丰富；</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;table [增强优化]：表格插件，处理表格。 增强优化表格控制，增加表格转图片功能，便捷布局按钮；</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;indent2em[增强优化]：首行缩进插件。提供中文段落排版的首行缩进2个字符的功能。增强优化 加入字间距非默认情况，也能实现准确首行缩进2字符；</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;letterspacing：设置间距插件。可以设置文档中的文字间距；</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;layout： 一键布局插件。可以给文档段落进行一键快速排版布局；</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;importword： 导入word插件。可以直接导入word ,并且保证word中图片不会丢失，自动转为base64;</p>'+
                                '<p style="text-indent: 2em; text-align: justify; line-height: 1.5;"><input checked="checked" type="checkbox" />&nbsp;upfile： 文件上传。可以点击导入文件，可自定义编辑文件名;</p>'+
                                '<p>表格样例</p>'+
                                '<table style="border-collapse: collapse; width: 99.8937%;" border="1">'+
                                '<tbody><tr><td style="width: 49.2138%; text-align: center;">&nbsp;表格可以转化为图片</td><td style="width: 49.267%; text-align: center;">表格可以转化为图片</td></tr><tr><td style="width: 49.2138%; text-align: center;">表格可以转化为图片</td><td style="width: 49.267%; text-align: center;">表格可以转化为图片</td></tr></tbody></table>'+
                                '<p>图片样例</p>'+
                                '<p><img style="display: block; margin-left: auto; margin-right: auto;"  src="https://s3.ax1x.com/2020/12/28/ro4Lng.png" alt="20201227164654484" /></p>'
                                tinyMCE.editors[tinymceConfig.tinyID+'2'].setContent(html2);                    
                    $('#tinymce-app2').fadeIn(1000);
                 //    editor.execCommand('selectAll');
                 //    editor.selection.getRng().collapse(false);
                 //    editor.focus();
                }
            
         });