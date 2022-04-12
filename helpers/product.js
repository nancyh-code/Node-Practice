const fs = require('fs');

const createFile = async (base = 5, list = false, until = 5) => {
  // return new Promise((resolve, reject) => {
  try {
    let result = '';

    for (let i = 1; i <= until; i++) {
      result += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log('===============');
      console.log('Table del', base);
      console.log('===============');
      console.log(result);
    }

    // fs.writeFile(`table-${base}.txt`, result, (err) => {
    //   if (err) throw err;
    //   console.log(`table-${base}.txt created successfully`);
    // });
    fs.writeFileSync(`./exit/table-${base}.txt`, result);

    return `table-${base}.txt`;
    // });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  // function: createFile,
  //createFile: createFile,
  createFile,
};
