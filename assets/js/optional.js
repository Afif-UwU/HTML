var images=['Images/banner.jpg','Image/neptune.jpg'];
        var url=0;
        setInterval(function(){
            url+=1;
            if(url==5){
            url=0;
            }
        document.body.style.backgroundImage = 'url('+images[url]+')';
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.transition = "all 3s ease";
        document.body.style.backgroundAttachment = "fixed";
        },3000);