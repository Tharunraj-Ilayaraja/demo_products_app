//express.js

// import express from "express"

// const app = express();

// app.get("/",(req,res)=>{
//   res.send("Home Page");
// });

// app.get("/about",(req,res)=>{
//     res.send("About Page");
// })

// app.listen(3000,()=>{
//     console.log("server running at 3000");
// });

//Simple Express app

import express from "express"

const app = express();

app.use(express.json());

let products = [
    {
        pid : 1,
        pname : "books",
        price:450.28
    },
    {
        pid : 2,
        pname : "pens",
        price : 4.5
    }
]



app.get("/products",(req,res)=>{
    res.send(products);
});



app.get("/products/:id",(req,res)=>{
    const pid = Number(req.params.id);

    let product = products.find(p => p.pid === pid);
    if(product){
      res.status(200).json(product);
      return;
    }

    res.status(404).json({message :"Product Not found"});
});



app.post("products/create",(req,res)=>{

    const product = {
        pid: products.length + 1,
        pname : req.body.pname,
        price : req.body.price
    }

    products.push(product);
    res.status(201).json(product);
});



app.put("/products/:id",(req,res)=>{
    const pid = Number(req.params.id);

    const prod = products.find(p=> p.pid === pid);

    if(!prod){
        res.status(404).json({ message: " Product Not Found"});
        return;
    }

    prod.pname = req.body.pname;
    prod.price = req.body.price;
    res.json(prod);
})

app.delete("/products/:id",(req,res)=>{
      
    let pid = Number(req.params.id);
    let product = products.find(p=>p.pid === pid);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }

    products = products.filter(p=>p.pid !== pid);
    res.status(200).json({message:"Product deleted"});
})

app.listen(3000,()=>{
    console.log("server running at 3000");
});


// import express from "express";

// const app = express();

// app.use((req,res,next)=>{
//     console.log("middleware running");
//     next();
// })

// app.get("/",(req,res)=>{
//     res.send("home page");
// })

// app.listen(3000,()=>{
//     console.log("server running at 3000");
// });




