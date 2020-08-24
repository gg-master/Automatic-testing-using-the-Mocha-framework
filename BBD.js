describe("pow", function () {
    describe("Возводит х в 3 степень", function () {
        function makeTest(x) {
            let result = x ** 3;
            it(`${x} в степени 3 будет ${result}`, function () {
                assert.equal(pow(x, 3), result);
            });
        }
        for(let x = 1; x <= 5; x++){
            makeTest(x);
        }
    });
    it("For x < 0 -- NaN", function () {
        assert.isNaN(pow(2, -1));
    })
});
