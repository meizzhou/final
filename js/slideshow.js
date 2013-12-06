       var image1=new Image();
            image1.src="img/briaunaProfile.jpg";
            var image2=new Image();
            image2.src="img/emilieProfile.jpg";
            var image3=new Image();
            image3.src="img/giselleProfile.jpg";
            var image4=new Image();
            image4.src="img/vladProfile.jpg";
            var image5=new Image();
            image5.src="img/sarenaProfile.jpg";




                    //variable that will increment through the images
            var step=1;

            function changePic(pic) {
                step = pic;
                document.images.slide.src=eval("image"+step+".src");
            }

            function slideit(){
            //if browser does not support the image object, exit.
            if (!document.images)
            return
            document.images.slide.src=eval("image"+step+".src");
            if (step<5)
            step++;
            else
            step=1;
            //call function "slideit()" every 3.5 seconds
            setTimeout("slideit()",3500);
            }
            slideit();
            //-->