var questions = [
    {
        album: 'Chasing A Balloon',
        options: ['Black Cowboy', 'Covering The Moon', 'Do I Ever']
        
    },
    {
        album: 'Galatic Journey',
        options: ['I Need To Find You (feat. Jazzmin Marin)', "We ain't Them", 'Ms. Daisy', 'Forbidden Fruit (Remix)']
        
    }
];

const audio = document.getElementById('audio');
// $(document).ready(function() {
//     $('.my_button').click(function() {
//         console.log("est");
//         alert($(this).val());
//         console.log("est");
//     });
// });
  
function pause() {
    audio.pause();
}
  
function getOptions(question) {
    var $buttonDiv = $('<div></div>');
    question.options.forEach(function(opt) {
        
        var $label = $('<div class="button"></div');
        var $input = $('<input class="my_button" type="button" name="opts" value="' + opt + '"">');
        $label.append($input);
        // $label.append(opt);
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

// var getButtonValue = function($button) {
//     var label = $button.text(); 
//     $button.text('');
//     var buttonValue = $button.val();
//     $button.text(label);
//     return buttonValue;
// }



// $(document).ready(function() {
//     $('.button').click(function() {
//         alert($(this).attr("value"));
//         console.log("est");
//     });
// });


$(function() {
    $("#myModal").on('show.bs.modal', function(event) {
        showQuestion(event, $(this));
        $(document).ready(function() {
            $('.my_button').click(function() {
                console.log("test");
                var temp = $(this).val();
                audio.src = `music/${temp}.mp3`;
                audio.play();
            });
        });
    });
    
});





