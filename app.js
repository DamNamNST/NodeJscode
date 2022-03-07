const http = require('http');

//tạo server
const server = http.createServer((req, res)=>{
  console.log("Chạy server thành công");
  //hiển thị ra requests của trình duyệt : req
  console.log("req", req.url);
  //hiển thị url của trình duyệt 
  const url = req.url;
  //thử gán cho url :
  if(url === '/product'){
    console.log("Product Page");
  }else{
    console.log("Home Page");
  }
});

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`Server running port ${PORT}!`);
})