const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
    let Adoption;
    let expectedAdopter;

    before(async () => {
        adoption =  await Adoption.deploy();

    });

    describe("adoption a pet and retrieving account addresses", async() => {
        before("adopt a pet using accounts[0")
    })
})