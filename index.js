class Circle {
    constructor(radius){
        this.radius = radius;
    } 
    get diameter(){
        return (this.radius * 2)
    } 
    get circumference(){ 
        const pi = Math.PI 
        
        return (2 * pi * this.radius)
    } 
    get area(){ 
        const pi = Math.PI;
        return (pi * this.radius ** 2) 
    } 

    set circumference(circ){ 
        
        this.radius = ( circ/ (2 * Math.PI))
     } 

     set diameter(dir){
         this.radius = (dir/2)
     }
    
} 