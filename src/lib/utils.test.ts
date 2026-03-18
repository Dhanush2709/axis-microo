import { describe, expect, it } from "vitest";

import { formatDate, slugify } from "@/lib/utils";

describe("utils", () => {
  it("slugify creates URL-safe slugs", () => {
    expect(slugify("Precision Gears 20MnCr5")).toBe("precision-gears-20mncr5");
  });

  it("formatDate returns localized output", () => {
    expect(formatDate("2026-03-01")).toContain("2026");
  });
});

