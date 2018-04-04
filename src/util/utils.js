const utils = {
    //缩放
    resize: function(){
        //this.$nextTick(function(){
        var clientWidth = parent.document.documentElement.clientWidth;
        var clientHeight = parent.document.documentElement.clientHeight;
        resize(clientWidth, clientHeight);
        window.addEventListener('resize', resize(clientWidth, clientHeight));
        function resize(docWidth, docHeight) {
            var docScale = docHeight / docWidth,
            designWidth = 375, designHeight = 667, els = document.querySelectorAll('.content'),
            scale = docWidth / designWidth,
            scaleX = docWidth / designWidth,
            scaleY = docHeight / designHeight;
            convertArray(els).forEach(function (el) {
            extend(el.style, {
                width: designWidth + 'px',
                height: (docScale * designWidth) + 'px',
                position: 'absolute',
                top: 0,
                left: 0,
                transformOrigin: '0 0',
                webkitTransformOrigin: '0 0',
                transform: 'scale(' + scale + ')',
                webkitTransform: 'scale(' + scale + ')',
                overflowX: 'hidden',
                webkitOverflowScrolling: 'touch'
            });
            });
        }
        function convertArray(arrayLike) {
            return Array.prototype.slice.call(arrayLike, 0);
        }

        function extend() {
            var args = Array.prototype.slice.call(arguments, 0);
            return args.reduce(function (prev, now) {
            for (var key in now) {
                if (now.hasOwnProperty && now.hasOwnProperty(key)) {
                prev[key] = now[key];
                }
            }
            return prev;
            });
        }
        //})
    },
    requestAnimFrame: function () {
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);
                };
    },
    /**
     * 获取当前的环境变量
     */
    getEnv: function(){
        return process.env.NODE_ENV || 'production';
    },

    devicetype: function() {
        var ua = navigator.userAgent.toLowerCase();
        //var up = navigator.appVersion.toLowerCase();
        return {
          isAndroid: (/android/gi).test(ua) || (/vivobrowser/gi).test(ua),
          isIOS: (/iphone|ipad|itouch|ipod/gi).test(ua)
        };
      }
};

export default utils;
