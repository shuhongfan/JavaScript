var xPos=300;
var yPos=200;
var step=1;
var delay=8;
var height=0;
var Hoffset=0;
var Woffset=0;
var yon=0;
var xon=0;
var pause=true;
var interval;
var thediv=document.getElementById('thediv')
function changePos()
{
    width=document.documentElement.clientWidth;
    height=document.documentElement.clientHeight;
    Hoffset=thediv.offsetHeight;
    Woffset=thediv.offsetWidth;
    thediv.style.left=(xPos+document.body.scrollLeft+document.documentElement.scrollLeft)+"px";
    thediv.style.top=(yPos+document.body.scrollTop+document.documentElement.scrollTop)+"px";
    if(yon)
    {
        yPos=yPos+step;
    }
    else
    {
        yPos=yPos-step;
    }
    if(yPos<0)
    {
        yon=1;
        yPos=0;
    }
    if(yPos>=(height-Hoffset))
    {
        yon=0;
        yPos=(height - Hoffset);
    }
    if(xon)
    {
        xPos=xPos + step;
    }
    else
    {
        xPos=xPos - step;
    }
    if(xPos < 0)
    {
        xon = 1;
        xPos = 0;
    }
    if(xPos >= (width - Woffset))
    {
        xon = 0;
        xPos = (width - Woffset);
    }
}
function start()
{
    thediv.visibility="visible";
    interval=setInterval('changePos()',delay);
}
function pause_resume()
{
    if(pause)
    {
        clearInterval(interval);
        pause = false;
    }
    else
    {
        interval = setInterval(changePos,delay);
        pause = true;
    }
}
thediv.onmouseenter=function() {
    pause_resume()
}
thediv.onmouseout = function(){
    pause_resume()
}
thediv.onclick = function(){
    thediv.style.display='none'
    pause_resume()
}
window.onload=function()
{
    thediv.style.top=yPos;
    start();
}
