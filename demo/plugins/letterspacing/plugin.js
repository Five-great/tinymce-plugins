/**
 * letterspacing 1.5v 2021-1-13
 * The tinymce-plugins is used to set the word spacing
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2020, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
tinymce.PluginManager.add('letterspacing', function(editor, url) {
    var pluginName='设置间距';
    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var letterspacing_val = editor.getParam('letterspacing', '0px 1px 2px 4px 6px 8px 10px 20px 40px');
    editor.on('init', function() {
        editor.formatter.register({
            letterspacing: {
                inline: 'span',
                toggle: false,
                styles: { 'letter-spacing': '%value' },
                clear_child_styles: true
            }
        });
    });
    var doAct = function (value) {
        editor.formatter.apply('letterspacing', { value: value });
        editor.fire('change', {});
        upIndent2em();
    };
    function _indent2$getValue( key, str ) { 
        var m = str.match( new RegExp(key + ':?(.+?)"?[;}]') );
        return m ? m[ 1 ] : false;
    }
    function upIndent2em(){
        var dom = editor.dom;
        var blocks = editor.selection.getSelectedBlocks();
        global$1.each(blocks, function(block) {
            if(dom.getStyle(block,'text-indent')){
                let kv = "";
                let kl = "";
                 if(block&&block.children['0']&&block.children['0'].attributes&&block.children['0'].attributes.style){
                   kv = _indent2$getValue('font-size',block.children['0'].attributes.style.textContent);
                   kl = _indent2$getValue('letter-spacing',block.children['0'].attributes.style.textContent);
                   if(kv) {kv=(parseInt(kv)+parseInt((kl?kl:0)))*2+'px';}
                   else kv=(parseInt((kl?kl:0))+16)*2+'px';
                 }
                dom.setStyle(block, 'text-indent', kv?kv:'2em');
            }
        });
        // console.log("111")
    }
    editor.ui.registry.getAll().icons.letterspacing || editor.ui.registry.addIcon('letterspacing','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path d="M33.450667 3.413333h102.4v956.8256H33.450667V3.413333z m887.330133 1.8432h102.4v957.713067h-102.4V5.188267z m-425.301333 200.704h108.9536l223.6416 584.977067h-102.4l-53.248-146.6368H427.485867l-53.248 146.6368h-102.4l223.6416-584.9088z m-39.3216 359.697067H643.754667L552.004267 309.248h-3.2768L456.157867 565.6576z" ></path></svg>');
    editor.ui.registry.addMenuButton('letterspacing', {
        icon: 'letterspacing',
        tooltip: pluginName,
        fetch: function(callback) {
            var dom = editor.dom;
            var blocks = editor.selection.getSelectedBlocks();
            var lhv = 0;
            global$1.each(blocks, function(block) {
                if(lhv==0){
                    lhv = dom.getStyle(block,'letter-spacing') ? dom.getStyle(block,'letter-spacing') : 0;
                }
            });
            var items = letterspacing_val.split(' ').map(function(item){
                var text = item;
                var value = item;
                return {
                    type: 'togglemenuitem',
                    text: text,
                    active : lhv==value ? true :false,
                    onAction: function() {
                        doAct(value);
                    }
                };
            });
            callback(items);
        }
    });

    return {
        getMetadata: function () {
            return  {
                name: pluginName,
                url: "https://github.com/Five-great/tinymce-plugins",
            };
        }
    };
});
