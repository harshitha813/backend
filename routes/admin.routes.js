module.exports=app=>{
      const admintabs=require("../controllers/admin.controller.js");
      var router=require("express").Router();
  
      router.post("/",admintabs.create);
    
      router.get("/",admintabs.findAll);
      router.get("/:id",admintabs.findOne);
      router.put("/:id",admintabs.update);
      router.delete("/:id",admintabs.delete);
      router.delete("/",admintabs.deleteAll);
  
      router.use("/api/admintabs",router);
  }