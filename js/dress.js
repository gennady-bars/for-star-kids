let count = 0;
let limit = 16;

loadMore();

function loadMore() {	
	let block = Array(12).fill(0).map(x => count < limit? `<div class="col-md-4 col-lg-3 col-sm-6">
	<div class="card">
	  <img src="img/dress${++count}.jpg"  alt="..." />
	  <div class="card-body">
		<h3 class="post-category">Какое-то название</h3>
		<h5 class="post-title"> еще что-то</h5>
		<p class="card-text">
		  описание чего-то
		</p>
	  </div>
	</div>
  </div>`:'');
  
  $('#load-more').append(block);

}

  $(window).scroll(function(){
	let targetBlock = $('.after-posts');
	let targetPos = targetBlock.offset().top;
	let winHeight = $(window).height();
	let scrollToElem = targetPos - winHeight;
  	let winScrollTop = $(this).scrollTop();
  	if(winScrollTop > scrollToElem && count < limit){
		loadMore();
  	}
  });

  function showMobile() {
    $('.hide').text('3898445');
    
    $('.show-mobile').hide();
}

$('.show-mobile').on('click', showMobile)