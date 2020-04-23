import { actions as a } from "../../actions";
import reducer from "../appState";

const initialState = {
  loading: false,
  error: ""
};

describe("Reducers - App State", () => {
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
            loading: true
          }
        ], {
          type: a.SEARCH_BUSINESS
        })
      ).toMatchObject({
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
