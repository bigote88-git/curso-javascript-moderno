const programmerLanguage = ['Java', 'C#', 'JavaScript', 'SQL'];

console.warn('For tradicional');

for (let i = 0; i < programmerLanguage.length; i++) {
    console.log(programmerLanguage[i]);
}

console.warn('For in');
for (let i in programmerLanguage) {
    console.log(programmerLanguage[i]);
}

console.warn('For of');
for (let item of programmerLanguage) {
    console.log(item);
}