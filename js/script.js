async function load(){
	$('#vorobey').attr("onclick", "#");
	let audio = new Audio('audio/piraty.mp3');
	audio.play();
	await sleep(1000);
	$('#final').hide();
	$('#final').attr("src",'img/ura.jpg');
	$('#count').show();
	for(let i = 4; i >= 0; i--){
		await sleep(1000);
		$('#count').html(i);
	}
	$('#count').hide();
	$('#photo').show();
	for(let index = 1; index <= 19; index++){
		$('#photo').attr("src","img/gallery/" + index + ".jpg");
		await sleep(2000);
	}
	$('#photo').hide();
	$('#final').show();
	await sleep(2000);
	audio.pause();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}