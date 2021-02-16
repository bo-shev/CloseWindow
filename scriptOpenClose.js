
window.onload = function currentTime()
{    
    document.getElementById("time").value = new Date();
}

function viewTime()
{
    let timeImput = document.getElementById("time");
    alert(timeImput.value);    
    calculateTimeToEnd();
}

function calculateTimeToEnd()
{
    let timeImput = document.getElementById("time");
    let now = new Date()+""; 

    //var re = /\d+:\d+/;
    let reg = /\d\d:\d\d/;
    let endLesson = now.replace(reg, timeImput.value);
    
    return Date.parse(endLesson) - Date.parse(now);
}

function openWindowUrl() 
{
    let Url = document.getElementById("url")
    let myWindow = window.open(Url.value);
    setTimeout(() => closeWindow(myWindow), calculateTimeToEnd());
}

function closeWindow(myWindow) 
{
    myWindow.close();    
}

