
    if(screen.width < 768) {
        var images = [
            "../images/maskgroup7.png",
            "../images/maskgroup7.png",
            "../images/maskgroup7.png"
        ]
        var i = 0;
        
        function slideshow () {
            document.getElementById("slideshows").src = images[i]
            if (i < images.length-1) {
                i++
            }
            else 
            i= 0;
        }
        
        setInterval(slideshow, 2000)
        
    }



