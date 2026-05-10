"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join restaurants that are already growing through authentic customer engagement
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 group"
          >
            Start Your Journey
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
