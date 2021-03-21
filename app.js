//Kullanıcının girdiği kategori adını yakalar.
//Kullanıncının girdiği kategori adını lokale yazar.

var getcategoryname = document.getElementById("input-categ");

var getcategoryq = document.getElementById("input-categ");

getcategoryq.addEventListener("click",tıklandı);

function tıklandı(e){
    console.log("a");
    console.log(e);
}


//------------------------------------------------------------//
// Kategoriler için özgün id üreten counter(sayaç) fonksiyon zincirlerini tektikler.
//Kategoriler için üretilen özgün ID'leri lokalde depolayan fonksiyon zincirini tetikler.
var addCategories = document.getElementById("add");
addCategories.addEventListener("click",categoryStarter);


//Add kategori tuşuna basıldığında tetiklenecek fonksiyonlar;
function categoryStarter(){
    //ID sayacını çalıştırır.
    //Yeni Id'yi lokaldekiyle günceller.
    IDCounterofCategori.IDCounter();
    //Kullanıcıdan kategori adını alır.
    //Alınan kategori lokaldeki categoryName[] dizisine string olarak yazılır. 
    CategoriName.addLocale(getcategoryname.value);//
    //Oluşturulan veriler okunmak ve sonraki adımda UI'ya yazılmak üzere lokalden okunur.  
    NavBarUI.readInput();
}


//-----------------------------------------------------------//
//Kategorilerin ekleneceği html satırı seçilir.
//Seçilen yer category selecte atanır.
var CategSelect =document.getElementById("categ");

//Her web sayfası yenilendiğinde UI'a, kategorileri lokalden ekler.
//Arayüze eklenen kategorilerle önceden  belirlenen özagün IDleri eşleştirilir.
NavBarUI.readLocale();






//Todo kategori adını seçme
//Todo kategori adını güncelleme
var TodoNameSelect = document.getElementById("todolar");



//Kategorileri UI'dan silme.
//Kategorileri local'den silme.
var categselecta = document.getElementById("categ");

categselecta.addEventListener("click",category_delete);



//TODO'ları UI'a basar.
//Basılan bu todoları local'e kaydeder.
//Yazılan todoları lokalden alır.
var inputBody = document.getElementById("input-categ-second");
var addBody = document.getElementById("add-body");
addBody.addEventListener("click",TodoFilter.Getcategory);
BodyStorage.readLocale();




// var todos_list = document.getElementById("categ");
// todos_list.addEventListener("click",TodoFilter.filter);



 var todo_del = document.getElementById("todos-list");
 todo_del.addEventListener("click",todo_delete);
 //----------------------------------------------------------//



 TodoFilter.filterc(1); 

 var favor = document.getElementById("fav");
 favor.addEventListener("click",TodoFilter.fav);