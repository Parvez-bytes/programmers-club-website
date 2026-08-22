"use client";

import React, { useState } from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const StatCard = ({
    icon,
    number,
    label,
    colors = [
        [0, 200, 255],
        [50, 100, 255],
    ],
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="
                group
                relative
                h-56
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0b0b0b]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white/25
                hover:shadow-2xl
            "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* =========================
                COLORED CANVAS BACKGROUND
            ========================== */}
            <div
                className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    transition-opacity
                    duration-500
                    ${hovered ? "opacity-100" : "opacity-0"}
                `}
            >
                <CanvasRevealEffect
                    animationSpeed={1.2}
                    containerClassName="bg-transparent"
                    colors={colors}
                    opacities={[
                        0.08,
                        0.10,
                        0.12,
                        0.15,
                        0.18,
                        0.22,
                        0.26,
                        0.30,
                        0.35,
                        0.40,
                    ]}
                    dotSize={3}
                    showGradient={false}
                />
            </div>

            {/* =========================
                COLOR GLOW
            ========================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 65%)",
                }}
            />

            {/* =========================
                DARK OVERLAY
            ========================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-black/25
                    transition-all
                    duration-300
                    group-hover:bg-black/5
                "
            />

            {/* =========================
                CONTENT
            ========================== */}
            <div
                className="
                    relative
                    z-20
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    text-center
                "
            >
                {/* Icon */}
                <div
                    className="
                        text-4xl
                        text-neutral-400
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-white
                    "
                >
                    {icon}
                </div>

                {/* Number */}
                <p
                    className="
                        mt-4
                        text-4xl
                        font-bold
                        tracking-tight
                        text-white
                    "
                >
                    {number}
                </p>

                {/* Label */}
                <p
                    className="
                        mt-2
                        text-base
                        text-neutral-500
                        transition-colors
                        duration-300
                        group-hover:text-neutral-200
                    "
                >
                    {label}
                </p>
            </div>
        </div>
    );
};

export default StatCard;