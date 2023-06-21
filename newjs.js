document.addEventListener('DOMContentLoaded', function() {

    console.log("DOM LOADED");
/*
    const track = document.getElementById("track");
    const item1 = document.querySelector(".item-1");
    const item2 = document.querySelector(".item-2");
    
    window.addEventListener("scroll", function() {
      const scrollY = window.scrollY;

      console.log("ScrollY "+scrollY);
      const trackHeight = track.getBoundingClientRect().height;
      const item1Opacity = 1 - (scrollY / trackHeight);
      const item2Opacity = scrollY / trackHeight;
    
      item1.style.opacity = item1Opacity;
      item2.style.opacity = item2Opacity;
    });
     
*/

});
/*
const targetDiv = document.querySelector('#track');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');

const options = {
  root: null,
  threshold: 0.75,
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        console.log('The target div is in view!');
      const opacity = (entry.intersectionRatio - 0.75) / 0.25;
      const item1Opacity = 1 - opacity;
      const item2Opacity = opacity;

      item1.style.opacity = item1Opacity;
      item2.style.opacity = item2Opacity;
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(targetDiv);
*/

const targetDiv = document.querySelector('#track');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');

const options = {
  root: null,
  threshold: [0],
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const handleScroll = () => {
        const divHeight = entry.boundingClientRect.height;
        const scrollOffset = window.pageYOffset - entry.boundingClientRect.top;
        const scrollPercentage = Math.floor((scrollOffset / divHeight) * 100);
        console.log(`The target div is ${scrollPercentage}% scrolled.`);

        if(scrollPercentage>0&&scrollPercentage<25){
      console.log("scenario1")
        const item1Opacity = 1;
        const item2Opacity = 0;
        item1.style.opacity = item1Opacity;
        item2.style.opacity = item2Opacity;
        item2.style.display = "none";
        }
        else if(scrollPercentage>25&&scrollPercentage<75)
        {
            console.log("scenario2")
            drop = (scrollPercentage-25)/50;
            const item1Opacity = 1-drop;
            const item2Opacity = drop;
            item1.style.opacity = item1Opacity;
            item2.style.opacity = item2Opacity;
            item2.style.display = "block";

        }
        else if(scrollPercentage>75&&scrollPercentage<100){
            console.log("scenario3")
            const item1Opacity = 0;
            const item2Opacity = 1;
            item2.style.display = "block";
            item1.style.opacity = item1Opacity;
            item2.style.opacity = item2Opacity;
        }
       
        // Perform your desired actions here based on the scrollPercentage value
      };

      window.addEventListener('scroll', handleScroll);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(targetDiv);



