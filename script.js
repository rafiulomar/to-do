// Dark mood

document.getElementById('dark').addEventListener('click',function(){
    document.getElementById('to-do-title').style.color = "white";
    var all = document.getElementsByClassName('to-do-color');
    for (let i = 0; i < all.length; i++) {
        all[i].style.color = 'white';
    };
    document.getElementById('to-do-1').style.backgroundColor = "#161618";
    document.getElementById('to-do-2').style.backgroundColor = "#161618";
    var icon = document.getElementsByClassName('count');
    for(let i = 0;i<icon.length;i++){
        icon[i].style.color='white';
    };

});

//--------------------------------

// Light mood

document.getElementById('light').addEventListener('click',function(){
    document.getElementById('to-do-title').style.color = "black";
    var all = document.getElementsByClassName('to-do-color');
    for (let i = 0; i < all.length; i++) {
        all[i].style.color = 'black';
    };
document.getElementById('to-do-1').style.backgroundColor = "bisque";
document.getElementById('to-do-2').style.backgroundColor = "bisque";
var icon = document.getElementsByClassName('count');
for(let i = 0;i<icon.length;i++){
    icon[i].style.color='black';
};

});

//--------------------------------