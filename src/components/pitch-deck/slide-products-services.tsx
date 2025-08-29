import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Droplets, Flower2, Beaker, Package } from "lucide-react"

const productItems = [
    {
        icon: Flower2,
        title: "Pre-Rolls & Infused Pre-Rolls",
        description: "Machine-packed 1g standard pre-rolls and premium distillate/kief/rosin enhanced options."
    },
    {
        icon: Droplets,
        title: "Vape Cartridges & Gummies",
        description: "Distillate & live resin vapes, plus vegan/gluten-free gummy 10-packs for precise dosing."
    },
    {
        icon: Beaker,
        title: "Concentrates",
        description: "High-potency extracts including shatter, wax, and crumble for experienced consumers."
    },
    {
        icon: Package,
        title: "B2B Extraction Services",
        description: "White-label manufacturing and toll processing for licensed cultivators and brands."
    }
]

export function SlideProductsServices() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center corner-accent">
      <CardHeader className="text-center px-4 sm:px-6 animate-fade-in">
        <CardTitle className="text-2xl sm:text-3xl font-bold relative inline-block mx-auto">
          Products & B2B Services
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-accent"></span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          A portfolio of premium, lab-tested cannabis products and manufacturing services.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center p-4 sm:p-8">
        {productItems.map((item, index) => (
          <div 
            key={item.title}
            className="bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <div className="flex justify-center items-center">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
                <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
