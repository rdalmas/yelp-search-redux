import { getBusiness, getDefaultParams } from "../businessSearch";

import { business, basicFilters } from "../../../testUtils/fixtures/businessSearch.fixture";

describe("Selectors - Business Search", () => {
  it(" - getBusiness", () => {
    const expected = [{
      id: "iH3lT6Buw2GFQkxoXSTlnQ",
      name: "Sasaya",
      imageUrl: "https://s3-media3.fl.yelpcdn.com/bphoto/dOVGY3d0Vd-eQUXVnvBZHQ/l.jpg",
      imageAlt: "sasaya-berlin",
      coordinates: {
        latitude: 52.5443,
        longitude: 13.4185
      },
      rating: 4,
      reviewCount: 240,
      isClosed: false,
      url: "https://www.yelp.com/biz/sasaya-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA",
      address: "Lychener Str. 50, 10437 Berlin, Germany",
      phone: "+493044717721"
    }];
    const result = getBusiness.resultFunc({ business: [business[0]] });
    expect(result).toMatchObject(expected);
  });
  it(" - getDefaultParams ", () => {
    const expected = {
      categories: "pizza",
      location: "Berlin, Germany",
      limit: 10
    };
    const result = getDefaultParams.resultFunc({ basicFilters: basicFilters });
    expect(result).toMatchObject(expected);
  });
});
