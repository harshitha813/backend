module.exports=app=>{
      const consttabs=require("../controllers/consti.controller.js");
      var router=require("express").Router();
  
      
      router.post("/",consttabs.create);
    
      router.get("/",consttabs.findAll);
      router.get("/:id",consttabs.findOne);
      router.put("/:id",consttabs.update);
      router.delete("/:id",consttabs.delete);
      router.delete("/",consttabs.deleteAll);
  
      app.use("/api/consttabs",router);
  }