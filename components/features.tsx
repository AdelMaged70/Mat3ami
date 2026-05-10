"use client"

import { Video, MessageSquare, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Unscripted Videos",
    description:
      "Customers create authentic, unscripted videos of your restaurant. No fake testimonials, just real experiences.",
  },
  {
    icon: MessageSquare,
    title: "Honest Reviews",
    description:
      "Get detailed comments and ratings on your food, service, and atmosphere. Understand what works and what doesn't.",
  },
  {
    icon: TrendingUp,
    title: "Free Marketing",
    description: "Turn your customers into brand ambassadors. Their videos become your most powerful marketing tool.",
  },
  {
    icon: Shield,
    title: "Build Trust",
    description: "Authentic customer content builds trust faster than any traditional advertising ever could.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose Lazy Agency?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help restaurants understand their customers and grow through authentic engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
