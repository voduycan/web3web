var isShow= true;
$('#menu-item').addClass('dis-none');   
function show(){
    if(isShow==true){
    $('#menu-item').removeClass('dis-none');
    $('#menu-item').addClass('dis-block');
    }
    if(isShow==false){
        $('#menu-item').removeClass('dis-block');
        $('#menu-item').addClass('dis-none');
    }
    isShow = !isShow;
}