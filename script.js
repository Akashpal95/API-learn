
var pages = 0;
var count= 0;

function addImages(data){
    for(photo of data.photos){
        var img = $(document.createElement('img'));
        img.attr('src', photo.img_src);
        img.appendTo('.img-container');
    }
}

function fetchMarsImagesBypage(page){
    console.log(page);
    $.ajax({
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method:'GET',
        success:addImages,
        data:{
            api_key : 'zYS3lFNCEsy76zD39CHDejRg4R9h1YfxUqAOjdoq',
            earth_date : date,
            page: page,
        }
    });
}

function fetchMarsImages(data){
    console.log(data.photos);
    $('.img-container').empty();
    let len = data.photos.length;
    pages = Math.ceil(len/25);
    console.log(pages);
    let count=0;
    for(photo of data.photos){
        // $('<img>', {
        //     src : photo.img_src
        // }).appendTo('.img-container');
        // if(count++ >= 25)
        //     break;
        var img = $(document.createElement('img'));
        img.attr('src', photo.img_src);
        img.appendTo('.img-container');

    }
    // fetchMarsImagesBypage(1);
}


// For mars rover
// $('#button').click(function(e){
//     e.preventDefault();
//     let date = $('#date').val()
//     if(date ===""){
//         window.alert("Invalid Input");
//         return;
//     }
//     // fetchMarsImages(1);
//     console.log($('#date').val());
//     $.ajax({
//         url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
//         method:'GET',
//         success:fetchMarsImages,
//         data:{
//             api_key : 'zYS3lFNCEsy76zD39CHDejRg4R9h1YfxUqAOjdoq',
//             earth_date : date,
//             // page:1,
//         }
//     });
// });
var contentType ="application/x-www-form-urlencoded; charset=utf-8";
function showSuperhero(data){
    console.log(data);

}
var url = 'https://superheroapi.com/api/1571199179705402/search/falcon';
// let response = await fetch('https://superheroapi.com/api/1571199179705402/search/falcon', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
fetch(url,{
    method : 'get',
    headers : {'Content-Type': 'application/json'},
}).then(function(data){
    console.log('hello');
}).catch(function(){
    console.log('sorry');
});
// let script = document.createElement('script');
// script.src = `https://superheroapi.com/api/1571199179705402/search/falcon?callback=showSuperhero`;
// document.body.append(script);
//For superhero
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
      // XHR has 'withCredentials' property only if it supports CORS
      console.log('with credentials')
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){ // if IE use XDR
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }
$('#button').click(function(e){
    e.preventDefault();
    let name = $('#name').val()
    if(name ===""){
        window.alert("Invalid Input");
        return;
    }
    // fetchMarsImages(1);
//     var url = 'https://superheroapi.com/api/1571199179705402/search/falcon';
//     console.log($('#name').val());
//     var request = createCORSRequest( "GET", url );
//     if ( request ){
//   // Define a callback function
//     request.onload = showSuperhero;
//   // Send request
//     request.send();
// }

    // $.ajax({
    //     url:'http://superheroapi.com/api/1571199179705402/search/falcon',
    //     // crossDomain: true,
    //     // crossOrigin:true,
    //     method:'GET', 
    //     // dataType: 'json',
    //     // processData: true,
    //     // data: {},
    //     contentType:contentType,
    //     success:showSuperhero,
    //     // data:{
    //     //     accessToken : '1571199179705402',
    //     //     characterId : ,
    //     //     // page:1,
    //     // }
    // });
});
// https://superheroapi.com/api/access-token/search/name

