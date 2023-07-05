var min=0
var sec=0
var hour=0
setInterval(
    function(){
        var date=new Date()
        sec=date.getSeconds() * 6
        min=date.getMinutes() * 6
        hour=date.getHours() * 30+Math.round(min/12)
        document.getElementById('sec-hand').style.transform="rotate("+sec+'deg)'
        document.getElementById('min-hand').style.transform="rotate("+min+'deg)'
        document.getElementById('hour-hand').style.transform="rotate("+hour+'deg)'


    }
    
)
