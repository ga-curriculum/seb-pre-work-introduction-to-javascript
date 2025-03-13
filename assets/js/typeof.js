describe('Typeof Operator Assignments', function () {
  it('should set typeOfProgrammingIsCool to "boolean"', function () {
    expect(typeOfProgrammingIsCool).toBe(
      typeof programmingIsCool,
      `typeOfProgrammingIsCool should be set to typeof programmingIsCool, which is "boolean", but found "${typeOfProgrammingIsCool}".`
    );
  });

  it('should set typeOfClearancePrice to "number"', function () {
    expect(typeOfClearancePrice).toBe(
      typeof clearancePrice,
      `typeOfClearancePrice should be set to typeof clearancePrice, which is "number", but found "${typeOfClearancePrice}".`
    );
  });

  it('should set typeOfLifeTheUniverseAndEverything to "number"', function () {
    expect(typeOfLifeTheUniverseAndEverything).toBe(
      typeof lifeTheUniverseAndEverything,
      `typeOfLifeTheUniverseAndEverything should be set to typeof lifeTheUniverseAndEverything, which is "number", but found "${typeOfLifeTheUniverseAndEverything}".`
    );
  });

  it('should set typeOfTheBestLanguage to "string"', function () {
    expect(typeOfTheBestLanguage).toBe(
      typeof theBestLanguage,
      `typeOfTheBestLanguage should be set to typeof theBestLanguage, which is "string", but found "${typeOfTheBestLanguage}".`
    );
  });
});
