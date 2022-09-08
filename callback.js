function greeting(greetingHadler,name) {
             (greetingHadler(name))
}

// const name = {name: 'saju', age: 25}

// greeting(name)

function greetingHadler(name) {
    console.log('howaday',name);
}

function greetEvening(name) {
    console.log('good evening',name)
}

function greetNight(name) {
    console.log('good night',name)
}
greeting(greetingHadler,'nadiya sara');
greeting(greetingHadler,'miraz ovro');
greeting(greetingHadler, 'thaniya');
greeting(greetEvening,'tom kali')
greeting(greetEvening,'Sir brads mithun')
greeting(greetNight,'Sir hero alam mithun')
greeting(greetNight,'Nadiya sara')