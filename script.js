var form = document.getElementById('form');
var add = document.getElementById('add');
var ul = document.getElementById('listitems');



// event listeners
add.addEventListener('click', addList);
ul.addEventListener('click', removeItem);

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
        list.innerHTML = input.value;
        ul.appendChild(list);
        // list.className = 'list';

        // list.appendChild(toDoList);
        delbtn.appendChild(del);
        list.appendChild(delbtn);
    }
    input.value = '';
    saveData();

}

function removeItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('delbtn')){
        ul.removeChild(e.target.parentElement);
        saveData();
    }else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('list');
        saveData();
    }
}

function saveData(){
    localStorage.setItem('data', listitems.textcontent);
}

function showtask(){
    listitems.textcontent = localStorage.getItem('data');
}
showtask();

