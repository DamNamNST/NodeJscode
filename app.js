const http = require('http');

//tạo server
const server = http.createServer((req, res) => { //2 tham số dạng hàm nha (object)
  console.log("Chạy server thành công");
  //hiển thị ra requests của trình duyệt : req
  console.log("req", req.url);
  //hiển thị url của trình duyệt 
  const url = req.url;
  //thử gán cho url :
  //   if(url === '/product'){
  //     //console.log("Product Page");

  //     res.setHeader('Content-Type','text/html');
  //     res.write("<html>");
  //       res.write("<body>");
  //         res.write("<h1>Product Page</h1>");
  //       res.write("</body>");
  //     res.write("</html>");
  //     res.end();
  //   }else if(url === '/posts'){
  //     res.setHeader('Content-Type','application/json');
  //     const data = [{id: 1, name: "Post A"},{id: 2, name: "Post B"}];
  //     res.end(JSON.stringify(data));
  //   }
  //   else{
  //     //console.log("Home Page");
  //     res.setHeader('Content-Type','text/html');
  //     res.write("<html>");
  //       res.write("<body>");
  //         res.write("<h1>Home Page</h1>");
  //       res.write("</body>");
  //     res.write("</html>");
  //     res.end();
  //   }
  // });
  if (url === '/') {
    //console.log("Product Page");

    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Home Page</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (url === '/users') {
    //res.setHeader('Content-Type', 'application/json');
    //const data = [{ id: 1, name: "Post A" }, { id: 2, name: "Post B" }];
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>User Page</h1>");
    res.write("<ul><li>User1</li><li>User2</li><li>User3</li></ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
    //res.end(JSON.stringify(data));
  }
  else if (url === '/create-user') {
    res.setHeader('Content-Type', 'application/json');
    const data = [{ id: 1, name: "Post A" }, { id: 2, name: "Post B" }];
    res.end(JSON.stringify(data));
  }
  else {
    //console.log("Home Page");
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Home Page</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3002;//tùy biến cổng 

//chạy server ở PORT
server.listen(PORT, () => {
  console.log(`Server running port ${PORT}!`);
})