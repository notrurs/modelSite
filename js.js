window.onload=function(){
    var elements = document.querySelectorAll("a");
    Array.prototype.forEach.call(elements, function(el, i){
        el.addEventListener('click', function(e){
            e.preventDefault();
        });
    });
};