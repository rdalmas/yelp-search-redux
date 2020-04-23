import { getPaginationData } from "../pagination";

describe("Selectors - Pagination", () => {
  it(" - getPaginationData ", () => {
    const expected = {
      total: 15,
      limit: 10
    };
    const result = getPaginationData.resultFunc({ total: 15, limit: 10 });
    expect(result).toMatchObject(expected);
  });
});