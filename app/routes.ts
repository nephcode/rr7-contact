// ================================================================//
// ROUTE ==========================================================//
// ================================================================//

// IMPORT =========================================================//
import type { RouteConfig } from "@react-router/dev/routes";
import {
  index,
  layout,
  route,
} from "@react-router/dev/routes";

// EXPORT =========================================================//
export default [
  layout("layouts/sidebar.tsx", [
    index("pages/home.tsx"),
    route("contacts/:contactId", "routes/contact.tsx"),
  ]),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
// ================================================================//