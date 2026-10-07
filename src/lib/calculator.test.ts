import { describe, expect, it } from "vitest";
import {
  TRONVOLT_RATE,
  TRX_USD_RATE,
  calculateSavings,
  formatTrx,
  formatUsd,
} from "./calculator";

describe("calculateSavings", () => {
  it("computes the ~70% saving against the burn baseline", () => {
    const r = calculateSavings(100, 13.5);

    expect(r.costWithout).toBe(1350);
    expect(r.costWithTronVolt).toBeCloseTo(1350 * TRONVOLT_RATE, 10);
    expect(r.savings).toBeCloseTo(1350 * (1 - TRONVOLT_RATE), 10);
    expect(r.savingsUsd).toBeCloseTo(1350 * (1 - TRONVOLT_RATE) * TRX_USD_RATE, 10);
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

  it("keeps the advertised saving rate near 70%", () => {
    const r = calculateSavings(50, 13.5);

    expect(r.savings / r.costWithout).toBeGreaterThan(0.69);
    expect(r.savings / r.costWithout).toBeLessThan(0.71);
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
