import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, Target, Scale, Leaf } from "lucide-react"

const infoItems = [
  {
    icon: DollarSign,
    title: "Market Opportunity",
    value: "$75M+",
    description: "In the Rochester, MN metro area by 2028."
  },
  {
    icon: Target,
    title: "Production Target",
    value: "5,000 lbs",
    description: "Annual production capacity post-Phase 1."
  },
  {
    icon: Leaf,
    title: "Premium Quality",
    value: "25%+ THC",
    description: "Focus on high-potency, medicinal-grade cannabis."
  },
  {
    icon: Scale,
    title: "Regulatory Edge",
    value: "Tier 1",
    description: "License application for craft cultivation."
  },
]

export function SlideInfographics() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">TruFarms at a Glance</CardTitle>
        <CardDescription>
          Key metrics defining our path to success
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {infoItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-primary mt-4">{item.value}</p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Add this to your globals.css or a relevant CSS file for the animation
/*
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
  opacity: 0;
}
*/
// Note: tailwindcss-animate plugin handles this kind of animation with data-state attributes.
// This is a simple implementation for demonstration. Using a library like Framer Motion or
// an Intersection Observer would be a more robust way to trigger animations on scroll.
