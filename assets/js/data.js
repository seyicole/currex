let data = [
    {
        'id': 0,
        'name': '@John',
        'location': 'Salford',
        'trade': 'sell',
        'currency': 'Pounds',
        'rate': 600,
        'range': {
            'min': 10,
            'max': 100,
        },
        'contact': '44 7014 000000',
        'verified': 'yes',
        'rating':{
            'percent': 91,
            'total': 30,
            'positive': 25,
            'negative': 5
        }
    },

    {
        'id': 1,
        'name': '@Norah',
        'location': 'Salford',
        'trade': 'sell',
        'currency': 'Pounds',
        'rate': 580,
        'range': {
            'min': 1,
            'max': 250,
        },
        'contact': '44 7014 000000',
        'verified': 'yes',
        'rating':{
            'percent': 39,
            'total': 30,
            'positive': 29,
            'negative': 1
        }
    },

    {
        'id': 2,
        'name': '@Betty',
        'location': 'Salford',
        'trade': 'buy',
        'currency': 'Pounds',
        'rate': 570,
        'range': {
            'min': 200,
            'max': 1000,
        },
        'contact': '44 7014 000000',
        'verified': 'yes',
        'rating':{
            'percent': 100,
            'total': 20,
            'positive': 20,
            'negative': 0
        }
    },

    {
        'id': 3,
        'name': '@Valerie',
        'location': 'Birmingham',
        'trade': 'sell',
        'currency': 'Pounds',
        'rate': 620,
        'range': {
            'min': 5,
            'max': 90,
        },
        'contact': '44 7014 000000',
        'verified': 'yes',
        'rating':{
            'percent': 20,
            'total': 30,
            'positive': 5,
            'negative': 25
        }
    },

    {
        'id': 4,
        'name': '@Chris',
        'location': 'London',
        'trade': 'buy',
        'currency': 'Pounds',
        'rate': 500,
        'range': {
            'min': 20,
            'max': 250,
        },
        'contact': '44 7014 000000',
        'verified': 'yes',
        'rating':{
            'percent': 50,
            'total': 40,
            'positive': 20,
            'negative': 20
        }
    },

    {
        'id': 5,
        'name': '@Grace',
        'location': 'Manchester',
        'trade': 'buy',
        'currency': 'Pounds',
        'rate': 600,
        'range': {
            'min': 5,
            'max': 100,
        },
        'contact': '44 7014 000000',
        'verified': 'yes',
        'rating':{
            'percent': 35,
            'total': 33,
            'positive': 13,
            'negative': 20
        }
    }
]


    const sellAds = data.filter(keyword => keyword.trade === 'sell');
    //console.log(sellAds)
    sellAds.map((ads) => {
        const sellers = document.getElementById('sell-list')
        let sell = `<div class="trade-ads buy-ads d-flex justify-content-around mx-5">
                    <div class="ads-info1">
                        <p><span class="bg-danger text-light">${ads.trade}</span> at <span class="font-weight-bolder">${ads.rate}</span> Naira/Pounds</p>
                        <p>${ads.range.min} - ${ads.range.max} Pounds</p>
                        <p class="ads-location1">${ads.location}</p>
                        ${ads.name}
                    </div>
    
                    <div>
                       ${ads.percent >= 50? `<p class="text-success">${ads.rating.percent}</p>` : `<p class="text-danger">${ads.rating.percent}</p>` }
                    </div>
    
                    <div>
                        <a href="details.html"><button class="btn btn-primary">Details</button></a>
                    </div>
                </div>`
        sellers.innerHTML += sell;
    })
    const buyAds = data.filter(keyword => keyword.trade === 'buy');
    buyAds.map((ads) => {
        const buyers = document.getElementById('buy-list')
        let buy = `<div class="trade-ads sell-ads d-flex justify-content-around mx-5">
                    <div class="ads-info">
                        <p><span class="bg-success text-light">${ads.trade}</span> at <span class="font-weight-bolder">${ads.rate}</span> Naira/Pounds</p>
                        <p>${ads.range.min} - ${ads.range.max} Pounds</p>
                        <p class="ads-location">${ads.location}</p>
                        ${ads.name}
                    </div>
    
                    <div>
                       ${ads.percent >= 50? `<p class="text-success">${ads.rating.percent}</p>` : `<p class="text-danger">${ads.rating.percent}</p>` }
                    </div>
    
                    <div>
                        <a href="details.html"><button class="btn btn-primary">Details</button></a>
                    </div>
                </div>`
        buyers.innerHTML += buy;
    })



//google maps api 
function initialize() {
  var input = document.getElementById('searchTextField');
  new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);

// // search 2
// function initialize() {
//   var input = document.getElementById('searchTextField1');
//   new google.maps.places.Autocomplete(input);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("buy-list");
    li = ul.getElementsByClassName("ads-info");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("ads-location")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function myFunction1() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("sell-list");
    li = ul.getElementsByClassName("ads-info1");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("ads-location1")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// function search(){
//   sellAds.map((post)=>{
//       if(post.location === 'salford'){
//           console.log(post)
//       }
//   })
// }

// console.log(search())