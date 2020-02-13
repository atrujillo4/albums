var questions = [
    {
        album: 'Chasing A Balloon',
        cover: 'Chasing A Balloon',
        year: '2013',
        options: ['White Banner (Intro)', 'Missing You Well', 'Do I Ever', 'Survive', 'Take The Time', 'You Are Not For Me', 'Wu-Tang Forever (Remix)', 'Light Up (Remix)', 'Mad City (Remix)', 'Genius', 'Freaks And Geeks (Remix)', 'Covering The Moon', 'Black Cowboy', 'What Is That Noise (Outro)']
        
    },
    {
        album: 'Galatic Journey',
        cover: 'Galatic Journey',
        year: '2014',
        options: ['I Need To Find You (feat. Jazzmin Marin)', "We Aint Them", 'Ms. Daisy', '3005', 'Forbidden Fruit (Remix)', 'Curt Kobain', 'Unforgettable (Remix)', 'Fashion Killa (Remix)', 'French Inhale', 'Go Galactic', 'Sunlight', 'Fight That Feeling', 'Strawberry Swin', 'Its Alive (Remix)', 'Tick Tock (feat. A-Aron)']
        
    },
    {
        album: "Rebellion",
        cover: "Rebellion",
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

const audio = document.getElementById('audio');
  
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
  
function showQuestion(event, $modal) {
    var button = $(event.relatedTarget);  // Button that triggered the modal
    var num = parseInt(button.data('num'));
    var question = questions[num];
    $modal.find('.modal-title').text(question.album);
    $modal.find('.modal-body').empty().append(getOptions(question));
}

$(function() {
    $("#myModal").on('show.bs.modal', function(event) {
        showQuestion(event, $(this));
        $(document).ready(function() {
            $('.my_button').click(function() {
                var temp = $(this).val();
                audio.src = `music/${temp}.mp3`;
                audio.play();
            });
        });
    });
    
});





