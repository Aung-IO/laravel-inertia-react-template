import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { Coffee } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            <header className="flex items-center justify-between px-10 py-4 bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 text-stone-900">
                <Link href="/">
                    <div className="text-xl font-bold text-amber-900 flex items-center gap-2">
                        <Coffee className="h-6 w-6" />
                        <span>Developers' TeaTalk</span>
                    </div>
                </Link>
                <div className="flex gap-4">
                    <Link href="/login">
                        <Button
                            variant="ghost"
                            className="text-stone-600 hover:text-amber-900 hover:bg-amber-50"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className="bg-amber-700 hover:bg-amber-800 text-white shadow-sm hover:shadow-md transition-all">
                            Register
                        </Button>
                    </Link>
                </div>
            </header>
            <article>{children}</article>
        </main>
    );
}
