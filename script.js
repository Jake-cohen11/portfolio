document.addEventListener("DOMContentLoaded", function(event) { 
    let words = ["Web Developer", "Web Designer", "Game Developer", "Software Engineer"];
    let i = 0;
    let timer;

    function typingEffect() {
        
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('word').innerHTML += word.shift();
            } else {
                deletingEffect();
                return false;
            };
            timer = setTimeout(loopTyping, 50);
        };
        loopTyping();
    };

    function deletingEffect() {
        
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('word').innerHTML = "I'm a " + word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    };
    typingEffect();
});

