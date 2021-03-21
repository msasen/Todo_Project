class IDArr{
        static getLocale(){
            let idarr;
            if (localStorage.getItem("idarr") === null){
                idarr = [];
            }
            else{idarr = JSON.parse(localStorage.getItem("idarr"));
    
                // console.log(idarr);
            }
        return idarr;
        }
    
        static addLocale(e){
            var idarr = IDArr.getLocale();
            idarr.push(e);
            localStorage.setItem("idarr",JSON.stringify(idarr));
        }
    
        // static readLocale(){
        //     let idarr = Storage.getLocale();
    
        //     idarr.forEach(idarr => {
        //         UI.addCategory(idarr);
                
        //     });
        // }
        // static localeDelete(e){
    
        // }
    // console.log(idarr);
    //         localStorage.setItem("idarr",JSON.stringify(idarr));  
    
    //         console.log(idarr);
    
    //         var idarral=JSON.parse(localStorage.getItem("idarr"));
    
    //         console.log(idarral);
    
    //     }  
    
    }
    

