/**
 * Created by hasee on 2017/4/18.
 */

// function showRocket(){
//
//     document.getElementById('quick-return').style.display = 'inline-block';
// }
//
// function showSkillDetail(){
//     var firstChild = this.firstChild;//所传参数不能传参
//     while(firstChild.nodeType !== 1)
//      firstChild = firstChild.nextSibling;
//     firstChild.style.display === 'block'?firstChild.style.display='none':firstChild.style.display='block';
//
// }
//为以后兼容低版本ie做准备,目前可复用性不行
function getElementsByClassName(className,tagName){
    var els;
    if(document.getElementsByClassName) {//getElementsByClassName ie9+
         els = document.getElementsByClassName(className);
    }else{
        var all = document.getElementsByTagName(tagName||'*');
        var allLength = all.length;
            els = [];
        for(var i = 0; i < allLength; i++){
            if(all[i].className === className){
                els[els.length] = all[i];
            }
        }
    }
    return els;
}
//绑定技能展示的点击事件
// (function(){
//
//         var skills = getElementsByClassName('skill-name');
//
//     var skillsLength = skills.length;
//下面的判断进行绑定封装一下
//     for(var i = 0; i < skillsLength; i++){
//          if(addEventListener){  //ie9+
//              skills[i].addEventListener('click',showSkillDetail);//不能传参
//          }else{
//              skills[i].attachEvent('onclick',showSkillDetail);
//          }
//     }
// })();

//给window.onScroll绑定事件
// (function(){
//     window.onscroll =
// })();

    function showMenu() {
        var floatMenu = getElementsByClassName('float-menu')[0];
        floatMenu.style.display === 'block'?floatMenu.style.display='none':floatMenu.style.display='block';


    }


    (function () {

    var menuButton = getElementsByClassName('header-button')[0];
    if(addEventListener){  //ie9+
             menuButton.addEventListener('click',showMenu);//不能传参
         }else{
             menuButton.attachEvent('onclick',showMenu);
         }
        doucment.onmousedown = function () {
            alert(1);
        }
    })();