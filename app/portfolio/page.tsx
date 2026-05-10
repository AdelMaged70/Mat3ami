// "use client"

// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { ExternalLink } from "lucide-react"

// const portfolioItems = [
//   {
//     name: "The Gourmet Kitchen",
//     description: "Fine dining restaurant with 500+ authentic customer reviews",
//     image: "/fine-dining-interior.png",
//     website: "https://example.com/gourmet-kitchen",
//     results: "45% increase in bookings",
//   },
//   {
//     name: "Urban Bistro",
//     description: "Contemporary bistro featuring customer-generated content",
//     image: "/modern-bistro-restaurant.jpg",
//     website: "https://example.com/urban-bistro",
//     results: "60% more social media engagement",
//   },
//   {
//     name: "Coastal Seafood House",
//     description: "Seafood restaurant with video testimonials from customers",
//     image: "/seafood-restaurant-coastal.jpg",
//     website: "https://example.com/coastal-seafood",
//     results: "3x more organic traffic",
//   },
//   {
//     name: "Artisan Pizza Co",
//     description: "Pizzeria with community-driven reviews and ratings",
//     image: "/artisan-pizza-restaurant.png",
//     website: "https://example.com/artisan-pizza",
//     results: "200+ video reviews",
//   },
//   {
//     name: "Spice Route",
//     description: "Indian restaurant with detailed menu ratings",
//     image: "/indian-restaurant-spices.jpg",
//     website: "https://example.com/spice-route",
//     results: "85% customer satisfaction",
//   },
//   {
//     name: "Garden Cafe",
//     description: "Organic cafe with authentic customer testimonials",
//     image: "/organic-cafe-garden.jpg",
//     website: "https://example.com/garden-cafe",
//     results: "40% repeat customer rate",
//   },
// ]

// export default function Portfolio() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Navigation />

//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">Our Portfolio</h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Restaurants that have transformed their business through authentic customer engagement
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {portfolioItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
//               >
//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden bg-muted">
//                   <img
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
//                   <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

//                   {/* Results */}
//                   <div className="mb-4 p-3 bg-primary/10 rounded-lg">
//                     <p className="text-sm font-semibold text-primary">{item.results}</p>
//                   </div>

//                   {/* Link */}
//                   <a
//                     href={item.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
//                   >
//                     Visit Website
//                     <ExternalLink size={16} />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }
