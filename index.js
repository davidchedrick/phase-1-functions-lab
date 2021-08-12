const hQ = 42;
const blockFt = 264;


function distanceFromHqInBlocks(street) {
    if(street >= hQ){
        return street - hQ;
    } else if(street < hQ) {
        return hQ - street;
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(street) {
    if(street >= hQ){
        return (street - hQ) * blockFt;
    } else if(street < hQ) {
        return (hQ - street) * blockFt;
    }
    
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);


function distanceTravelledInFeet(street1, street2) {
    return  (Math.max(street1, street2) - Math.min(street1, street2)) * blockFt;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28);


function calculatesFarePrice(start, destination) {
    if((Math.max(start, destination) - Math.min(start, destination)) * blockFt <= 400 ){
        return 0;
    }else if((Math.max(start, destination) - Math.min(start, destination)) * blockFt > 400 && (Math.max(start, destination) - Math.min(start, destination)) * blockFt <= 2000){
        return((Math.max(start, destination) - Math.min(start, destination)) * blockFt - 400) * 0.02;
    }else if((Math.max(start, destination) - Math.min(start, destination)) * blockFt > 2000 && (Math.max(start, destination) - Math.min(start, destination)) * blockFt <=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }

}
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);