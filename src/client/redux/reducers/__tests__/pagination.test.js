import { actions as a } from "../../actions";
import reducer from "../pagination";

const initialState = {
  limitOptions: [10, 25, 50],
  total: 0,
  limit: 10
};

describe("Reducers - Pagination", () => {
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
            total: 0
          }
        ], {
          type: a.SEARCH_BUSINESS,
          payload: {
            total: 100
          }
        })
      ).toMatchObject({
        total: 100
      });
    });
  });
});
