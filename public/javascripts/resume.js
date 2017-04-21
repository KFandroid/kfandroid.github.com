/**
 * Created by hasee on 2017/4/18.
 */
function showSkillDetail(){
    var firstChild = this.firstChild;//所传参数不能传参
    while(firstChild.nodeType !== 1)
     firstChild = firstChild.nextSibling;
    firstChild.style.display === 'block'?firstChild.style.display='none':firstChild.style.display='block';

}

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

(function(){
    if(document.getElementsByClassName) {//getElementsByClassName ie9+
        var skills = getElementsByClassName('skill-name');
    }
    var skillsLength = skills.length;

    for(var i = 0; i < skillsLength; i++){
         if(addEventListener){  //ie9+
             skills[i].addEventListener('click',showSkillDetail);//不能传参
         }else{
             skills[i].attachEvent('onclick',showSkillDetail);
         }
    }
})();

