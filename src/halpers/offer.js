export let caculateOffer=(mrp,sp)=>{
    let off=((mrp-sp)/mrp)*100;
    return Math.ceil(off);

}