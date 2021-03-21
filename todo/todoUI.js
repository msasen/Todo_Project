var listBody = document.getElementById("todos-list");
class bUI{    




    
    static addCategory(value,e){
        // console.log(value);
        listBody.innerHTML +=` <li class="this-todos" id="${e}">
        <i id="menu-main" class="fas fa-align-justify text-primary"></i>
        <h5 >${value}</h5>
        <i id="delete-main"class="fas fa-trash "></i>

    </li>`
        
        
        
        
        
        
        // console.log(id);
        
    }    
}    


