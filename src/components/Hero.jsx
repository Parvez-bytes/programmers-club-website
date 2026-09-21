import React from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { EncryptedText } from "./ui/encrypted-text";
import DeveloperNetwork from "./DeveloperNetwork";

export default function Hero() {
    return (
        <section
            id="home"
            className="
        relative
        h-full
        min-h-0
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
        h-full
        min-h-0
        w-full
        max-w-6xl
        flex-col
        items-center
        px-6
        pt-24
        pb-10
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

                {/* Tagline */}
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
                        revealDelayMs={100}
                        flipDelayMs={2000}
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

                {/* Developer Network */}
                <DeveloperNetwork />
            </div>
        </section>
    );
}