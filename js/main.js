$(


    function() {


        //Close and open cart content
        $('#cart-content').hide()
        $('#cart-icon').click(function() {
            $('#cart-content').toggle();

        })
        $('#cart-close').click(function() {
            $('#cart-content').toggle();
            console.log('poiuy')
        })

        // lite box change img on botton arrow click 
        const images = ['image-product-1.jpg', 'image-product-4.jpg', 'image-product-3.jpg', 'image-product-2.jpg'];
        let current = 0;
        $('#arrow-left').click(function() {
            if (current < 0) {
                current = images.length - 1;
            }

            console.log(current)
            $('#litebox-img').attr('src', `images/${images[current]}`)
            current--


        })
        $('#arrow-right').click(function() {

            if (current > images.length - 1) {
                current = 0;
            }


            console.log(current)
            $('#litebox-img').attr('src', `images/${images[current]}`)

            current++

        })


        // change modal image on swipe 

        $('#lite-box-modal').on('swiperight', function() {
            if (current < 0) {
                current = images.length - 1;
            }

            console.log('right')
            $('#litebox-img').attr('src', `images/${images[current]}`)
            current--


        })
        $('#lite-box-modal').on('swipeleft', function() {

                if (current > images.length - 1) {
                    current = 0;
                }


                console.log('left')
                $('#litebox-img').attr('src', `images/${images[current]}`)

                current++

            })
            //close modal
        $('#modal-close').click(function() {
            $('body').css('overflow', 'auto')
            $('#lite-box-modal').fadeOut();

        })

        //fade in modal when click on teh thubnail
        $('#thumbnail').click(function() {
            $('body').css('overflow', 'hidden')
            $('#lite-box-modal').fadeIn();
        })

        // display clicked small image as main image 
        let pics = document.querySelectorAll('.small-pic');

        pics.forEach((element, index) => {

            element.style.opacity = '0.7';
            pics[0].style.opacity = '1';

            element.addEventListener('click', function() {

                pics.forEach((e) => {
                    e.style.opacity = '0.7';
                })
                element.style.opacity = '1';

                //change main img src 
                $('#thumbnail').attr('src', element.src)

            })
        })

    }
)