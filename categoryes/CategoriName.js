class CategoriName{

    
        static getLocale(){
            let categoryname;
            if (localStorage.getItem("categoryname") === null){
                categoryname = [];
            }
            else{categoryname = JSON.parse(localStorage.getItem("categoryname"));
    
                // console.log(categoryname);
            }
        return categoryname;
        }
    
        static addLocale(e){
            var categoryname = CategoriName.getLocale();
            categoryname.push(e);
            localStorage.setItem("categoryname",JSON.stringify(categoryname));
        }
    
        // static readLocale(){
        //     let categoryname = Storage.getLocale();
    
        //     categoryname.forEach(categoryname => {
        //         UI.addCategory(categoryname);
                
        //     });
        // }
        // static localeDelete(e){
    
        // }
    // console.log(categoryname);
    //         localStorage.setItem("categoryname",JSON.stringify(categoryname));  
    
    //         console.log(categoryname);
    
    //         var categorynameal=JSON.parse(localStorage.getItem("categoryname"));
    
    //         console.log(categorynameal);
    
    //     }  
    
}
