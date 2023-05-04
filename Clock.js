function Clock(){
    let Clock=document.getElementById("Clock");
    setInterval(
        ()=>{
            let hour=new Date()
            Clock.innerText=hour.toLocaleTimeString();
        }, 1000
    )
}

Clock();

