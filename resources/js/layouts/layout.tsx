import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <header
                className="flex items-center justify-between px-6 py-4 bg-gray-800
                text-white"
            >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}
