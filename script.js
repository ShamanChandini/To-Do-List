let input=document.querySelector('.enter-list');
let addBtn=document.querySelector('.add-list');
let tasks=document.querySelector('.tasks');

input.addEventListener('keyup', ()=>{
    if(input.value.trim()!=0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})

//add new item to list

addBtn.addEventListener('click',()=>{
    if(input.value.trim()!=0){
        let newItem= document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=`<p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-trash-can"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value='';
    }else{
        alert('Please enter a task')
    }
})

//delete item from list
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash-can')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark items as completed
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-check')
    ){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})