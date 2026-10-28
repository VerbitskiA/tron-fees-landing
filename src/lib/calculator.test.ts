import { describe, expect, it } from "vitest";
import {
  TRX_USD_RATE,
  calculateSavings,
  formatTrx,
  formatUsd,
  priceForBurnTrx,
} from "./calculator";

describe("priceForBurnTrx", () => {
  it("charges the 65k package for a warm USDT transfer", () => {
    expect(priceForBurnTrx(13.5)).toBe(4.0);
    expect(priceForBurnTrx(10)).toBe(4.0);
  });

  it("charges the 135k package for a cold USDT transfer", () => {
    expect(priceForBurnTrx(27)).toBe(5.0);
    expect(priceForBurnTrx(14)).toBe(5.0);
  });

  it("charges the 270k package for multi-transfer burns", () => {
    expect(priceForBurnTrx(54)).toBe(7.5);
    expect(priceForBurnTrx(30)).toBe(7.5);
  });

  it("stacks packages above the largest one", () => {
    expect(priceForBurnTrx(70)).toBe(15.0);
    expect(priceForBurnTrx(108)).toBe(15.0);
    expect(priceForBurnTrx(109)).toBe(22.5);
  });
});

describe("calculateSavings", () => {
  it("computes savings against the burn baseline with package pricing", () => {
    const r = calculateSavings(100, 13.5);

    expect(r.costWithout).toBe(1350);
    expect(r.costWithTronVolt).toBe(400);
    expect(r.savings).toBe(950);
    expect(r.savingsUsd).toBe(950 * TRX_USD_RATE);
  });

  it("returns zeros for zero transactions", () => {
    const r = calculateSavings(0, 13.5);

    expect(r.costWithout).toBe(0);
    expect(r.costWithTronVolt).toBe(0);
    expect(r.savings).toBe(0);
    expect(r.savingsUsd).toBe(0);
  });

  it("clamps negative inputs to zero", () => {
    const r = calculateSavings(-10, -5);

    expect(r.costWithout).toBe(0);
    expect(r.savings).toBe(0);
  });

  it("keeps the advertised saving rate near 70% for a warm transfer", () => {
    const r = calculateSavings(50, 13.5);

    expect(r.savings / r.costWithout).toBeGreaterThan(0.69);
    expect(r.savings / r.costWithout).toBeLessThan(0.71);
  });

  it("saves more per transaction on cold/multi-transfer burns", () => {
    const r = calculateSavings(50, 27);

    expect(r.savings / r.costWithout).toBeGreaterThan(0.8);
  });
});

describe("formatters", () => {
  it("formats TRX with up to 4 decimals", () => {
    expect(formatTrx(1350)).toBe("1,350.00");
    expect(formatTrx(405.123456)).toBe("405.1235");
  });

  it("formats USD as currency", () => {
    expect(formatUsd(123.4)).toBe("$123.40");
  });
});
