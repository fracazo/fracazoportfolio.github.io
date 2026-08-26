/**
 * The pricing matrix from the original 2015 AngularJS test-rig prototype,
 * extracted verbatim from its app.js. Two scenarios: an open recharge paid
 * by card (the workshop's "72 possible combinations"; this later build of
 * the matrix spans 19 price points) and a $30 voucher, whose fixed value
 * leaves only six valid mixes.
 */
export type Trait = "Expiry" | "Data" | "Voice" | "International";

export type Combo = {
  price: number;
  Expiry: string;
  Data: string;
  Voice: string;
  International: string;
};

export const TRAITS: Trait[] = ["Expiry", "Data", "Voice", "International"];

export const RECHARGE: Combo[] = [
  { price: 10, Expiry: "7 days", Data: "500MB", Voice: "300 mins", International: "0 mins" },
  { price: 12.5, Expiry: "7 days", Data: "500MB", Voice: "Infinite", International: "0 mins" },
  { price: 12.5, Expiry: "7 days", Data: "500MB", Voice: "300 mins", International: "90 mins" },
  { price: 12.5, Expiry: "7 days", Data: "500MB", Voice: "Infinite", International: "90 mins" },
  { price: 12.5, Expiry: "7 days", Data: "500MB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 17.5, Expiry: "7 days", Data: "2GB", Voice: "300 mins", International: "0 mins" },
  { price: 20, Expiry: "7 days", Data: "2GB", Voice: "300 mins", International: "90 mins" },
  { price: 20, Expiry: "7 days", Data: "2GB", Voice: "Infinite", International: "0 mins" },
  { price: 20, Expiry: "7 days", Data: "500MB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 20, Expiry: "7 days", Data: "2GB", Voice: "Infinite", International: "90 mins" },
  { price: 20, Expiry: "7 days", Data: "2GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 22.5, Expiry: "7 days", Data: "4GB", Voice: "300 mins", International: "0 mins" },
  { price: 25, Expiry: "28 days", Data: "500MB", Voice: "300 mins", International: "0 mins" },
  { price: 25, Expiry: "7 days", Data: "4GB", Voice: "Infinite", International: "0 mins" },
  { price: 25, Expiry: "7 days", Data: "4GB", Voice: "300 mins", International: "90 mins" },
  { price: 30, Expiry: "28 days", Data: "500MB", Voice: "300 mins", International: "90 mins" },
  { price: 30, Expiry: "28 days", Data: "500MB", Voice: "Infinite", International: "0 mins" },
  { price: 30, Expiry: "28 days", Data: "2GB", Voice: "300 mins", International: "0 mins" },
  { price: 30, Expiry: "7 days", Data: "2GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 30, Expiry: "7 days", Data: "4GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 30, Expiry: "7 days", Data: "4GB", Voice: "Infinite", International: "90 mins" },
  { price: 35, Expiry: "28 days", Data: "500MB", Voice: "Infinite", International: "90 mins" },
  { price: 35, Expiry: "28 days", Data: "500MB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 35, Expiry: "28 days", Data: "2GB", Voice: "300 mins", International: "90 mins" },
  { price: 35, Expiry: "28 days", Data: "2GB", Voice: "Infinite", International: "0 mins" },
  { price: 35, Expiry: "28 days", Data: "4GB", Voice: "300 mins", International: "0 mins" },
  { price: 35, Expiry: "7 days", Data: "4GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 40, Expiry: "28 days", Data: "500MB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 40, Expiry: "28 days", Data: "2GB", Voice: "Infinite", International: "90 mins" },
  { price: 40, Expiry: "28 days", Data: "2GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 40, Expiry: "28 days", Data: "4GB", Voice: "300 mins", International: "90 mins" },
  { price: 40, Expiry: "28 days", Data: "4GB", Voice: "Infinite", International: "0 mins" },
  { price: 40, Expiry: "7 days", Data: "6GB", Voice: "300 mins", International: "0 mins" },
  { price: 40, Expiry: "7 days", Data: "6GB", Voice: "300 mins", International: "90 mins" },
  { price: 40, Expiry: "7 days", Data: "6GB", Voice: "Infinite", International: "0 mins" },
  { price: 45, Expiry: "28 days", Data: "2GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 45, Expiry: "28 days", Data: "4GB", Voice: "Infinite", International: "90 mins" },
  { price: 45, Expiry: "28 days", Data: "4GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 45, Expiry: "28 days", Data: "6GB", Voice: "300 mins", International: "0 mins" },
  { price: 45, Expiry: "7 days", Data: "6GB", Voice: "Infinite", International: "90 mins" },
  { price: 45, Expiry: "7 days", Data: "6GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 50, Expiry: "28 days", Data: "4GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 50, Expiry: "28 days", Data: "6GB", Voice: "300 mins", International: "90 mins" },
  { price: 50, Expiry: "28 days", Data: "6GB", Voice: "Infinite", International: "0 mins" },
  { price: 50, Expiry: "7 days", Data: "6GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 50, Expiry: "60 days", Data: "500MB", Voice: "300 mins", International: "0 mins" },
  { price: 55, Expiry: "28 days", Data: "6GB", Voice: "Infinite", International: "90 mins" },
  { price: 55, Expiry: "28 days", Data: "6GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 60, Expiry: "28 days", Data: "6GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 60, Expiry: "60 days", Data: "500MB", Voice: "300 mins", International: "90 mins" },
  { price: 60, Expiry: "60 days", Data: "500MB", Voice: "Infinite", International: "0 mins" },
  { price: 60, Expiry: "60 days", Data: "2GB", Voice: "300 mins", International: "0 mins" },
  { price: 70, Expiry: "60 days", Data: "500MB", Voice: "Infinite", International: "90 mins" },
  { price: 70, Expiry: "60 days", Data: "500MB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 70, Expiry: "60 days", Data: "2GB", Voice: "300 mins", International: "90 mins" },
  { price: 70, Expiry: "60 days", Data: "2GB", Voice: "Infinite", International: "0 mins" },
  { price: 70, Expiry: "60 days", Data: "4GB", Voice: "300 mins", International: "0 mins" },
  { price: 80, Expiry: "60 days", Data: "500MB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 80, Expiry: "60 days", Data: "2GB", Voice: "Infinite", International: "90 mins" },
  { price: 80, Expiry: "60 days", Data: "2GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 80, Expiry: "60 days", Data: "4GB", Voice: "300 mins", International: "90 mins" },
  { price: 80, Expiry: "60 days", Data: "4GB", Voice: "Infinite", International: "0 mins" },
  { price: 90, Expiry: "60 days", Data: "2GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 90, Expiry: "60 days", Data: "4GB", Voice: "Infinite", International: "90 mins" },
  { price: 90, Expiry: "60 days", Data: "4GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 90, Expiry: "60 days", Data: "6GB", Voice: "300 mins", International: "0 mins" },
  { price: 100, Expiry: "60 days", Data: "4GB", Voice: "Infinite", International: "90 mins + Inf 10" },
  { price: 100, Expiry: "60 days", Data: "6GB", Voice: "300 mins", International: "90 mins" },
  { price: 100, Expiry: "60 days", Data: "6GB", Voice: "Infinite", International: "0 mins" },
  { price: 110, Expiry: "60 days", Data: "6GB", Voice: "Infinite", International: "90 mins" },
  { price: 110, Expiry: "60 days", Data: "6GB", Voice: "300 mins", International: "90 mins + Inf 10" },
  { price: 120, Expiry: "60 days", Data: "6GB", Voice: "Infinite", International: "90 mins + Inf 10" },
];

export const VOUCHER_30: Combo[] = [
  { price: 30, Expiry: "28 days", Data: "500MB", Voice: "300 mins", International: "90 mins" },
  { price: 30, Expiry: "28 days", Data: "500MB", Voice: "Infinite", International: "0 mins" },
  { price: 30, Expiry: "28 days", Data: "2GB", Voice: "300 mins", International: "0 mins" },
  { price: 30, Expiry: "7 days", Data: "2GB", Voice: "Infinite", International: "Infinite+" },
  { price: 30, Expiry: "7 days", Data: "4GB", Voice: "300 mins", International: "Infinite+" },
  { price: 30, Expiry: "7 days", Data: "4GB", Voice: "Infinite", International: "90 mins" },
];
