import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export function SlideMissionVision() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6">
        <div className="flex justify-center items-center mb-4">
          <Rocket className="h-10 w-10 text-accent" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold">
          Our Mission & Vision
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 text-center">
        <p className="text-lg sm:text-xl text-card-foreground/90 max-w-3xl mx-auto">
          Here at TruFarms, our mission is to lead the way in premium cannabis extraction and manufacturing in SouthEast Minnesota<br></br><br></br>Being the first extraction operation in SouthEast MN, TruFarms will become a critical supply-chain partner for regional brands and retailers<br></br><br></br> We are also dedicated to supporting our veteran community and offering a welcoming space for medical needs
        </p>
      </CardContent>
    </Card>
  )
}
