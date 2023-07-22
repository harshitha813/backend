module.exports=app=>{
      const newusertabs=require("../controllers/newuser.controller.js");
      var router=require("express").Router();
  
      
      router.post("/",newusertabs.create);
    
      router.get("/",newusertabs.findAll);
      router.get("/:id",newusertabs.findOne);
      router.put("/:id",newusertabs.update);
      router.delete("/:id",newusertabs.delete);
      router.delete("/",newusertabs.deleteAll);
  
      app.use("/api/newusertabs",router);
  }