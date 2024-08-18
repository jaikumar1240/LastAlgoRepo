export default function two_crystal_balls(breaks: boolean[]): number {
    let lo = 0;
    let hi = breaks.length-1;
    let mid = Math.floor(lo+(hi-lo)/2);
    let first_break = -1;
    while(lo<=hi){
        if(breaks[mid]){
            first_break = mid;
            hi = mid-1;
        }
        else{
            lo = mid+1;
        }
        mid = Math.floor(lo+(hi-lo)/2);
    }
    return first_break;
}