
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVndW5hd2FuIiwiYSI6ImNqZDEyc3kwdDJkd24yeW5zOHNkN2owNmUifQ.jMGPgfB8vFmXclxuVHU1HQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-118.2937, 34.0522],
    zoom: 12.15
});

map.scrollZoom.disable();

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


var chicagoparks = {
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "Lincoln Park",
        "description": "A northside park that is home to the Lincoln Park Zoo"
      },
      "geometry": {
        "coordinates": [
          -87.637596,
          41.940403
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Burnham Park",
        "description": "A lakefront park on Chicago's south side"
      },
      "geometry": {
        "coordinates": [
          -87.603735,
          41.829985
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Millennium Park",
        "description": "A downtown park known for its art installations and unique architecture"
      },
      "geometry": {
        "coordinates": [
          -87.622554,
          41.882534
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Grant Park",
        "description": "A downtown park that is the site of many of Chicago's favorite festivals and events"
      },
      "geometry": {
        "coordinates": [
          -87.619185,
          41.876367
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Humboldt Park",
        "description": "A large park on Chicago's northwest side"
      },
      "geometry": {
        "coordinates": [
          -87.70199,
          41.905423
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Douglas Park",
        "description": "A large park near in Chicago's North Lawndale neighborhood"
      },
      "geometry": {
        "coordinates": [
          -87.699329,
          41.860092
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Calumet Park",
        "description": "A park on the Illinois-Indiana border featuring a historic fieldhouse"
      },
      "geometry": {
        "coordinates": [
          -87.530221,
          41.715515
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Jackson Park",
        "description": "A lakeside park that was the site of the 1893 World's Fair"
      },
      "geometry": {
        "coordinates": [
          -87.580389,
          41.783185
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Columbus Park",
        "description": "A large park in Chicago's Austin neighborhood"
      },
      "geometry": {
        "coordinates": [
          -87.769775,
          41.873683
        ],
        "type": "Point"
      }
    }
  ],
  "type": "FeatureCollection"
};

var allcoords = [];
chicagoparks.features.forEach(v => {
  allcoords.push(v.geometry.coordinates);
})

console.log(allcoords);


// for(let i = 0; i < allcoords.length; i++){
//   let button = 
//   `<button id="place${i}" class="btn btn-primary placeshover" style="position: relative;">Place ${i}</button>`
//   $('#buttons').append(button);
// }

for(let i = 0; i < allcoords.length; i++){
  let button = 
  `<div id="place${i}" class='results placehover'>
      <div class='featured-image'>
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>


          <div class="carousel-inner">
            <div class="item active">
              <img src='https://www.soelden.com/urlaub/images/SD/WI/headerbilder/aktivitaeten_header_restaurant,method=scale,prop=data,id=1200-510.jpg' alt="...">
            </div>
            <div class="item">
              <img src="https://www.discoverlosangeles.com/sites/default/files/styles/listography_image/public/Restaurants/rays-and-stark-bar-interior.jpg?itok=8Lm1zqJM" alt="...">
            </div>
            <div class="item">
              <img src="http://shrimpandburger.co.uk/wp-content/uploads/2013/06/Shrimp-and-Burger-restaurant-U-940x623.jpg" alt="...">
            </div>
          </div>


          <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
        <div class='arrow'></div>
      </div>
      <article>
        <header>
          <h3><span>Best 15 Restaurant in Los Angeles</span></h3>
        </header>
        <div class='excerpt'>
          <p>Los Angeles has plenty of sweet shops, cake spots, and bakeries around the city, many adopting styles and flavors from around the world. It's perhaps the best trademark of LA's approach to baking: it's not tied to any particular style, such as classic European. Instead, you get a wonderful amalgam of Asian influence in pastries (which is welcome, because they tend not to be as sweet) to glorious Mexican panaderias, which offer the perfect starters to every morning.</p>

            <a href="#" title="Love it" class="small-btn btn-counter" data-count="23"><span><i class="fa fa-heart"></i></span></a>
            <button title="Favorite" style="background: transparent; border: 0px; display: inline; float: right; margin-top: -20px;"><i class="fa fa-bookmark"></i></button>
            <button title="Edit" style="background: transparent; border: 0px; display: inline; float: right; margin-top: -20px;"><i class="fa fa-pencil"></i></button>
          </div>
        
        <div class="row" style="border-top: 2px solid #9bb068; text-align: center; margin:0px !important; margin-top:20px !important">
          <div class="col-md-12" style="margin-top: 10px">
            Share this list <button style="background: transparent; border: 0px"><i class="fa fa-twitter"></i></button><button style="background: transparent; border: 0px"><i class="fa fa-facebook"></i></button>
          </div>
        </div>
      </article>
    </div>`
  $('#buttons').append(button);
}



map.on('load', function() {

    // Add a layer showing the places.
        map.loadImage('https://i0.wp.com/www.infolinkbd.com/wp-content/uploads/2015/10/red-location-icon-map-png-4.png?ssl=1', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": chicagoparks
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 0.15,
                'text-allow-overlap': true,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true
            }
        });
      
    });

    var bounds = allcoords.reduce(function(bounds, coord) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(allcoords[0], allcoords[0]));


    $("#fitbtn").on("mouseenter", () => {
      map.fitBounds(bounds, {padding: 110, offset: [250, 0]});
      bounds.addTo(map);
    })

    var popups = [];
    chicagoparks.features.forEach(v => {
      popups.push(new mapboxgl.Popup({closeOnClick: true, offset:[0, -30]})
      .setLngLat(v.geometry.coordinates)
      .setHTML(`<h1>${v.properties.title}</h1><h4>${v.properties.description}</h4>`))
    })

    for(let i = 0; i <= allcoords.length; i++)
    {
      $("#buttons").on("mouseenter", `#place${i}`, () => {
        map.flyTo({center: allcoords[i], zoom: 11, offset:[250, 0]});
        popups[i].addTo(map);
      })

      $("#buttons").on("mouseleave", `#place${i}`, () => {
        popups[i].remove();
      })
    }

    
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



