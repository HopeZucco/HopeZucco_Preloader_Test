import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//register all plugins
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin (MorphSVGPlugin);
gsap.registerPlugin (DrawSVGPlugin);
gsap.registerPlugin (MotionPathHelper);

//const mainTL = gsap.timeline({id:"mainTL"});

const maintTL = gsap.timeline();

//maintTL.from("#swirl", {duration: 3, drawSVG:0})
 maintTL.from ("swirl", {duration: 3, x: 200})




/* function ballOne(){
    let tl = gsap.timeline();

    tl.to("#ball-1", {duration:1, scale:3})
    .to("#ball-1", {duration:1, y:"-=200"})
    ;

    return tl;

    
}

function ballTwo(){
    let tl = gsap.timeline();

    tl.to("#ball-2", {duration:1, scale:6})
    ;

    return tl;

    
} */



//ballOne();




/* mainTL.add(ballOne(),"somelabel")
.add(ballTwo(),"somelabel") */
;


GSDevTools.create();