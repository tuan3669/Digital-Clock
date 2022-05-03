// ung dung dong ho bam gio

function init(){
    let timer=setInterval(()=>{
        let clock=document.getElementById("clock-text")
        var date=new Date()
    
       var h= date.getHours()
       var m =date.getMinutes()
       var s= date.getSeconds()
       var p=document.getElementById("clock-periods")
       if(h>=12){
        p.innerText="PM"
       }
       else{
        p.innerText="AM"
       }
       clock.innerText=`${h}:${m}:${s}`
     
    },1000)
}
