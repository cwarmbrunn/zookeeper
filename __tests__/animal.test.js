const fs = require("fs");

const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../lib/animals");

const { animals } = require("../data/animals.json");

jest.mock("fs");
// TEST #1 - Animal Object
describe("Animal Object Creation", () => {
  test("Creates an animal object", () => {
    const animal = createNewAnimal(
      { name: "Darlene", id: "asdasdasdasd" },
      animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("asdasdasdasd");
  });
});
// TEST #2 - Filters by Query
describe("Filters by Query", () => {
  test("Filters by Query", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];

    const updatedAnimals = filterByQuery(
      { species: "gorilla" },
      startingAnimals
    );

    expect(updatedAnimals.length).toEqual(1);
  });
});

// TEST #3 - Find By ID
describe("Find By ID", () => {
  test("Finds by ID", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];

    const result = findById("3", startingAnimals);
    expect(result.name).toBe("Erica");
  });
});

// TEST #4 - Animal Personality Traits
describe("Animal Personality Traits", () => {
  test("Validates personality traits", () => {
    const animal = {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
      personalityTraits: ["quirky", "rash"],
    };

    const invalidAnimal = {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
});
