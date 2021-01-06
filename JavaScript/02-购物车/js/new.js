$(function () {
    // 全选/全不选
    $('.checkall').change(function () {
        console.log($(this).prop('checked'))
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'))
        if ($('.checkall').prop('checked')){
            $('.cart-item').addClass('check-cart-item')
        }else {
            $('.cart-item').removeClass('check-cart-item')
        }
    })

    $(".j-checkbox").change(function () {
        console.log($(".j-checkbox:checked"))
        console.log($(".j-checkbox:checked").length)
        // 如果复选框被选中的个数等于3 就全选
        if ($(".j-checkbox:checked").length===$(".j-checkbox").length){
            $('.checkall').prop('checked',true)
        }else {
            $('.checkall').prop('checked',false)
        }

        if ($(this).prop('checked')){
            $(this).parents('.cart-item').addClass('check-cart-item')
        }else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }
    })

    $('.increment').click(function () {
        var ipt=$(this).siblings('input').val()
        ipt++
        $(this).siblings('input').val(ipt)

        // var p_price=$(this).parent().parent().siblings('div.p-price').text()
        var p_price=$(this).parents('div.p-num').siblings('div.p-price').text()
        console.log(p_price)
        var price=p_price.substr(1,)
        console.log(price)
        // $(this).parent().parent().siblings('div.p-sum').text('￥'+price*ipt)
        $(this).parents('div.p-num').siblings('div.p-sum').text('￥'+(price*ipt).toFixed(2))
        getSum()
    })
    $('.decrement').click(function () {
        var ipt=$(this).siblings('input').val()
        if(ipt==1){
            return false
        }
        ipt--
        // if (ipt<=1){
        //     ipt=1
        // }
        $(this).siblings('input').val(ipt)

        var p_price=$(this).parent().parent().siblings('div.p-price').text()
        console.log(p_price)
        var price=p_price.substr(1,)
        console.log(price)
        $(this).parent().parent().siblings('div.p-sum').text('￥'+(price*ipt).toFixed(2))
        getSum()
    })

    $('.itxt').change(function () {
        var ipt=$(this).val()
        var p_price=$(this).parent().parent().siblings('div.p-price').text()
        console.log(p_price)
        var price=p_price.substr(1,)
        console.log(price)
        $(this).parent().parent().siblings('div.p-sum').text('￥'+(price*ipt).toFixed(2))
        getSum()
    })

    getSum()
    function getSum() {
        var count=0
        var money=0
        $('.itxt').each(function (i,ele) {
            count+=parseFloat($(ele).val())
        })
        $('.p-sum').each(function (i,ele) {
            money+=parseFloat($(ele).text().substr(1,))
        })
        $('.amount-sum em').text(count)
        $('.price-sum em').text('￥'+money.toFixed(2))
    }

    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove()
        getSum()
    })
    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove()
        getSum()
    })
    $('.clear-all').click(function () {
        $('.cart-item').remove()
        getSum()
    })
})