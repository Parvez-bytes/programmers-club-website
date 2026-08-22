import React, { useMemo, useState } from "react";
import { cn } from "../../lib/utils";

export const BackgroundRippleEffect = ({
  cellSize = 70,
}) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);

  // Calculate enough square cells to cover the viewport
  const cols = Math.ceil(window.innerWidth / cellSize) + 2;
  const rows = Math.ceil(window.innerHeight / cellSize) + 2;

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#090909]">

      {/* ================= GRID ================= */}

      <DivGrid
        key={`base-${rippleKey}`}
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        borderColor="#1b1b1b"
        clickedCell={clickedCell}
        onCellClick={(row, col) => {
          setClickedCell({ row, col });
          setRippleKey((k) => k + 1);
        }}
        interactive
      />

      {/* ================= BOTTOM FADE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[35%]
          bg-gradient-to-b
          from-transparent
          via-[#090909]/60
          to-[#090909]
        "
      />

    </div>
  );
};


/* =========================================================
   GRID
========================================================= */

const DivGrid = ({
  rows,
  cols,
  cellSize,
  borderColor,
  clickedCell,
  onCellClick,
  interactive = true,
}) => {

  const cells = useMemo(
    () =>
      Array.from(
        { length: rows * cols },
        (_, idx) => idx
      ),
    [rows, cols]
  );

  return (
    <div
      className="relative"
      style={{
        display: "grid",

        // Keep cells perfectly square
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,

        width: `${cols * cellSize}px`,
        height: `${rows * cellSize}px`,

        // Slight offset so there is no tiny gap
        // around the edges
        marginLeft: "-1px",
        marginTop: "-1px",
      }}
    >

      {cells.map((idx) => {

        const rowIdx = Math.floor(
          idx / cols
        );

        const colIdx = idx % cols;


        /* ===============================
           DISTANCE FROM CLICKED CELL
        =============================== */

        const distance = clickedCell
          ? Math.hypot(
              clickedCell.row - rowIdx,
              clickedCell.col - colIdx
            )
          : 0;


        /* ===============================
           RIPPLE TIMING
        =============================== */

        const delay = clickedCell
          ? Math.max(
              0,
              distance * 55
            )
          : 0;

        const duration =
          200 + distance * 80;


        return (
          <div
            key={idx}

            className={cn(
              // Basic cell
              "relative border",

              // Transparent cell
              "bg-transparent",

              // Smooth hover
              "transition-all duration-150",

              // Hover effect
              "hover:bg-[#555555]",

              // Slightly brighter border on hover
              "hover:border-[#666666]",

              // Ripple animation
              clickedCell &&
                "animate-cell-ripple"
            )}

            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,

              borderColor,

              // Ripple CSS variables
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }}

            onClick={
              interactive
                ? () =>
                    onCellClick(
                      rowIdx,
                      colIdx
                    )
                : undefined
            }
          />
        );
      })}
    </div>
  );
};