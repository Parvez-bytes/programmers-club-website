import React, { useState } from "react";

const nodes = [
    {
        id: "projects",
        label: "PROJECTS",
        description: "Turn ideas into real-world projects.",
        x: 18,
        y: 32,
    },
    {
        id: "workshops",
        label: "WORKSHOPS",
        description: "Learn technologies beyond the classroom.",
        x: 78,
        y: 20,
    },
    {
        id: "events",
        label: "EVENTS",
        description: "Hackathons, competitions and technical events.",
        x: 20,
        y: 78,
    },
    {
        id: "community",
        label: "COMMUNITY",
        description: "Connect, collaborate and grow together.",
        x: 80,
        y: 76,
    },
];

export default function DeveloperNetwork() {
    const [activeNode, setActiveNode] = useState(null);

    return (
        <div className="relative mt-10 h-[250px] w-full max-w-5xl">
            {/* SVG CONNECTIONS */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1000 300"
                fill="none"
                preserveAspectRatio="none"
            >
                {/* Projects → Center */}
                <path
                    d="M180 96 C300 96 340 145 430 150"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />

                {/* Workshops → Center */}
                <path
                    d="M780 60 C650 60 650 120 570 145"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />

                {/* Events → Center */}
                <path
                    d="M200 234 C320 234 350 175 430 155"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />

                {/* Community → Center */}
                <path
                    d="M800 228 C680 228 650 180 570 155"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />

                {/* Animated particles */}
                <circle r="3" fill="white">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M180 96 C300 96 340 145 430 150"
                    />
                </circle>

                <circle r="3" fill="white">
                    <animateMotion
                        dur="4.5s"
                        repeatCount="indefinite"
                        path="M780 60 C650 60 650 120 570 145"
                    />
                </circle>

                <circle r="3" fill="white">
                    <animateMotion
                        dur="4.2s"
                        repeatCount="indefinite"
                        path="M200 234 C320 234 350 175 430 155"
                    />
                </circle>

                <circle r="3" fill="white">
                    <animateMotion
                        dur="4.7s"
                        repeatCount="indefinite"
                        path="M800 228 C680 228 650 180 570 155"
                    />
                </circle>
            </svg>

            {/* NETWORK NODES */}
            {nodes.map((node) => {
                const active = activeNode === node.id;

                return (
                    <div
                        key={node.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                        }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                    >
                        <div className="flex cursor-pointer flex-col items-center">
                            {/* Node */}
                            <div
                                className={`
                                    relative flex h-4 w-4 items-center justify-center
                                    rounded-full border
                                    transition-all duration-300
                                    ${
                                        active
                                            ? "scale-150 border-white bg-white shadow-[0_0_25px_rgba(255,255,255,0.7)]"
                                            : "border-neutral-500 bg-[#090909]"
                                    }
                                `}
                            >
                                <div
                                    className={`
                                        h-1.5 w-1.5 rounded-full
                                        transition-all duration-300
                                        ${
                                            active
                                                ? "bg-black"
                                                : "bg-neutral-400"
                                        }
                                    `}
                                />
                            </div>

                            {/* Label */}
                            <span
                                className={`
                                    mt-3 whitespace-nowrap
                                    text-xs font-semibold
                                    tracking-[0.2em]
                                    transition-all duration-300
                                    ${
                                        active
                                            ? "text-white"
                                            : "text-neutral-500"
                                    }
                                `}
                            >
                                {node.label}
                            </span>

                            {/* Description */}
                            <div
                                className={`
                                    pointer-events-none absolute top-12
                                    w-48 rounded-xl
                                    border border-white/10
                                    bg-[#0d0d0d]/95
                                    px-4 py-3
                                    text-center shadow-2xl
                                    backdrop-blur-md
                                    transition-all duration-300
                                    ${
                                        active
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-2 opacity-0"
                                    }
                                `}
                            >
                                <p className="text-xs leading-relaxed text-neutral-400">
                                    {node.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* CENTER NODE */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                    className="
                        relative flex h-24 w-24
                        items-center justify-center
                        rounded-full
                        border border-white/15
                        bg-[#0b0b0b]
                        shadow-[0_0_60px_rgba(255,255,255,0.08)]
                    "
                >
                    {/* Outer ring */}
                    <div className="absolute inset-[-10px] rounded-full border border-white/[0.05]" />

                    {/* Inner ring */}
                    <div className="absolute inset-[-4px] rounded-full border border-white/[0.08]" />

                    <div className="text-center">
                        <div className="text-lg font-bold tracking-tight text-white">
                            &lt;/&gt;
                        </div>

                        <div className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-neutral-500">
                            PROGRAMMERS
                        </div>

                        <div className="text-[9px] font-semibold tracking-[0.2em] text-neutral-500">
                            CLUB
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}