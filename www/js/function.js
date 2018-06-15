function ativaPage(){
	$('.targetPage').click(function(){
		var target = $(this).attr('dt-page');
		$('.page').removeClass('page-active');
		$(target).addClass('page-active');
		});
}
function ativaBtn(){
	$('.targetBtn').click(function(){
		var target = $(this).attr('dt-btn');
		$('.container-audio').removeClass('btn-active');
		$(target).addClass('btn-active');
		});
}
function ativaBtnPlay(){
	$('.targetBtnPlay').click(function(){
		var target = $(this).attr('dt-btn');
		$('.container-play').removeClass('btn-active-play');
		$(target).addClass('btn-active-play');
		});
}


ativaPage();
ativaBtn();
ativaBtnPlay();