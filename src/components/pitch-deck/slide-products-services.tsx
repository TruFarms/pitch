import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Droplets, Flower2, Beaker, Package } from "lucide-react"

export function SlideProductsServices() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Products & B2B Services</CardTitle>
        <CardDescription>
          A portfolio of premium, lab-tested cannabis products and manufacturing services.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center p-8">
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Flower2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Pre-Rolls & Infused Pre-Rolls</h3>
          <p className="text-muted-foreground text-sm mt-1">Machine-packed 1g standard pre-rolls and premium distillate/kief/rosin enhanced options.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Vape Cartridges & Gummies</h3>
          <p className="text-muted-foreground text-sm mt-1">Distillate & live resin vapes, plus vegan/gluten-free gummy 10-packs for precise dosing.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Beaker className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Concentrates</h3>
          <p className="text-muted-foreground text-sm mt-1">High-potency extracts including shatter, wax, and crumble for experienced consumers.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Package className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">B2B Extraction Services</h3>
          <p className="text-muted-foreground text-sm mt-1">White-label manufacturing and toll processing for licensed cultivators and brands.</p>
        </div>
      </CardContent>
    </Card>
  )
}
