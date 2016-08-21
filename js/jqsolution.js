


$(document).ready(function() {
    console.log('hello!!!');
    
    
    $( "#city-search" ).on('submit', function(e) {
        console.log('Spinner show...');

        var search_value = $( "input.search-field").val();
        var openweatherapikey = '50500890cdcb59589cac496783decee1';
        var urlfinal = 'http://api.openweathermap.org/data/2.5/weather?APPID=50500890cdcb59589cac496783decee1&units=metric&q=' + encodeURIComponent(search_value);

        console.log(urlfinal);

        // ajax search
        $.get(urlfinal, function(data) {
            console.log(data);

            // smestanje podataka u druge promenjive...
            city_name = data.name;
            console.log(city_name);
            console.log(data.main);
            console.log(data.main.temp);


            // ovde ce da ide kod za dalju obradu podataka

            //var new_city_template ='<div class="new-city col-sm-4"><h3 class="city-name">Lisbon</h3><p class="date">July 4</p><h3 class="temperature">24</h3><p class="clouds">clouds</p><p class="hum">hum</p><p class="wind">wind</p></div>';
            var new_city_template ='<div class="new-city col-sm-4"><div class="col-md-4 city-date"><h3 class="city-name">Lisbon</h3><p class="date">July 4</p></div><div class="col-md-3 temp-clouds"><h3 class="temperature">24<span>&deg;C</span></h3><p class="clouds">clouds</p></div><div class="col-md-5 hum-wind"><p class="hum"><span>Humidity&#58; </span>hum</p><p class="wind"><span>Wind&#58; </span>wind</p></div></div>';
            // console.log(value);
                $(".weather").html(""); // isprazni element
                
                // ovde ine foreach ili .each
                $(".weather").append(new_city_template);
                console.log(data.name);
                $(".new-city .city-name").html(data.name);
                console.log(data.main.temp);
                
                // console.log( timestamp.format("HH/mm/ss/YYYY") );
                
                // var now_vreme = new Date();
                // console.log(now_vreme);
                
                $(".new-city .date").html(data.dt);
                $(".new-city .temperature").html(data.main.temp);
                $(".new-city .clouds").html(data.clouds);
                $(".new-city .hum").html(data.main.humidity);
                $(".new-city .wind").html(data.wind.speed);
                
                $(".new-city").addClass("city").removeClass("new-city");

            /*
            $.each( data, function( index, value ) {
                console.log(value);
                $(".weather").html(new_city_template);
                console.log(value.name);
                $(".new-city city-name").html(value.name);
                console.log(value.temp);
                $(".new-city temperature").html(value.temp);
                $(".new-city clouds").html(value.name);
                $(".new-city hum").html(value.name);
                $(".new-city wind").html(value.name);
            });
             * 
             */

            //

            console.log('foo bar');
            data_processing(); // update main area
            completed_processing();
            console.log('Spinner hide...');
        });
       e.preventDefault();
       e.stopPropagation();
    });
    
});

