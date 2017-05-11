/**
 * Created by hasee on 2017/5/10.
 */
function showTable() {
    var index = $(this).index();
    $('.table').css('display','none');
    $('.num').css('display','none');
    if(index == 0){
        $('.num').css('display','block');
    }
    $('.table').eq(index).css('display','block');
}

$(function () {
    //获取jQuery对象
    var navItem = $('.tab-nav li');

    //绑定事件
    navItem.bind('click',showTable);
});
//轮播事件
$(function () {
    var i = 0;//命名不好，谁知道i的作用？



    var size = 3;




    $(".num li").first().addClass("on");

    /*自动轮播*/

    var t = setInterval(function () {
        i++;
        move();
    }, 2000);

    /*鼠标悬停事件*/

    $(".content-left").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () {
            i++;
            move();
        }, 2000); //鼠标移出时清除定时器
    });


    /*鼠标滑入原点事件*/

    $(".num li").hover(function () {
        var index = $(this).index();//获取当前索引值
        i = index;
        $(".content-left .works").stop().animate({left: -index * 724}, 500);
        $(this).addClass("on").siblings().removeClass("on");
    });


    /*向左按钮*/
    $(".banner .btn_l").click(function () {
        i++;
        move();
    })


    /*向右按钮*/
    $(".banner .btn_r").click(function () {
        i--;
        move();
    })

    /*移动事件*/
    function move() {
        if (i == size) {
            $(".content-left .works").css({left: 0});
            i = 1;
        }
        if (i == -1) {
            $(".content-left .works").css({left: -(size - 1) * 724});
            i = size - 2;//因为多添了一个li所以是减2,而不是减1
        }
        $(".content-left .works").stop().animate({left: -i * 724},600);
        /*同时更新num圆点样式*/
        if (i == size - 1) {
            $(".num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
})