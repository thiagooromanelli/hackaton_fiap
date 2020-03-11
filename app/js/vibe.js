$("#btnvibe").click(function(){

    var str = $("#selectvibe").val();
    if(str == "1"){
        //window.location.replace("resultsbars.html");
        window.location.href = "resultsbars.html";
    }
    if(str == "2"){
        //window.location.replace("resultsclubs.html");
        window.location.href = "resultsclubs.html";
    }
});