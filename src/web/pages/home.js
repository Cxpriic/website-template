module.exports = {
  url: '/',
  run: (req, res, fs) => {
    const htmlPage = fs.readFileSync(`${process.cwd()}/src/web/html/home.html`);

    res
      .writeHead(200, { 'Content-type': 'text/html' })
      .end(htmlPage);
  }
}