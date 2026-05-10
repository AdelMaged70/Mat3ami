"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Users, Lightbulb, Target } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">About Mat3ami</h1>
          <p className="text-xl text-muted-foreground">
            We believe in the power of authentic customer voices to transform restaurants
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To revolutionize restaurant marketing through authentic customer engagement and organic growth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Help restaurants understand their customers and grow through honest feedback and authentic content
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Authenticity, trust, transparency, and mutual growth for all stakeholders
              </p>
            </div>
          </div>

          {/* Story */}
          {/* <div className="bg-card rounded-xl p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lazy Agency was founded on a simple observation: restaurants spend thousands on traditional advertising,
                yet the most powerful marketing tool is right in front of them—their satisfied customers.
              </p>
              <p>
                We realized that customers want to share their experiences, and restaurants want to hear honest
                feedback. But there was no platform connecting these two needs effectively.
              </p>
              <p>
                That's why we created Lazy Agency. We built a solution that makes it easy for customers to share
                unscripted videos and detailed reviews, while giving restaurants the authentic content and insights they
                need to grow.
              </p>
              <p>
                Today, we're proud to work with restaurants of all sizes, helping them build trust, understand their
                customers, and grow through the most natural form of marketing: word-of-mouth, amplified.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
