import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Droplets, Flower2, Beaker, Package } from "lucide-react"

export function SlideProductsServices() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Products & B2B Services</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          A portfolio of premium, lab-tested cannabis products and manufacturing services.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center p-4 sm:p-8">
        <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
              <Flower2 className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-md sm:text-lg font-semibold mt-4">Pre-Rolls & Infused Pre-Rolls</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">Machine-packed 1g standard pre-rolls and premium distillate/kief/rosin enhanced options.</p>
        </div>
        <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
              <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-md sm:text-lg font-semibold mt-4">Vape Cartridges & Gummies</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">Distillate & live resin vapes, plus vegan/gluten-free gummy 10-packs for precise dosing.</p>
        </div>
        <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
              <Beaker className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-md sm:text-lg font-semibold mt-4">Concentrates</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">High-potency extracts including shatter, wax, and crumble for experienced consumers.</p>
        </div>
        <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
              <Package className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-md sm:text-lg font-semibold mt-4">B2B Extraction Services</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">White-label manufacturing and toll processing for licensed cultivators and brands.</p>
        </div>
      </CardContent>
    </Card>
  )
}
