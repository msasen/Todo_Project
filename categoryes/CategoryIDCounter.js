class IDCounterofCategori{

    static GetIdCounterforCategori()
    {   let id;
        if (localStorage.getItem("id") === null){
              id = 4;
        
        
        }
        else{

            id = JSON.parse(localStorage.getItem("id"));
            // console.log("b")
        }
        return id;
    }
    static IDCounter()
    {
             var id = IDCounterofCategori.GetIdCounterforCategori();
        
             id++;
            //  console.log("a");
             localStorage.setItem("id",JSON.stringify(id));
             IDArr.addLocale(id);
    }


    static readidCounter(){
        let id = IDCounterofCategori.GetIdCounterforCategori();

        
        //UI.addCategory(id);
            
        
    }
}






