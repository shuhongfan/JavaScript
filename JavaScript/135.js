$(function () {
    loadDate()
    $('#title').on('keydown',function (e) {
        if (e.keyCode==13){
            if ($(this).val()===''){
                alert('请输入您要进行的操作')
            }else {
                // alert('aa')
                var local=getDate()
                console.log(local)
                local.push({title:$(this).val(),done:false})
                saveDate(local)
                loadDate()
                $(this).val('')
            }

        }
    })
    // 读取数据
    function getDate() {
        var data=localStorage.getItem('todolist')
        if(data!==null){
            return JSON.parse(data)
        }else {
            return []
        }
    }
    // 读取数据
    function saveDate(data) {
        data=JSON.stringify(data)
        localStorage.setItem('todolist',data)
    }
    // 渲染页面
    function loadDate() {
        var todocount=0
        var donecount=0
        var data=getDate()
        $('ol,ul').empty()
        $.each(data,function (i,n) {
            console.log(n)
            if (n.done){
                $('ul').prepend('<li><input type="checkbox" checked="checked"><p>'+n.title+'</p><a id="'+i+'" href="javascript:;"></a></li>')
                donecount++
            }else {
                $('ol').prepend('<li><input type="checkbox"><p>'+n.title+'</p><a id="'+i+'" href="javascript:;"></a></li>')
                todocount++
            }
        })
        $('#donecount').text(donecount)
        $('#todocount').text(todocount)
    }
    // 删除
    $('ol,ul').on('click','a',function () {
        // 获取本地存储
        var data=getDate()
        var index=$(this).attr('id')
        // console.log(index)
        // 修改数据
        data.splice(index,1)
        // 保存数据
        saveDate(data)
        // 重新渲染页面
        loadDate()
    })

    $('ol,ul').on('click','input',function () {
        // 修改本地存储的数据
        var data=getDate()
        var index=$(this).siblings('a').attr('id')
        console.log(index)
        // 修改数据
        data[index].done=$(this).prop('checked')
        // 保存到本地存储
        saveDate(data)
        // 重新渲染页面
        loadDate()

    })

})