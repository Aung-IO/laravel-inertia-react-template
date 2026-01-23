import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./layouts/layout";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
        let page = pages[`./Pages/${name}.tsx`];
        page.default.layout =
            page.default.layout ||
            ((page: React.ReactNode) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
        showSpinner: true,
    }
});
