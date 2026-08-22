"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "../../lib/utils";

export const CanvasRevealEffect = ({
    animationSpeed = 0.4,
    opacities = [
        0.3,
        0.3,
        0.3,
        0.5,
        0.5,
        0.5,
        0.8,
        0.8,
        0.8,
        1,
    ],
    colors = [[0, 255, 255]],
    containerClassName = "",
    dotSize = 3,
    showGradient = false,
}) => {
    return (
        <div
            className={cn(
                "relative h-full w-full overflow-hidden bg-transparent",
                containerClassName
            )}
        >
            <Canvas
                className="absolute inset-0 h-full w-full"
                dpr={[1, 2]}
                gl={{
                    alpha: true,
                    antialias: true,
                }}
                camera={{
                    position: [0, 0, 1],
                    fov: 75,
                }}
            >
                <DotMatrix
                    colors={colors}
                    opacities={opacities}
                    dotSize={dotSize}
                    animationSpeed={animationSpeed}
                />
            </Canvas>

            {showGradient && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
            )}
        </div>
    );
};

const DotMatrix = ({
    colors,
    opacities,
    dotSize,
    animationSpeed,
}) => {
    const { size } = useThree();
    const materialRef = useRef();

    const uniforms = useMemo(() => {
        const colorArray = [
            colors[0] || [255, 255, 255],
            colors[1] || colors[0] || [255, 255, 255],
            colors[0] || [255, 255, 255],
            colors[1] || colors[0] || [255, 255, 255],
            colors[0] || [255, 255, 255],
            colors[1] || colors[0] || [255, 255, 255],
        ];

        return {
            u_time: { value: 0 },
            u_resolution: {
                value: new THREE.Vector2(size.width, size.height),
            },
            u_colors: {
                value: colorArray.map(
                    ([r, g, b]) => new THREE.Vector3(r / 255, g / 255, b / 255)
                ),
            },
            u_opacities: {
                value: opacities,
            },
            u_dotSize: {
                value: dotSize,
            },
            u_animationSpeed: {
                value: animationSpeed,
            },
        };
    }, [colors, opacities, dotSize, animationSpeed, size.width, size.height]);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.u_time.value =
                clock.getElapsedTime();
        }
    });

    return (
        <mesh>
            <planeGeometry args={[2, 2]} />

            <shaderMaterial
                ref={materialRef}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                uniforms={uniforms}
                vertexShader={`
                    varying vec2 vUv;

                    void main() {
                        vUv = uv;

                        gl_Position = projectionMatrix *
                            modelViewMatrix *
                            vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    precision mediump float;

                    varying vec2 vUv;

                    uniform float u_time;
                    uniform vec2 u_resolution;
                    uniform vec3 u_colors[6];
                    uniform float u_opacities[10];
                    uniform float u_dotSize;
                    uniform float u_animationSpeed;

                    float random(vec2 st) {
                        return fract(
                            sin(
                                dot(
                                    st,
                                    vec2(12.9898, 78.233)
                                )
                            ) * 43758.5453123
                        );
                    }

                    void main() {

                        vec2 pixel = vUv * u_resolution;

                        float gridSize = 12.0;

                        vec2 grid = floor(pixel / gridSize);

                        vec2 cell = fract(pixel / gridSize);

                        float randomValue = random(grid);

                        float time =
                            u_time *
                            u_animationSpeed;

                        float wave =
                            sin(
                                time * 2.0 +
                                randomValue * 10.0
                            );

                        float opacityIndex =
                            floor(
                                randomValue * 10.0
                            );

                        float opacity =
                            u_opacities[
                                int(opacityIndex)
                            ];

                        float dotRadius =
                            u_dotSize /
                            gridSize;

                        float distanceFromCenter =
                            distance(
                                cell,
                                vec2(0.5)
                            );

                        float dot =
                            1.0 -
                            smoothstep(
                                dotRadius * 0.35,
                                dotRadius,
                                distanceFromCenter
                            );

                        float animation =
                            smoothstep(
                                -0.8,
                                0.8,
                                wave
                            );

                        opacity *= dot;
                        opacity *= animation;

                        vec3 color =
                            u_colors[
                                int(
                                    floor(
                                        randomValue * 6.0
                                    )
                                )
                            ];

                        gl_FragColor =
                            vec4(
                                color,
                                opacity
                            );
                    }
                `}
            />
        </mesh>
    );
};