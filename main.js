const btn = document.querySelector(btn);
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
})
function esconde(btn) {
    document.getElementById(btn).style.display = 'none';

}

function mostra(btn){
    document.getElementById(btn).style.display = 'block';
}
function toggle(btn) {
    var display = document.getElementById(btn).style.display;
    if(display == "none"){
        document.getElementById(btn).style.display = 'block';

    }
    else{
        document.getElementById('.btn').style.display = 'none';
}}