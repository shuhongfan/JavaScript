(function (window) {
    var msg='My Baidu'
    function doSomeThing() {
        console.log('dosomething()'+msg.toUpperCase())
    }
    function doOtherThing() {
        console.log('dootherthing()'+msg.toLocaleLowerCase())
    }
    window.myModule2={
        doSomeThing,
        doOtherThing
    }
})(window)
