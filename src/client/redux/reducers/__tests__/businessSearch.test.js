import { actions as a } from "../../actions";
import reducer from "../businessSearch";

const initialState = {
  business: [],
  total: 0,
  loading: false,
  error: "",
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
            business: [],
            total: 0,
            loading: true
          }
        ], {
          type: a.SEARCH_BUSINESS,
          payload: { 
            total: 200, 
            businesses: [{id: 1}]
          }
        })
      ).toMatchObject({
        total: 200,
        business: [{id: 1}],
        loading: false
      });
    });
    it("should handle LOADING", () => {
      expect(
        reducer([
          {
            loading: false
          }
        ],
          {
            type: a.LOADING
          }
        )
      ).toMatchObject({
        loading: true
      });
    });
    it("should handle ERROR", () => {
      expect(
        reducer(
          { error: "" },
          {
            type: a.ERROR,
            payload: {
              message: "Oh my god, I did boo boo..."
            }
          }
        )
      ).toMatchObject({
        error: "Oh my god, I did boo boo..."
      });
    });
  });
});
