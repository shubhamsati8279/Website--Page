const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});   
                              /** Point of smooth scrolling
                            1- attach loco scroll css
                            2- attach locomotive scroll min js
                            3-some code from loco github for js**/

                            function firstPageAnim(){
                                var tl=gsap.timeline();

                                tl.from("#nav",{
                                    y:'-10',
                                    opacity:0,
                                    duration:1.5,
                                    ease:Expo.easeInOut
                                })
                                .to(".boundingelem",{
                                    y:0,
                                    ease: Expo.easeInOut,
                                    duration:2,
                                    delay:-1,
                                    stagger:.2
                                })
                                .from("#herofooteer",{
                                    y:'-10',
                                    opacity:0,
                                    duration:1.5,
                                    delay:-1,
                                    ease:Expo.easeInOut
                                })

                                /**  jab mouse move ho to ham log skew kar paaye aur maximum skew and minimum skew define kar paaye ,jab mouse move ho to
                                 chapta ki value badhe ,aur jab mouse chalna band ho jaye to chapta hta lo**/
                                 
                                
                                function circleChaptakaro() {
                                    //define default scale value
                                    var xscale = 1;
                                    var yscale =1;

                                    var xprev = 0;
                                    var yprev =0;

                                    window.addEventListener("mousemove", function (dets) {
                                        var xdiff = dets.clientX - xprev;
                                        var ydiff = dets.clientY - yprev;

                                        xprev = dets.clientX;
                                        Yprev = dets.clientY;

                                        console.log (gsap.utils.clamp(.8, 1.2,xdiff));   /**gsap utils ko google pe seaerch krna hai tb clamp milega our vo use krna hai**/
                                        console.log (gsap.utils.clamp(.8, 1.2,ydiff));
                                        console.log(xdiff,ydiff);

                                    });
                                 }
                                 circleChaptakaro();
                                 
        
                            }

                            function circleMouseFollower() {
                                 window.addEventListener("mousemove", function (dets) 
                                { document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`; 
                            });
                         }
                          circleMouseFollower();  /**mouse ko circle ke sat move krne ke liye used funcation  **/
                          firstPageAnim();

