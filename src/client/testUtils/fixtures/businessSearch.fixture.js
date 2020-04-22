export const business = [
  {
     "id":"iH3lT6Buw2GFQkxoXSTlnQ",
     "alias":"sasaya-berlin",
     "name":"Sasaya",
     "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/dOVGY3d0Vd-eQUXVnvBZHQ/o.jpg",
     "is_closed":false,
     "url":"https://www.yelp.com/biz/sasaya-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA",
     "review_count":240,
     "categories":[
        {
           "alias":"japanese",
           "title":"Japanese"
        },
        {
           "alias":"sushi",
           "title":"Sushi Bars"
        }
     ],
     "rating":4,
     "coordinates":{
        "latitude":52.5443,
        "longitude":13.4185
     },
     "transactions":[

     ],
     "price":"€€",
     "location":{
        "address1":"Lychener Str. 50",
        "address2":null,
        "address3":null,
        "city":"Berlin",
        "zip_code":"10437",
        "country":"DE",
        "state":"BE",
        "display_address":[
           "Lychener Str. 50",
           "10437 Berlin",
           "Germany"
        ]
     },
     "phone":"+493044717721",
     "display_phone":"+49 30 44717721",
     "distance":3640.448306716689
  },
  {
     "id":"U5yzT_FiHj8KZhc8OMbI_Q",
     "alias":"dudu-berlin",
     "name":"DUDU",
     "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/SLe9IGZctsBFQUqaz72awg/o.jpg",
     "is_closed":false,
     "url":"https://www.yelp.com/biz/dudu-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA",
     "review_count":268,
     "categories":[
        {
           "alias":"sushi",
           "title":"Sushi Bars"
        },
        {
           "alias":"vietnamese",
           "title":"Vietnamese"
        },
        {
           "alias":"panasian",
           "title":"Pan Asian"
        }
     ],
     "rating":4,
     "coordinates":{
        "latitude":52.52932,
        "longitude":13.3998899
     },
     "transactions":[

     ],
     "price":"€€",
     "location":{
        "address1":"Torstr. 134",
        "address2":null,
        "address3":null,
        "city":"Berlin",
        "zip_code":"10119",
        "country":"DE",
        "state":"BE",
        "display_address":[
           "Torstr. 134",
           "10119 Berlin",
           "Germany"
        ]
     },
     "phone":"+493051736854",
     "display_phone":"+49 30 51736854",
     "distance":1716.051201147271
  }
];

export const basicFilters = [
  {
    options: ["pizza", "burguer", "sushi"],
    type: "radio",
    name: "categories",
    defaultValue: "pizza"
  },
  {
    helpText: "Examples: 'New York City', 'NYC', '350 5th Ave, New York, NY 10118",
    defaultValue: "Berlin, Germany",
    type: "text",
    name: "location",
    disabled: true
  },
  {
    name: "limit",
    defaultValue: 10,
  }
]