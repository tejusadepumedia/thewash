import { useEffect, useState } from "react";

// Thanksgiving sale: 15% off all services.
// Ends automatically at 12:00 AM Eastern on Monday, Nov 30, 2026.
export const SALE = {
  name: "Thanksgiving Sale",
  percentOff: 15,
  endsAt: new Date("2026-11-30T00:00:00-05:00"),
};

export function isSaleActive(now = new Date()) {
  return now < SALE.endsAt;
}

// Rounds down so the discount is never less than the advertised percent.
export function salePrice(price) {
  return Math.floor(price * (1 - SALE.percentOff / 100));
}

// Re-renders when the sale ends, so a page left open past midnight updates itself.
export function useSaleActive() {
  const [active, setActive] = useState(() => isSaleActive());

  useEffect(() => {
    if (!active) return;
    const MAX_TIMEOUT = 2 ** 31 - 1;
    let id;
    const schedule = () => {
      const remaining = SALE.endsAt - Date.now();
      if (remaining <= 0) {
        setActive(false);
        return;
      }
      id = setTimeout(schedule, Math.min(remaining, MAX_TIMEOUT));
    };
    schedule();
    return () => clearTimeout(id);
  }, [active]);

  return active;
}
