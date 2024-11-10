var form = document.getElementById('form');
var add = document.getElementById('add');
var ul = document.getElementById('listitems');



// event listeners
add.addEventListener('click', addList);
ul.addEventListener('click', checked);

function addList(e){
    e.preventDefault();

    var input = document.getElementById('text');
    var warning = document.getElementById('add-warning');
    var toDoList = document.createTextNode(input.value);
    var ul = document.getElementById('listitems');
    var delbtn = document.createElement('span')
    
    delbtn.className ='delbtn';
    var del = document.createTextNode('x');

    if(input.value === ''){
        warning.style.display = 'block';
        setTimeout(() => {warning.style.display = 'none'}, 3000);
    }else{
        var list = document.createElement('li');
        list.className = 'list';

        list.appendChild(toDoList);
        delbtn.appendChild(del);
        list.appendChild(delbtn);
        ul.appendChild(list);

    }
    input.value = '';

}

function checked(e){
    e.preventDefault();

    var markItem = document.getElementsByClassName('list')
     var afterClick = document.getElementsByClassName('list').classList.add('::after');


    if(e.target.className === 'list'){
        console.log('hello');
        afterClick.style.display = 'block';
    }
}

