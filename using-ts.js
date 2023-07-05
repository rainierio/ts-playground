window.onload = function () {
    var button = document.querySelector("button");
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    function add(parm1, parm2) {
        return parm1 + parm2;
    }
    button.addEventListener("click", function () {
        console.log(add(+input1.value, +input2.value));
    });
};
