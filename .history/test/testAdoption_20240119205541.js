const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
    let Adoption;
    let expectedAdopter;

    before(async () => {
        adoption =  await Adoption.deploy();

    });

    describe("adoption a pet and retrieving account addresses", async() => {
        before("adopt a pet using accounts[0]", async () => {
            await Adoption.adopt(8, {from:accounts[0]});
            expectedAdopter = accounts[0];
        })
        it("can fetch the address of an owner by pet Id", async() => {
            const adopter = await adoption.adopters(8);
            assert.equal()
        })

    })
})