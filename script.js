let block_size=window.innerWidth/20;
for(i=0;i<20;i++){
    let block = $('<div class="block"></div>');
    block.css({width : block_size,height:block_size});
    $('.container').append(block);
}

anime({
    targets:'.block',
    height:'100%',
    easing:'easeInOutQuad',
    direction:'alternate',
    duration:1000,
    loop:false,
    delay:anime.stagger(50)
});

anime({
    targets:'.container',
    backgroundColor:'#FFF',
    duration:1,
    delay:2000
});
anime({
    targets:'.block',
    opacity:[1,0],
    duration:10000,
    delay:3000,
    loop:false
});
