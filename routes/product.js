const Product = require("../models/Product");

const router = require("express").Router();


//CREATE PRODUCT

router.post("/create",  async (req, res) => {
  // console.log(req.body);
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PRODUCT

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL PRODUCTS

router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE INCREAMENTIN AND DECREAMENTING
router.post('/:id', async (req, res) => {
 try {
  const id = req.params.id;
  const update = req.query;
  const options = {new: true};
  const result = await Product.findByIdAndUpdate(id,update,options);
  res.status(200).json(result);
 } catch (error) {
  res.status(500).json(error);
 }
});

module.exports = router;
