import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Building } from "lucide-react"

export function SlideMap() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Strategic Location</CardTitle>
        <CardDescription>
          Positioned to serve a key medicinal market in Rochester, Minnesota.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 m-6 mt-0 rounded-lg overflow-hidden relative">
        <Image
          src="https://picsum.photos/seed/trufarmsmap/1200/800"
          alt="Map of Rochester, MN"
          fill
          className="object-cover grayscale"
          data-ai-hint="map rochester"
        />
        <div className="absolute inset-0 bg-primary/20" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <MapPin className="h-16 w-16 text-primary drop-shadow-lg" fill="hsl(var(--primary-foreground))" />
            <div className="absolute top-16 mt-2 bg-background p-3 rounded-lg shadow-xl text-center">
              <h4 className="font-bold">TruFarms Location</h4>
              <p className="text-sm text-muted-foreground">Proximity to Key Markets</p>
            </div>
          </div>
          <div className="w-1 h-16 bg-primary/50" />
          <div className="flex items-center gap-2 bg-background p-3 rounded-lg shadow-xl">
             <Building className="h-6 w-6 text-primary" />
             <div>
                <h4 className="font-bold">Mayo Clinic Area</h4>
                <p className="text-sm text-muted-foreground">Major Patient Population</p>
             </div>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
