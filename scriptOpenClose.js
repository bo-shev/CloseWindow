
function viewTime()
{
    let timeImput = document.getElementById("timeClose");
    alert(timeImput.value);    
}

function calculateTimeToEnd(timeImput)
{    
    let now = new Date()+""; 
   // timeImput = document.getElementById("timeClose");
    //var re = /\d+:\d+/;
    let reg = /\d\d:\d\d/;
    let endLesson = now.replace(reg, timeImput.value);
    
    return Date.parse(endLesson) - Date.parse(now);
}

function f(sdda) 
{
return 1000;    
}

function openSite()
{
    let timeOpen = document.getElementById("timeOpen");   
    let timeClose = document.getElementById("timeClose");
    setTimeout(() => openWindowUrl(timeClose), calculateTimeToEnd(timeOpen));//calculateTimeToEnd(timeOpen)
}

function openWindowUrl(timeCloseImput) 
{
    let Url = document.getElementById("url")
    let myWindow = window.open(Url.value);

    if (timeCloseImput == undefined)
    {
        timeCloseImput = document.getElementById("timeClose");
    }
    
    setTimeout(() => closeWindow(myWindow), calculateTimeToEnd(timeCloseImput));
}

function closeWindow(myWindow) 
{
    myWindow.close();    
}

