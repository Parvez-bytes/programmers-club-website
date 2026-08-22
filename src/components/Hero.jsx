import React from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import StatCard from "./StatCard";
import { EncryptedText } from "./ui/encrypted-text";

export default function Hero() {
    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                w-full
                overflow-hidden
                bg-[#090909]
            "
        >
            {/* Background */}
            <BackgroundRippleEffect />

            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-screen
                    w-full
                    max-w-6xl
                    flex-col
                    items-center
                    px-6
                    pt-24
                    pb-20
                    text-center
                "
            >
                {/* Heading */}
                <h1
                    className="
                        text-5xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                    "
                >
                    Programmers Club
                </h1>

                {/* ================= TAGLINE ================= */}
                <h2
                    className="
                        mt-4
                        text-xl
                        font-semibold
                        sm:text-2xl
                        md:text-3xl
                    "
                >
                    <EncryptedText
                        text="Build. Code. Innovate."
                        encryptedClassName="text-neutral-600"
                        revealedClassName="text-neutral-200"
                        revealDelayMs={70}
                        flipDelayMs={45}
                    />
                </h2>

                {/* Description */}
                <p
                    className="
                        mt-5
                        max-w-3xl
                        text-sm
                        leading-relaxed
                        text-neutral-400
                        sm:text-base
                        md:text-lg
                    "
                >
                    <span className="font-semibold text-white">
                        For the students, by the students.
                    </span>{" "}
                    Transform your passion into expertise. Join a community where
                    innovation meets collaboration, and ideas become reality
                    through code.
                </p>

                {/* Buttons */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                    "
                >
                    <button
                        className="
                            rounded-full
                            bg-white
                            px-8
                            py-3.5
                            text-sm
                            font-semibold
                            text-black
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-neutral-200
                        "
                    >
                        Join the Community
                    </button>

                    <a
                        href="#events"
                        className="
                            rounded-full
                            border
                            border-neutral-700
                            bg-black/50
                            px-8
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-neutral-900
                        "
                    >
                        Explore Events
                    </a>
                </div>

                {/* ================= STATS ================= */}
                <div
                    className="
                        mt-14
                        grid
                        w-full
                        max-w-5xl
                        grid-cols-1
                        gap-6
                        sm:grid-cols-3
                    "
                >
                    <StatCard
                        icon={<i className="ri-group-line" />}
                        number="350+"
                        label="Active Members"
                        colors={[
                            [0, 200, 255],
                            [50, 100, 255],
                        ]}
                    />

                    <StatCard
                        icon={<i className="ri-code-s-slash-line" />}
                        number="50+"
                        label="Projects Built"
                        colors={[
                            [170, 70, 255],
                            [70, 100, 255],
                        ]}
                    />

                    <StatCard
                        icon={<i className="ri-medal-fill" />}
                        number="25+"
                        label="Events / Year"
                        colors={[
                            [255, 70, 170],
                            [255, 120, 40],
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}