// ================================================================//
// SIDEBAR ========================================================//
// ================================================================//

// IMPORT =========================================================//
import { Form, Link, Outlet } from "react-router";
import type { Route } from "@react-router/dev/routes";
// IMPORT End =====================================================//

// SidebarLayout ==================================================//
export default function HeaderLayout({
    loaderData,
}: Route.ComponentProps) {
    console.log("HeaderLayout", loaderData);
    return (
        <>
            <header>
                <nav>
                    <p>Your content here</p>
                </nav>
            </header>
        </>
    );
}
// ================================================================//