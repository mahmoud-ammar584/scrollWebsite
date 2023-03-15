let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let MA = document.querySelector('.ma');
window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 2 + 'px';
    if(scrollY >= 67){
        MA.style.fontSize = 67 + 'px';
        MA.style.position = 'fixed';
        if(scrollY >= 478){
            MA.style.display = 'none';
        }else{
            MA.style.display = 'block';
        }
    }else{
        MA.style.fontSize = '10px';  
    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200216 ,#10001f )';
  
    }

}