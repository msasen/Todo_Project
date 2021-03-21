class todoIDArr{

   
    static getLocale(){
        let todoarr;
        if (localStorage.getItem("todoarr") === null){
            todoarr = [];
        }
        else{todoarr = JSON.parse(localStorage.getItem("todoarr"));

            // console.log(idarr);
        }
    return todoarr;
    }

    static addLocale(e){
        console.log(e);
        var todoarr = todoIDArr.getLocale();
        todoarr.push(e);
        localStorage.setItem("todoarr",JSON.stringify(todoarr));
    }
    //     if(TodoNameSelect.value == undefined)
    //     {
    //         TodoNameSelect.innerHTML =`Kategori Seçiniz`;
    //     }
    // TodoNameSelect.innerHTML =`${id}`;
    
 


























}