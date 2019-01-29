const requestExtraction = require('../request');

describe("Request", () => {
  it("can be sent", async () => {
    const message = "The cat was really stupid";
    const data = await requestExtraction(message);
    expect(data).toEqual({ message });
  });
});
