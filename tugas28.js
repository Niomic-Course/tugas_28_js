function panggilRegex() { 
    let str = "abcdefghijklmnopqrstuvwxyz";
    return 'Urut ke: ' + str.search(/s/);
}

console.log(panggilRegex());
