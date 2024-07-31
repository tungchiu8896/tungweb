let myBtn = document.querySelector("#btn");

myBtn.addEventListener("click", function () {
    let result = "";
    let subjects = document.getElementsByName("subject");
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            result = subjects[i].value;
            break;
        }
    }
    console.log("科目:" + result);
});
