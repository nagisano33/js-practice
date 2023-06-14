import { jest } from "@jest/globals";
import { loop, nabeatsu, getScoreMessage } from "./index.js";

describe("loop のテスト", () => {
  test("times 回 callback を呼び出す", () => {
    const times = 10;
    const callback = jest.fn();

    loop(times, callback);

    expect(callback).toBeCalledTimes(times);
  });
});

describe("nabeatsu のテスト", () => {
  test("num が 3 の倍数なら true を返す", () => {
    const num = 100000 * 3;

    expect(nabeatsu(num)).toBe(true);
  });
});

describe("getScoreMessage のテスト", () => {
  test.each([
    [100, "perfect"],
    [99, "nice"],
    [80, "nice"],
    [79, "good"],
    [60, "good"],
    [59, "bad"],
    [0, "bad"],
  ])("point が %d なら %s を返す", (point, message) => {
    expect(getScoreMessage(point)).toBe(message);
  });

  test("point が 101 ならエラーを投げる", () => {
    expect(() => getScoreMessage(101)).toThrowError();
  });
  test("point が -1 ならエラーを投げる", () => {
    expect(() => getScoreMessage(-1)).toThrowError();
  });
});
