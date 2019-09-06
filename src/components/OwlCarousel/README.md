# Owl Carousel

### Usage

```
fronthack component OwlCarousel
```

#### JSX example:

Owl Carousel is a jQuery library, so use another solutions for React and NextJS.


#### Static HTML example:

```html
<div class="owl-carousel owl-theme">
  <div><img src="https://placeimg.com/680/320/animals" alt="" /></div>
  <div><img src="https://placeimg.com/680/320/tech" alt="" /></div>
  <div><img src="https://placeimg.com/680/320/nature" alt="" /></div>
</div>
<!-- Load jQuery dependency -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- Load OWL Carousel styles -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
<!-- Load OWL Carousel library (after jQuery) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<!-- Initiate OWL Carousel -->
<script>
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoPlay: true,
    nav: true,
    navText: [
      "<i class='icon icon--arrow-left'>",
      "<i class='icon icon--arrow-right'>"
    ]
  });
</script>
```