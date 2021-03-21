
class NavBarUI{

            static readLocale(){
            var categoryname = CategoriName.getLocale();
            var id = IDArr.getLocale();
        
            for(var i=0 ; i<categoryname.length;i++){
                // addTodoToUI(id[i] ,categoryname[i]);
                console.log(categoryname[i],id[i]);
                NavBarUI.addCategory(categoryname[i],id[i]);           
            }
        }


        
        static readInput()
            {
                var id = IDCounterofCategori.GetIdCounterforCategori();
                var categoryname = getcategoryname.value;
                NavBarUI.addCategory(categoryname,id);       
            }


            

     static addCategory(value,id){
         CategSelect.innerHTML +=`<li id="id${id}"> 
          <button id="button" onclick="TodoFilter.filterc(${id})"
          <i id="categ-menu" class="fas fa-align-justify text-primary "></i>
          <H6>${value} </H6>
          </button>
          <button id="del-button"> 
          <i id="delete"class="fas fa-trash"></i>
          </button>
      
  </li>`
        
        
        
        
        
     }    

}