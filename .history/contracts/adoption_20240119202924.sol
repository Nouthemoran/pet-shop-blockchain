pragma solidty ^0.5.0;

contract adoption {
    address[16] public adopters;

    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 & petId <= 15 );
    }
}