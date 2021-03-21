function todo_delete(e){

     console.log(`${e.target.className} == fas fa-trash`);
     var a = "fas fa-trash"
     if (e.target.className == "fas fa-trash "){
            console.log("a");
            e.target.parentElement.remove();
            tododeleteStorage(e.target.parentElement.id);

     }    
        else{console.log("a");
    }

    
    
}


function tododeleteStorage(del){
    let idarr = todoIDArr.getLocale();
    let todoName = BodyStorage.getLocale();
console.log(`del=${del}`);
for( i = 0 ; idarr.length>i;i++){
    if(`${idarr[i]}`=== del ){
    todoName.splice(i,1);
    idarr.splice(i,1);
    }
    
}
 localStorage.setItem("todoarr",JSON.stringify(idarr));
 localStorage.setItem("bodylocale",JSON.stringify(todoName));

}