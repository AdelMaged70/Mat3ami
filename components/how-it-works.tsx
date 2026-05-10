"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Customer Visits",
      description: "Your customer visits your restaurant and has a great experience",
    },
    {
      number: "02",
      title: "Creates Content",
      description: "They record an unscripted video or write a detailed review",
    },
    {
      number: "03",
      title: "Gets Rewarded",
      description: "They receive special offers and discounts for their contribution",
    },
    {
      number: "04",
      title: "You Grow",
      description: "Authentic content attracts new customers and builds trust",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">A simple process that benefits everyone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
