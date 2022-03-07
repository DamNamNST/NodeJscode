const http = require('http');

//tạo server
const server = http.createServer((req, res)=>{ //2 tham số dạng hàm nha (object)
  console.log("Chạy server thành công");
  //hiển thị ra requests của trình duyệt : req
  console.log("req", req.url);
  //hiển thị url của trình duyệt 
  const url = req.url;
  //thử gán cho url :
  if(url === '/product'){
    //console.log("Product Page");

    res.setHeader('Content-Type','text/html');
    res.write("<html>");
      res.write("<body>");
        res.write("<h1>Product Page</h1>");
      res.write("</body>");
    res.write("</html>");
    res.end();
  }else{
    //console.log("Home Page");
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
      res.write("<body>");
        res.write("<h1>Home Page</h1>");
      res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3001;//tùy biến cổng 

//chạy server ở PORT
server.listen(PORT,()=>{
  console.log(`Server running port ${PORT}!`);
})