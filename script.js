$(document).ready(function(){
    // banner

    
    // memes
    var hid2 = 0;
    $("#picme1").hover(function(){
        document.getElementById("meowzers").style.display = "none";
        $('#meowzers').show();
        hid2 = 1;
        },
        function(){$('#meowzers').hide()
        hid2 = 0;
    })
    var hid = 0;
    $("#picme1").click(function(){
        document.getElementById("meowzers2").style.display = "none";
        if(hid == 0){
            $('#meowzers2').show();
            hid++;
        }
        else{
            $('#meowzers2').hide();
            hid--;
        }
    })
})
