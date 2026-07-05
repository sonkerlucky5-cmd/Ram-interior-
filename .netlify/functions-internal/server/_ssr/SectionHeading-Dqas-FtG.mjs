import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionHeading({ eyebrow, title, subtitle, center, light }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${center ? "text-center mx-auto" : ""} max-w-2xl`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `eyebrow ${light ? "text-gold-soft" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3 align-middle" }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: `text-display mt-4 text-3xl md:text-4xl lg:text-5xl ${light ? "text-ivory" : "text-foreground"}`,
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-4 text-base leading-relaxed ${light ? "text-ivory/75" : "text-muted-foreground"}`,
        children: subtitle
      }
    )
  ] });
}
export {
  SectionHeading as S
};
