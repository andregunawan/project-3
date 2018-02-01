

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVndW5hd2FuIiwiYSI6ImNqZDEyc3kwdDJkd24yeW5zOHNkN2owNmUifQ.jMGPgfB8vFmXclxuVHU1HQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v9',
center: [-118.2937, 34.0522],
zoom: 12.15
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: false
    },
    trackUserLocation: true
    }));


$(document).ready(function(){
  var $likeToggle = $('.user-input .like');
  var $shareToggle = $('.user-input .share');
  var $addRecipeToggle = $('.add-recipe');
  
  $likeToggle.on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass('liked');
  });
  
  $shareToggle.on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass('shared');
  });
  
  $addRecipeToggle.on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass('added');
  });
  
});

$('.btn-counter').on('click', function(event, count) {
  event.preventDefault();
  
  var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active'),
      multiple = $this.hasClass('multiple-count');
  
  $.fn.noop = $.noop;
  $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
  
});



