// Dark mood

document.getElementById('dark').addEventListener('click', function () {
    document.getElementById('to-do-title').style.color = "white";
    var all = document.getElementsByClassName('to-do-color');
    for (let i = 0; i < all.length; i++) {
        all[i].style.color = 'white';
    };
    document.getElementById('to-do-1').style.backgroundColor = "#161618";
    document.getElementById('to-do-2').style.backgroundColor = "#161618";
    var icon = document.getElementsByClassName('count');
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'white';
    };

});

//--------------------------------

// Light mood

document.getElementById('light').addEventListener('click', function () {
    document.getElementById('to-do-title').style.color = "black";
    var all = document.getElementsByClassName('to-do-color');
    for (let i = 0; i < all.length; i++) {
        all[i].style.color = 'black';
    };
    document.getElementById('to-do-1').style.backgroundColor = "bisque";
    document.getElementById('to-do-2').style.backgroundColor = "bisque";
    var icon = document.getElementsByClassName('count');
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'black';
    };

});

//--------------------------------



//Create lists 

document.getElementById('create-list').addEventListener('click',function(){
    const list = document.getElementById('do-body');
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const i1 = document.createElement('i');
    const td = document.createElement('td'); 
    const td2 = document.createElement('td');
    const button = document.createElement('button');
 
    //Adding lists

    	const wordToDo =  document.getElementById('put-in-word').value;


//---------------

    list.appendChild(tr);
    tr.classList.add('li-list');
    tr.appendChild(i1);
    i1.classList.add('fas','fa-angle-double-right','count');
    tr.appendChild(td);
    td.classList.add('to-do-color');
    td.innerText = wordToDo;
    tr.appendChild(td2);
    td2.appendChild(button);
    button.classList.add('btn','btn-danger');
    button.innerText = 'Delete';
    document.getElementById('put-in-word').value='';
   
});


//----------------



//Delete last child

const close = document.getElementsByClassName("li-list");
for ( let i = 0; i < close.length; i++){
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  };
};




//---------------------