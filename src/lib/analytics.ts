type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (name: string, props?: EventProps) => void;
    };
  }
}

export const umamiConfig = {
  /** Umami instance base URL, e.g. https://analytics.example.com (empty → tracking disabled). */
  url: process.env.NEXT_PUBLIC_UMAMI_URL ?? "",
  /** Website id from the Umami dashboard. */
  websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? "",
};

export function analyticsEnabled(): boolean {
  return Boolean(umamiConfig.url && umamiConfig.websiteId);
}

/**
 * Fire a funnel event via the Umami script. Safe no-op when analytics is not
 * configured or the script has not loaded (SSR, ad blockers).
 */
export function trackEvent(name: string, props?: EventProps): void {
  if (typeof window === "undefined") return;
  window.umami?.track(name, props);
}
