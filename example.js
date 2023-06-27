let limit = 180; // Você pode definir o limite de quantos Likes deseja dar até parar, cuidado para não sofrer bloqueios, use com moderação
let counts = 0;
let timer_on = 0;
function IntervalTime(){
     function randomIntFromInterval(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min)
        };

    let rndInt = randomIntFromInterval(1000, 3000); // Intervalo de tempo entre os Likes, aqui varia entre 1 - 3 segundos
    if (!timer_on) {
      likeStart();
      setTimeout(IntervalTime, rndInt);
    };
};

IntervalTime();

function likeStart(){ 

    const likeLength = document.querySelectorAll('ytd-toggle-button-renderer[id="like-button"]>yt-button-shape>button[aria-pressed="false"].yt-spec-button-shape-next.yt-spec-button-shape-next--text.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-s.yt-spec-button-shape-next--icon-button.yt-spec-button-shape-next--override-small-size-icon');


    if (likeLength.length == 0 || limit == 0) {
        likeStop();
        console.log("Parou!");
    };


    const coracao = document.querySelector('ytd-toggle-button-renderer[id="like-button"]>yt-button-shape>button[aria-pressed="false"].yt-spec-button-shape-next.yt-spec-button-shape-next--text.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-s.yt-spec-button-shape-next--icon-button.yt-spec-button-shape-next--override-small-size-icon>div.yt-spec-button-shape-next__icon').parentNode;
        if (coracao) {
            coracao.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
            coracao.click()
            console.log(`Você curtiu ${counts} post(s)`);
            console.log(`Faltam ${limit} post(s)`);
            counts++;
            limit--;
            };
        };

          function likeStop(){
            timer_on = 1;
        };
