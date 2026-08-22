"use client";

import React from "react";
import { motion } from "motion/react";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}) => {
    return (
        <div
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
            className="relative"
        >
            {/* MENU ITEM */}
            <div
                className="
                    cursor-pointer
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-neutral-300
                    transition-all
                    duration-200
                    hover:bg-white
                    hover:text-black
                "
            >
                {item}
            </div>

            {/* DROPDOWN */}
            {active === item && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={transition}
                    className="
                        absolute
                        left-1/2
                        top-full
                        -translate-x-1/2
                        pt-3
                    "
                >
                    <div
                        className="
                            min-w-[220px]
                            rounded-xl
                            border
                            border-white/10
                            bg-neutral-950/95
                            p-3
                            shadow-2xl
                            backdrop-blur-xl
                        "
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const HoveredLink = ({
    children,
    ...rest
}) => {
    return (
        <a
            {...rest}
            className="
                block
                rounded-lg
                px-3
                py-2
                text-sm
                font-medium
                text-neutral-400
                transition-all
                duration-200
                hover:bg-white
                hover:text-black
            "
        >
            {children}
        </a>
    );
};