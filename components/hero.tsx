"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import GhostCursor from './GhostCursor'


export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Mat3ami"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <div style={{ height: 600, position: 'relative' }}>
      <GhostCursor
  color="#D97706"
  brightness={1}
  edgeIntensity={0}

  trailLength={50}
  inertia={0.5}

  grainIntensity={0}
  bloomStrength={0}
  bloomRadius={0}
  bloomThreshold={0.025}

  mixBlendMode="normal"
  zIndex={9999} // Very high to ensure it's on top without affecting background

  fadeDelayMs={1000}
  fadeDurationMs={1500}
/>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated heading with text cursor effect */}
        <div className="mb-6 inline-block">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          We offer you a magic solution as a restaurant to continue in the market and grow.
        </p>

        {/* Description */}
        <p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          Your customers rate your food. Your customers make you free ads. The best natural way of marketing.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Get Started
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}
