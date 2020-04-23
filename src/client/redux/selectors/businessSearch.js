import { createSelector } from "reselect";

const businessState = ({ businessSearch }) => businessSearch

export const getBusiness = createSelector(
  businessState,
  ({ business }) => {
    return business && business.map(business => ({
      id: business.id,
      name: business.name,
      imageUrl: business.image_url.replace("o.jpg", "l.jpg"), // getting large image. More info: https://www.yelp.com/developers/faq
      imageAlt: business.alias,
      coordinates: business.coordinates,
      rating: business.rating,
      reviewCount: business.review_count,
      isClosed: business.is_closed,
      url: business.url,
      address: business.location.display_address && business.location.display_address.join(", "),
      phone: business.phone
    }));
  }
);

export const getBasicFilters = createSelector(
  businessState,
  ({ basicFilters }) => basicFilters
);

export const getDefaultParams = createSelector(
  businessState,
  ({ basicFilters }) => basicFilters.reduce((acc, next) => ({
      ...acc, [next.name]: next.defaultValue
    }), {})
);