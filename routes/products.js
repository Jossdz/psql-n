const { Router } = require("express");
const router = Router();
const {
  createProduct,
  deleteProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controllers/products");
const catchErrors = require("../middlewares/catchErrors");

router
  .route("/")
  .get(catchErrors(getAllProducts))
  .post(catchErrors(createProduct));

router
  .route("/:id")
  .get(catchErrors(getSingleProduct))
  .put(catchErrors(updateProduct))
  .delete(catchErrors(deleteProducts));

module.exports = router;
