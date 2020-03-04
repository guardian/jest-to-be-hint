import { toBeHint } from "./index";

expect.extend({ toBeHint });

test("prints out the hint (expected to fail)", () => {
  const cases = [
    { got: "savoury pancake", want: "sugar and lemon!" },
    { got: "Liverpool", want: "Chelsea!" }
  ];

  cases.forEach(test => {
    const hint = `got: ${test.got}, want: ${test.want}`;
    expect(test.got).toBeHint(test.want, hint);
  });
});
