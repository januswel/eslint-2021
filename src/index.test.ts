import { main } from "./index";

describe("index", () => {
  describe("main", () => {
    it("returns 1", () => {
      expect(main()).toBe(1);
    });
  });
});
