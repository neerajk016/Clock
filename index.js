setInterval(() => {
    
    d=new Date();
    // console.log(d);
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hr=30*h+m/2;
    mr=6*m;
    sr=6*s;
    c1.style.transform=`rotate(${hr}deg)`;
    c2.style.transform=`rotate(${mr}deg)`;
    c3.style.transform=`rotate(${sr}deg)`;
}, 1000);



setInterval(() => {
    const d=new Date();
    
    document.getElementById("h").innerHTML=d.getHours()+":";
    document.getElementById("m").innerHTML=d.getMinutes()+":";
    document.getElementById("s").innerHTML=d.getSeconds();
}, 1000);