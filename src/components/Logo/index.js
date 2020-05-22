import * as React from "react"

function Logo(props) {
  return (
        <svg
        width={261.145}
        height={122.021}
        viewBox="119.428 13.989 261.145 122.021"
        style={{
            background: "0 0",
        }}
        preserveAspectRatio="xMidYMid"
        {...props}
        >
        <defs>
            <linearGradient
            id="prefix__editing-gradow-gradient"
            x1={0}
            x2={1}
            y1={0.5}
            y2={0.5}
            gradientUnits="objectBoundingBox"
            >
            <stop offset={0} stopColor="#f0f" />
            <stop offset={1} stopColor="#0ff" />
            </linearGradient>
            <filter
            id="prefix__editing-gradow-filter"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            >
            <feFlood floodColor="#fffcd9" result="flood" />
            <feComposite
                operator="in"
                in2="SourceAlpha"
                in="flood"
                result="shadow"
            />
            <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
            <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
            <feMerge>
                <feMergeNode in="offset-2" />
                <feMergeNode in="offset-1" />
            </feMerge>
            </filter>
        </defs>
        <g filter="url(#prefix__editing-gradow-filter)">
            <path
            d="M27.01-20.61l12.93-1.15Q35.33-11.65 35.33.06q-1.73 1.22-4.26 1.22T26.94.1q-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.59.96-5.34.96t-5.15-.9Q7.94-.51 6.08-2.5q-4.1-4.35-4.1-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.73 3.14-.74 1.44-1.89 2.59-2.75 2.56-6.14 2.56-1.35 0-2.63-.45.26-1.92.26-4.16t-.16-3.26q-.16-1.02-.55-1.86-.83-1.72-2.65-1.72-1.83 0-3.84 1.95-2.02 1.95-3.62 5.15-3.52 7.17-3.52 15.81 0 3.97 1.54 6.78 1.66 3.07 4.61 3.07 1.02 0 1.95-.51.93-.51 1.31-.89l2.05-12.87zM56.32 0H42.37l8.13-42.24h14.08L56.32 0zM95.1-33.92q-5.18 0-8.96-1.73L84.1-25.28h12.35q0 3.39-1.7 5.54-1.69 2.14-4.77 2.14-3.32 0-6.4-1.22-.64-.25-.7-.32L79.23 0H65.28l8.13-42.24h28.54q0 3.9-1.82 6.11-1.83 2.21-5.03 2.21zm34.37 0q-5.18 0-8.96-1.73l-2.05 10.37h12.36q0 3.39-1.7 5.54-1.7 2.14-4.77 2.14-3.33 0-6.4-1.22-.64-.25-.7-.32L113.6 0H99.65l8.13-42.24h28.54q0 3.9-1.82 6.11-1.83 2.21-5.03 2.21zM141.25 0l3.71-18.82q-1.86-17.34-8.38-21.05 1.34-1.67 3.52-2.59 2.17-.93 4.8-.93 2.62 0 4.6.93 1.99.92 3.27 2.91 2.43 3.77 2.43 12.8v4.61q3.84-11.27 7.68-16.13 3.9-4.99 8.77-4.99 1.92 0 3.2.99 1.28.99 1.92 2.46-4.93 2.18-9.67 8.45-4.73 6.27-7.8 15.04L155.52 0h-14.27z"
            fill="url(#prefix__editing-gradow-gradient)"
            transform="translate(163.172 97.392)"
            />
        </g>
        <style />
        </svg>
   
  )
}

export default Logo
