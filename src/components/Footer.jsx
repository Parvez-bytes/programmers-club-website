import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#090909] text-white">
            {/* BOTTOM LINE */}
            <div className="h-px w-full bg-white/[0.08]" />

            {/* BOTTOM BAR */}
            <div className="mx-auto flex h-[60px] w-full max-w-6xl items-center justify-between px-6">
                
                {/* Copyright */}
                <p className="text-xs text-neutral-600 sm:text-sm">
                    © Designed & Built by Parvez Patel.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                        <i className="ri-instagram-line text-base" />
                    </a>

                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                        <i className="ri-linkedin-box-line text-base" />
                    </a>

                    <a
                        href="#"
                        aria-label="GitHub"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                        <i className="ri-github-line text-base" />
                    </a>

                    <a
                        href="#"
                        aria-label="Facebook"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                        <i className="ri-facebook-line text-base" />
                    </a>

                    <a
                        href="#"
                        aria-label="X"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                        <i className="ri-twitter-x-line text-base" />
                    </a>
                </div>
            </div>
        </footer>
    );
}