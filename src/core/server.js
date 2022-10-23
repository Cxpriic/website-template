module.exports = (req, res) => {
  const fs = require('fs');
  const cwd = `${process.cwd()}`;
  const url = req.url;

  fs.readdirSync(`${cwd}/src/web/pages`)
    .forEach(file => {
        const page = require(`${cwd}/src/web/pages/${file}`);
        if (req.url === page.url) {
          page.run(req, res, fs);
        }
    })
}