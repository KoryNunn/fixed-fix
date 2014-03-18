module.exports = function makeIOS7LessShit(){
    if(!['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) < 0){
        // Yay! your device isnt shit! (or it's a windows phone)
        return;
    }

    window.addEventListener('touchstart', function(event){
        window.scrollTo(window.scrollX, window.scrollY);
    });
};