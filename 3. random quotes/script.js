function generate() {
    var quotes = {
        "- Theodore Roosevelt" : '"Believe you can and you\'re halfway there."',
        "- Martin Luther King, Jr." : '"Hatred never wins. Only love can."',
        "- Nelson Mandela" : '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "- Christian D. Larson" : '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."',
        "- Mahatma Gandhi" : '"Be the change that you wish to see in the world."',
        "- Winston Churchill" : '"The only thing stopping you is the only thing stopping the world - the idea that you can\'t make a difference."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}