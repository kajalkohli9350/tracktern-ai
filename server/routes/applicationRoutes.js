const express =
require("express");

const router =
express.Router();

const {
 addApplication
}
=
require(
"../controllers/applicationController"
);

router.post(
"/add",
addApplication
);

module.exports=router;