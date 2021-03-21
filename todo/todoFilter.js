class TodoFilter{
    static filterc(e){

    TodoFilter.filter(e);
    TodoFilter.filtera(e);

    }

    static filter(id){
        let counter;
        console.log("todo filter  çalıştı");
        var idd=id;
        if (localStorage.getItem("counter") === null){
              counter = 1;
        
              console.log("b");
        
        }

            localStorage.setItem("counter",idd);

            console.log("a");
            return counter;

        
    }

    
    
    static Getcategory() {//tıklama algılama başarılı
        var counter = localStorage.getItem("counter");       
        bUI.addCategory(inputBody.value,counter);
        todoIDArr.addLocale(counter);
        BodyStorage.addLocale(inputBody.value,counter);
    }

    static filtera(idvalue){

        console.log(`filter= id${idvalue}`);//Filtreleme değeri
        const listTodos = document.querySelectorAll(".this-todos");
        listTodos.forEach(e => {
            if(e.id == idvalue){
                e.setAttribute("style",` margin: 0.4rem 
                border-radius: 1rem padding-left: 1rem
                margin-top: 2rem
                padding-right: 1rem
                background-color:#ffffff1f
                height: 5.5rem
                width: 60rem
                padding-top:0.9rem 
                display: flex
                justify-content: space-between
                flex-wrap: wrap
                align-content:center;`)
                console.log(`if içi ${e.id} =?= ${idvalue}`);
            }else
            {
                console.log(`else içi ${e.id} =?= ${idvalue}`);
                e.setAttribute("style","display : none !important");
            }
            
        });
        
        
    }    
    
    
    
    static fav(){
        const listTodos = document.querySelectorAll(".this-todos");
        listTodos.forEach(e => {
            e.setAttribute("style",` margin: 0.4rem 
            border-radius: 1rem padding-left: 1rem
            margin-top: 2rem
                                            padding-right: 1rem
                                            background-color:#ffffff1f
                                            height: 5.5rem
                                            width: 60rem
                                            padding-top:0.9rem 
                                            display: flex
                                            justify-content: space-between
                                            flex-wrap: wrap
                                            align-content:center;`);
    
            });
        
         
       
    
      
    }

}