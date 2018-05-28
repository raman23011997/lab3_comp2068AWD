const connect =require('connect');
const url =require('url');

const app = connect();
const sum= (req,res,next)=>{

    const querystring=url.parse(req.url,true).query;
   const  x=querystring.x;
   const  y=querystring.y;
   const total  =parseFloat(x)+parseFloat(y);
    res.end(`
    <h1>The sum of x + y</h1>
    ${x}+${y}=${total};
    `);

};
const subtract= (req,res,next)=>{

    const querystring=url.parse(req.url,true).query;
   const  x=querystring.x;
   const  y=querystring.y;
   const total  =parseFloat(x)-parseFloat(y);
    res.end(`
    <h1>The subtraction of x + y</h1>
    ${x}-${y}=${total};
    `);

};
const multiply= (req,res,next)=>{

    const querystring=url.parse(req.url,true).query;
   const  x=querystring.x;
   const  y=querystring.y;
   const total  =parseFloat(x)*parseFloat(y);
    res.end(`
    <h1>The Multiplication of x + y</h1>
    ${x}*${y}=${total};
    `);

};
const divide= (req,res,next)=>{

    const querystring=url.parse(req.url,true).query;
   const  x=querystring.x;
   const  y=querystring.y;
   const total  =parseFloat(x)/parseFloat(y);
    res.end(`
    <h1>The Divison of x + y</h1>
     ${x}/${y}=${total};
    `);

};
const nodir= (req,res,next)=>{


    res.end(` Please Specify the dir for this`);

};


app.use('/add',sum);
app.use('/subtract',subtract);
app.use('/multiply',multiply);
app.use('/divide',divide);
app.use('/',nodir);



app.listen(3000);