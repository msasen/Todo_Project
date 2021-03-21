class BodyStorage{

    static getLocale(){
        let bodylocale;
        if (localStorage.getItem("bodylocale") === null){
            bodylocale = [];
        }
        else{bodylocale = JSON.parse(localStorage.getItem("bodylocale"));

            // console.log(bodylocale);
        }
    return bodylocale;
    }

    static addLocale(e){
        var bodylocale = BodyStorage.getLocale();
        bodylocale.push(e);
        localStorage.setItem("bodylocale",JSON.stringify(bodylocale));
    }

    static readLocale(){
        var idarr = todoIDArr.getLocale();
        let bodylocale = BodyStorage.getLocale();
        for(var i=0 ; i<idarr.length;i++){
            bUI.addCategory(bodylocale[i],idarr[i]);           
        }
    }
    // static localeDelete(e){

    //
 }
// console.log(bodylocale);
//         localBodyBodyStorage.setItem("bodylocale",JSON.stringify(bodylocale));  

//         console.log(bodylocale);

//         var bodylocaleal=JSON.parse(localBodyBodyStorage.getItem("bodylocale"));

//         console.log(bodylocaleal);

//     }  
