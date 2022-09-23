async function load(){
	$('#award_text').hide();
	let index = 1;
	$('#vorobey').attr("onclick", "#");
	let audio = new Audio('audio/piraty.mp3');
	audio.play();
	await sleep(1000);
	$('#final').hide();
	$('#final').attr("src","img/enemies/" + index + ".jpg");
	$('#count').show();
	for(let i = 2; i >= 0; i--){
		await sleep(1000);
		$('#count').html(i);
	}
	$('#count').hide();
	$('#title').html('Команда');
	$('#title').show();
	await sleep(1000);
	$('#title').hide();
	$('#photo').show();
	$('#award_text').show();
	for(index = 1; index <= 37; index++){
		$('#photo').attr("src","img/gallery/" + index + ".jpg");
		$('#award_text').html(crue_texts[index-1]);
		await sleep(2000);
	}
	$('#photo').hide();
	$('#award_text').hide();
	$('#title').html('Соперники');
	$('#title').show();
	await sleep(2000);
	$('#title').hide();
	index = 1;
	$('#award_text').html(enemies_texts[0]);
	$('#award_text').show();
	$('#final').show();
	await sleep(3000);
	for(index = 2; index <= 5; index++){
		$('#final').attr("src","img/enemies/" + index + ".jpg");
		$('#award_text').html(enemies_texts[index-1]);
		await sleep(3000);
	}
	$('#award_text').hide();
	$('#final').hide();
	index = 1;
	$('#final').attr("src","img/awards/" + index + ".jpg");
	$('#title').html('Награды');
	$('#title').show();
	await sleep(2000);
	$('#title').hide();
	$('#award_text').html(awards_texts[0]);
	$('#award_text').show();
	$('#final').show();
	await sleep(3000);
	for(index = 2; index <= 15; index++){
		$('#final').attr("src","img/awards/" + index + ".jpg");
		$('#award_text').html(awards_texts[index-1]);
		await sleep(3000);
	}
	$('#award_text').html("Ура, товарищи!");
	$('#final').attr("src",'img/ura.jpg');
	await sleep(2000);
	$('#final').hide();
	$('#poem').show();
	audio.pause();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let enemies_texts = [
	'Нюхлеры',
	'Ситхи',
	"Сливы-Цеппелины",
	"19:17",
	'Васаби'
];

let awards_texts = [
	"1 Инста-конкурс. Устали...",
	"Сон вознаграждён!",
	"2 Инста-конкурс. Снова устали...",
	"Отдых вознаграждён!",
	"Вечерние костюмы!",
	"Пиратские костюмы!!!",
	"Мы - Знатоки!",
	"Препоследнее место. Начало подъёма...",
	"13 место. Счастливая случайность!",
	"Бронза!",
	"Ещё Бронза!!",
	"И ещё Бронза!!!",
	'Серебро: "Назад в Школу"',
	"Золото в ранге Красавчиков!",
	"Золото в ранге Знатоков!"
];

let crue_texts = [
	"Дима",
	"Андрей",
	"Атаман",
	"Настя",
	"Стас",
	"Паша",
	"Артур",
	"Катя",
	"Ляйсан",
	"Света",
	"Алина",
	"Ира",
	"Маша",
	"Сергей Юрьевич",
	"Лена",
	"Даша",
	"Гриша",
	"Варя",
	"Самсон",
	"Денис",
	"Андрей",
	"Лена",
	"Саша",
	"Аня",
	"Сергей",
	"Лиза",
	"Рустам",
	"Нина Борисовна",
	"Андрей",
	"Лиза",
	"Алла",
	"Настя",
	"Миша",
	"Настя",
	"Гоша",
	"Лиза",
	"Эрик"
];