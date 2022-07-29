beforeAll(()=>{
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html','utf-8');
    document.open();
    document.write(fileContents);
    document.close()
})

const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
})
