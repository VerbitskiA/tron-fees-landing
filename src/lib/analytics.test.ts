import { describe, expect, it, vi } from "vitest";
import { analyticsEnabled, trackEvent, umamiConfig } from "./analytics";

describe("analytics", () => {
  it("is disabled without env configuration", () => {
    expect(umamiConfig.url).toBe("");
    expect(umamiConfig.websiteId).toBe("");
    expect(analyticsEnabled()).toBe(false);
  });

  it("trackEvent is a safe no-op outside the browser", () => {
    expect(() => trackEvent("cta_bot_click", { location: "hero" })).not.toThrow();
  });

  it("trackEvent is a safe no-op when the script is not loaded", () => {
    vi.stubGlobal("window", {});
    expect(() => trackEvent("cta_bot_click")).not.toThrow();
    vi.unstubAllGlobals();
  });

  it("forwards events to the umami script when present", () => {
    const track = vi.fn();
    vi.stubGlobal("window", { umami: { track } });

    trackEvent("cta_bot_click", { location: "hero" });

    expect(track).calledWith("cta_bot_click", { location: "hero" });
    vi.unstubAllGlobals();
  });
});
