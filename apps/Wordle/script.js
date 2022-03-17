import {require} from 'r.js';
    console.log('inicio')
    const fs = require('fs')
      
    // Data which will write in a file.
    let data = "Learning how to write in a file."
      
    // Write data in 'Output.txt' .
    fs.writeFile('words.txt', data, (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })
    
    console.log('fin')