import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Droplets, Flower2, Beaker, Package } from "lucide-react"

export function SlideProductsServices() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Products & Services</CardTitle>
        <CardDescription>
          A portfolio of premium, lab-tested medicinal cannabis products.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center p-8">
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Flower2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Dried Cannabis Flower</h3>
          <p className="text-muted-foreground text-sm mt-1">Multiple strains with varying THC/CBD profiles to meet diverse patient needs.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Cannabis Oils & Tinctures</h3>
          <p className="text-muted-foreground text-sm mt-1">Precisely dosed for sublingual application, offering a smokeless alternative.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Beaker className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Concentrates</h3>
          <p className="text-muted-foreground text-sm mt-1">High-potency extracts for experienced patients seeking stronger therapeutic effects.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex justify-center items-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Package className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Wholesale Services</h3>
          <p className="text-muted-foreground text-sm mt-1">Supplying local dispensaries with consistent, high-quality, craft-grown cannabis products.</p>
        </div>
      </CardContent>
    </Card>
  )
}
