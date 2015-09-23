# PreLoad
页面资源预加载(图片 字体 媒体 文件)

# 依赖库
> Jquery/Zepto
> Ajax

# 示例
<pre>
  var loadData = [
    {name: 'img1', path: 'image/bg.jpg'},
    {type: 'sound', path: 'audio/bg.mp3'}
  ];
  PreLoad.load(
    loadData,
    function (progress) {
        
    },
    function (result) {
      
    }
);
</pre>
