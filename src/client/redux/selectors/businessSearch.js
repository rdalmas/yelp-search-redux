import { createSelector } from "reselect";

const businessState = ({ businessSearch }) => businessSearch

export const getBusiness = createSelector(
  businessState,
  ({ business }) => {
    return business.map(business => ({
      id: business.id,
      name: business.name,
      imageUrl: business.image_url,
      coordinates: business.coordinates,
      rating: business.rating,
      reviewCount: business.review_count,
      isClosed: business.is_closed,
      url: business.url,
      address: business.display_address && business.display_address.join(", "),
      phone: business.phone
    }));
  }
);

export const isLoading = createSelector(
  businessState,
  ({ loading }) => {
    console.log("is loading => ", loading);
    return loading
  } 
);

export const getBasicFilters = createSelector(
  businessState,
  ({ basicFilters }) => basicFilters
);

export const getDefaultParams = createSelector(
  businessState,
  ({ basicFilters }) => basicFilters.reduce((prev, next) => ({
      ...prev, [next.name]: next.defaultValue
    }), {})
)