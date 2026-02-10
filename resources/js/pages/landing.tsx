import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRight, Code, Coffee, Cpu, Users } from "lucide-react";

export default function Landing() {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            {/* Hero Section */}
            <section className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-amber-100),white)] opacity-20" />
                <div className="mx-auto max-w-7xl text-center">
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 p-4 ring-8 ring-amber-50">
                        <Coffee className="h-12 w-12 text-amber-700" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-6xl mb-6">
                        Brew Your Best{" "}
                        <span className="text-amber-700">Ideas</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 mb-10">
                        Welcome to{" "}
                        <span className="font-bold text-amber-800">
                            TeaTalk
                        </span>
                        . Join a thriving community of developers sharing
                        knowledge, debugging life, and building the future—one
                        cup at a time.
                    </p>
                    <div className="flex items-center justify-center gap-x-6">
                        <Link href="/register">
                            <Button
                                size="lg"
                                className="bg-amber-700 hover:bg-amber-800 text-white shadow-lg shadow-amber-700/20 text-lg px-4 py-3 rounded-full h-auto"
                            >
                                Get Started{" "}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-semibold leading-6 text-stone-600 hover:text-amber-700 transition-colors"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Motivation Quote Section */}
            <section className="bg-amber-900 py-16 sm:py-24 text-amber-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
                    <Code className="w-96 h-96" />
                </div>
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
                    <figure>
                        <blockquote className="text-2xl font-serif italic font-medium sm:text-4xl leading-relaxed">
                            "Code is like humor. When you have to explain it,
                            it’s bad."
                        </blockquote>
                        <figcaption className="mt-6 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-amber-200">
                                Cory House
                            </div>
                            <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-amber-200/50"
                            >
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-amber-200/70">
                                Software Architect
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* Features/Value Props */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-amber-600">
                            Why TeaTalk?
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                            Everything you need to grow
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col items-start">
                                <div className="rounded-lg bg-stone-100 p-2 ring-1 ring-stone-200 mb-4">
                                    <Users
                                        className="h-6 w-6 text-stone-700"
                                        aria-hidden="true"
                                    />
                                </div>
                                <dt className="text-lg font-bold leading-7 text-stone-900">
                                    Connect with Peers
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-stone-600">
                                    Find developers who share your stack and
                                    passion. Mentor, be mentored, or just chat.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-lg bg-stone-100 p-2 ring-1 ring-stone-200 mb-4">
                                    <Coffee
                                        className="h-6 w-6 text-stone-700"
                                        aria-hidden="true"
                                    />
                                </div>
                                <dt className="text-lg font-bold leading-7 text-stone-900">
                                    Casual Atmosphere
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-stone-600">
                                    No pressure, just code and good vibes. Like
                                    a coffee shop, but on the internet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-lg bg-stone-100 p-2 ring-1 ring-stone-200 mb-4">
                                    <Cpu
                                        className="h-6 w-6 text-stone-700"
                                        aria-hidden="true"
                                    />
                                </div>
                                <dt className="text-lg font-bold leading-7 text-stone-900">
                                    Stay Sharp
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-stone-600">
                                    Keep up with the latest tech trends and
                                    framework battles (peacefully).
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    );
}
