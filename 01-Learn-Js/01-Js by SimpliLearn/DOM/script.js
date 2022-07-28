document.addEventListener('DOMContentLoaded'),function(){
    
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //add movie

    //creating elements- add text content -add classes - append to dom


    const addForm = forms["add-movie"];
    addForm.addEventListener("submit",function(e){
        e.preventDefault();
    

    //creating element

    const value = addForm.querySelector('input[type="text"]').value;
    const li =document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //text content

    movieName.textContent = value;
    deleteBtn.textContent = 'delete';

    //add classes

    movieName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM

    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    li.appendChild(li);
    
    });
}
