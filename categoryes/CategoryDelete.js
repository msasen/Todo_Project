function category_delete(e){

    // console.log(e.target.className);
    // console.log("a");
    console.log(e.target.parentElement.parentElement.id);
        if (e.target.className === "fas fa-trash"){
            e.target.parentElement.parentElement.remove();
            deleteStorage(e.target.parentElement.parentElement.id);

                
        }

    
    
}


function deleteStorage(del){
    let idarr = IDArr.getLocale();
    let categoriname = CategoriName.getLocale();
console.log(del);
for( i = 0 ; idarr.length>i;i++){
    if(`id${idarr[i]}`=== del ){
    categoriname.splice(i,1);
    idarr.splice(i,1);
    }
    
}
 localStorage.setItem("idarr",JSON.stringify(idarr));
 localStorage.setItem("categoryname",JSON.stringify(categoriname));

}