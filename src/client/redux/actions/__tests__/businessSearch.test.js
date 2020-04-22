import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

import * as actions from "../businessSearch";
import { actions as a, endpoints as e } from "../../actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

const baseUrl = process.env.RAZZLE_SERVER_HOST;

describe("Actions - USER", () => {
  beforeEach(() => {
    store = mockStore({});
  });
  describe("searchBusiness", () => {
    it("should dispatch an action to search business - SUCCESS", done => {
      nock(baseUrl)
        .get(`/${e.SEARCH_BUSINESS}?categories=sushi&location=Berlin%2C+Germany&limit=10`)
        .reply(200);
      const loadingAction = { type: a.LOADING };
      const loadedAction = { type: a.SEARCH_BUSINESS };
      store
        .dispatch(actions.searchBusiness({ categories: "sushi", location: "Berlin, Germany", limit: 10 }))
        .then(() => {
          const storeTypes = store.getActions().map(action => {
            return { type: action.type };
          });
          expect(storeTypes).to.deep.include(loadingAction);
          expect(storeTypes).to.deep.include(loadedAction);
          expect(storeTypes.length).to.eql(2);
          done();
        })
        .catch(() => done());
    });
    it("should create an action to fetch user Id - FAILURE", done => {
      nock(baseUrl)
        .get(`/${e.SEARCH_BUSINESS}?categories=sushi&location=Berlin%2C+Germany&limit=10`)
        .replyWithError({
          message: "Something wrong happened...",
          code: 500
        });
      const loadingAction = { type: a.LOADING };
      const errorAction = { type: a.ERROR };
      store
        .dispatch(actions.searchBusiness({ categories: "sushi", location: "Berlin, Germany", limit: 10 }))
        .then(() => {
          const storeTypes = store.getActions().map(action => {
            return { type: action.type };
          });
          expect(storeTypes).to.deep.include(loadingAction);
          expect(storeTypes).to.deep.include(errorAction);
          expect(storeTypes.length).to.eql(2);
          done();
        })
        .catch(() => done());
    });
  });
});
