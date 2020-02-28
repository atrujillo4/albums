const musicContainer = document.getElementById('music-container');
const footer = document.getElementById('modal-footer');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const stopBtn = document.getElementById('stop');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('music-cover');

const headline = document.getElementById('headline');

var questions = [
    {
        album: 'Chasing A Balloon',
        cover: 'Genius',
        year: '2013',
        options: ['White Banner (Intro)', 'Missing You Well', 'Do I ever', 'Survive', 'Take The Time', 'You Are Not For Me', 'Wu-Tang Forever (Remix)', 'Light Up (Remix)', 'Mad City (Remix)', 'Genius', 'Freaks And Geeks (Remix)', 'Covering The Moon', 'Black Cowboy', 'What Is That Noise (Outro)']
        
    },
    {
        album: 'Galatic Journey',
        cover: '3005',
        year: '2014',
        options: ['I Need To Find You (feat. Jazzmin Marin)', "We Aint Them", 'Ms. Daisy', '3005', 'Forbidden Fruit (Remix)', 'Curt Kobain', 'Unforgettable (Remix)', 'Fashion Killa (Remix)', 'French Inhale', 'Go Galactic', 'Sunlight', 'Fight That Feeling', 'Strawberry Swin', 'Its Alive (Remix)', 'Tick Tock (feat. A-Aron)']
        
    },
    {
        album: "Rebellion",
        cover: "Fly_Away",
        year: "2014",
        options: ['Day Keeper', 'Anyone Else', 'Heart Attack', 'Lifted', 'Revolution', 'Fly Away', 'Sing About Me', 'I Can Be', 'Lets Get It Babe', 'Telegram', 'Melrose', 'Big Spender', 'Paperchaser', 'Losing My Balance', 'Sophisticated', 'Voodoo', 'Tribe', 'Shawty Say']
    }, 
    {
        album: "Lost",
        cover: "Lost",
        year: "2015", 
        options: ['Akia', 'Get Lifted', 'I Dont Know You', 'Leave Me Alone', 'My Dream', 'Stacys Room', 'Whats Real', 'Wolf', 'Work']
    }

];


  
function pause() {
    audio.pause();
}
  
function getOptions(question) {
    var $buttonDiv = $('<div></div>');
    question.options.forEach(function(opt) {
        
        var $label = $('<div class="button"></div');
        var $input = $('<input class="my_button" type="button" name="opts" value="' + opt + '"">');
        $label.append($input);
        $buttonDiv.append($label);
    });
    return $buttonDiv;
}
  
// Display Song Name
function displayNewSongInfo(){
    var obj = album1.songs[songIndex].songname;
    console.log(obj);
    headline.innerHTML = obj;
}

// Pause song 
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function showQuestion(event, $modal) {
    var button = $(event.relatedTarget);  // Button that triggered the modal
    var num = parseInt(button.data('num'));
    var question = questions[num];
    albumpicked = `img/${question.cover}.jpg`;
    $modal.find('.modal-title').text(question.album);
    // if(title == ''){
    //     title.innerHTML = question.options[0];
    // }
    
    $modal.find('.modal-body').empty().append(getOptions(question));
}

var albumpicked = '';

$(function() {
    $("#myModal").on('show.bs.modal', function(event) {
        showQuestion(event, $(this));
        $(document).ready(function() {
            $('.my_button').click(function() {
                var temp = $(this).val();
                cover.src = albumpicked;
                title.innerHTML = temp;
                audio.src = `music/${temp}.mp3`;
                footer.classList.add('play');
                audio.play();
            });
        });
    });
    
});
// Update progress bar
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}


// Set progress bar
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;

}

stopBtn.addEventListener('click', () => {
    footer.classList.remove('play');
});


// // Event Listeners 
// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if(isPlaying){
//         pauseSong();
//     } else{
//         playSong();
//     }
// });

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);



