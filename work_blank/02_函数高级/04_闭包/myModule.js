function myModule() {
    var msg='My Baidu'
    function doSomeThing() {
        console.log('dosomething()'+msg.toUpperCase())
    }
    function doOtherThing() {
        console.log('dootherthing()'+msg.toLocaleLowerCase())
    }
    return {
        doSomeThing,
        doOtherThing
    }
}
