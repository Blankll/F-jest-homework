import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    axios.post.mockResolvedValue({ data: {} });
    // TODO 19: add test here
    const res = register("userone", "passwordone");
    await expect(res).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    await expect(register("userone", "passwordone")).rejects.toThrow(
      new Error("wrong username or password")
    );
  });
});
