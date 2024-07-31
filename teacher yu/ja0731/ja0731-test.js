let result = "";
let myBtn = document.querySelector("#btn");

myBtn.addEventListener("click", function () {
    let arrResult = [];
    let arrResultNot=[];
    let myDrinks = document.getElementsByName("drinks");
    // 逐一檢查是否被勾選
    for (let i = 0; i < myDrinks.length; i++) {
        // 有被勾選的項目 => checked
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value);
        }

        // 沒有被勾選的項目 => 使用NOT反向!
        if (!myDrinks[i].checked){
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('被勾選的項目:' + arrResult);
    console.log('沒有被勾選的項目:'+arrResultNot);

    
    // 被勾選
    let str1 = "";
    if(arrResult.length>0) {
    str1 = "<div><ul>被勾選項目";
    // 被選取的li
    
    for (let i=0; i<arrResult.length; i++) {
        str1 = str1+`<li>${arrResult[i]}</li>`;
    }

    str1 = str1 + "</ul></div>";
}

    // 沒有被勾選
    let str2 = "";
    if(arrResultNot.length>0){
    str2 = "<div><ul>沒被勾選項目";
    
    for (let i=0; i<arrResultNot.length; i++) {
        str2 = str2+`<li>${arrResultNot[i]}</li>`;
    }
    str2 = str2 + "</ul></div>";
}

// 取得顯示資料的位置
    let getDiv=document.getElementById('showData');
    getDiv.innerHTML=str1+str2;
});