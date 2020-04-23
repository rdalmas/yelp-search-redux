import { actions as a } from "../../actions";
import reducer from "../businessSearch";

const initialState = {
  business: [],
  basicFilters: [
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
    },
    {
      name: "offset",
      defaultValue: 0
    }
  ]
};

describe("Reducers - Business Search", () => {
  describe("Initial State", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toMatchObject(initialState);
    });
  });
  describe("SEARCH_BUSINESS", () => {
    it("should handle SEARCH_BUSINESS", () => {
      expect(
        reducer([
          {
            business: []
          }
        ], {
          type: a.SEARCH_BUSINESS,
          payload: { 
            businesses: [{id: 1}]
          }
        })
      ).toMatchObject({
        business: [{id: 1}]
      });
    });
  });
});
