const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const {
 addApplication,getApplications , deleteApplication
}
=
require(
"../controllers/applicationController"
);

router.post(
"/add",
protect,
addApplication
);

router.get(
"/",
protect,
getApplications
);

router.get("/add", (req,res)=>{
  res.send("Application Route Working");
});
router.delete(
 "/:id",
 protect,
 deleteApplication
);

module.exports=router;