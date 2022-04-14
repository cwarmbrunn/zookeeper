const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../../lib/animals");

const { animals } = require("../../data/animals.json");

const router = require("express").Router();
// GET Route #1
router.get("/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// GET Route #2
router.get("/animals/:id", (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// POST

router.post("/animals", (req, res) => {
  // Set ID based on what the next index of the array will be
  req.body.id = animals.length.toString();

  // If any data in req/body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    // Add animal to JSON file and animals array in this function
    const animal = createNewAnimal(req.body, animals);
    // req.body is where our incoming content will be
    res.json(animal);
  }
});

module.exports = router;
