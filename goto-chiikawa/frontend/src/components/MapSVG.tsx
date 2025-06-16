"use client";
import React from "react";

type Props = {
    onClickPref: (pref: string) => void;
};

export default function MapSVG({ onClickPref }: Props) {
    return (
        <svg viewBox="0 0 800 600" className="w-full max-w-3xl">
            {/* 東京都 */}
            <g onClick={() => onClickPref("東京都")} className="cursor-pointer hover:opacity-70">
                <rect x="500" y="200" width="30" height="30" fill="#ccc" />
                <text x="505" y="220" fontSize="10">東京</text>
            </g>
            {/* 大阪府 */}
            <g onClick={() => onClickPref("大阪府")} className="cursor-pointer hover:opacity-70">
                <rect x="300" y="300" width="30" height="30" fill="#ccc" />
                <text x="305" y="320" fontSize="10">大阪</text>
            </g>
        </svg>
    );
}
