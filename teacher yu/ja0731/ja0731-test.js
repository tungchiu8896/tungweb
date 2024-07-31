let result = "";
let myBtn = document.querySelector("#btn");

myBtn.addEventListener("click", function () {
    let result = "";
    let myDrinks = document.getElementsByName("drinks");
    for (let i = 0; i < myDrinks.length; i++) {
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value);
        }
        if (!myDrinks[i].checked){
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('被勾選的項目:' + arrResult);
    console.log('沒有被勾選的項目:'+arrResultNot);

    let getDiv=document.getElementById('showData');
    getDiv.innerHTML='<h1>test</h1>';
});