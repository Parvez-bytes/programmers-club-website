"use client";

import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

import { cn } from "../../lib/utils";
import { MenuItem, HoveredLink } from "./navbar-menu";

export const FloatingNav = ({ className }) => {
    const { scrollY } = useScroll();

    const [visible, setVisible] = useState(true);
    const [active, setActive] = useState(null);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious();

        if (previous === undefined) return;

        const direction = current - previous;

        // Always visible near the top
        if (current < 50) {
            setVisible(true);
            return;
        }

        // Scrolling up
        if (direction < 0) {
            setVisible(true);
        }

        // Scrolling down
        else if (direction > 0) {
            setVisible(false);
            setActive(null);
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                animate={{
                    y: visible ? 0 : -120,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className={cn(
                    "fixed left-1/2 top-4 z-[5000] -translate-x-1/2",
                    className
                )}
            >
                {/* NAVBAR */}
                <div
                    className="
                            relative
                            flex
                            items-center
                            gap-1
                            rounded-full
                            border
                            border-white/15
                            bg-neutral-700/40
                            px-3
                            py-2
                            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                            backdrop-blur-2xl
                            backdrop-saturate-150
                          "
                >
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.07] via-transparent to-transparent" />                    {/* HOME */}
                    
                    <a
                        href="#home"
                        className="
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
                        Home
                    </a>

                    {/* ABOUT */}
                    <a
                        href="#about"
                        className="
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
                        About
                    </a>

                    {/* ACTIVITIES */}
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Activities"
                    >
                        <div className="flex flex-col gap-1">
                            <HoveredLink href="#events">
                                Events
                            </HoveredLink>

                            <HoveredLink href="#dsaverse">
                                DSAVerse
                            </HoveredLink>

                            <HoveredLink href="#gallery">
                                Gallery
                            </HoveredLink>
                        </div>
                    </MenuItem>

                    {/* COMMUNITY */}
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Community"
                    >
                        <div className="flex flex-col gap-1">
                            <HoveredLink href="#team">
                                Team
                            </HoveredLink>

                            <HoveredLink href="#groups">
                                Groups
                            </HoveredLink>

                            <HoveredLink href="#alumni">
                                Alumni
                            </HoveredLink>
                        </div>
                    </MenuItem>

                    {/* CONTACT */}
                    <a
                        href="#contact"
                        className="
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
                        Contact
                    </a>

                    {/* DIVIDER */}
                    <div className="mx-2 h-6 w-px bg-white/20" />

                    {/* LOGIN */}
                    <button
                        className="
                            rounded-full
                            bg-neutral-900
                            px-5
                            py-2
                            text-sm
                            font-medium
                            text-white
                            transition-all
                            duration-200
                            hover:scale-105
                            hover:bg-neutral-800
                        "
                    >
                        Login
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};