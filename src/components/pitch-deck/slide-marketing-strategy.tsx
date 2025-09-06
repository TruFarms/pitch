import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Handshake, Megaphone, Stethoscope, Users } from "lucide-react"

export function SlideMarketingStrategy() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center corner-accent animate-fade-up">
      <CardHeader className="text-center px-4 sm:px-6 animate-fade-in">
        <CardTitle className="text-2xl sm:text-3xl font-bold relative inline-block mx-auto">
          Marketing & Sales Strategy
          <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-accent"></span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Our targeted approach to build brand recognition and secure market share
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Stethoscope className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Healthcare Professional Outreach</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Engage with local physicians, clinics, and patient advocacy groups to educate them on the benefits and quality of TruFarms products. Provide material on strains, dosage, and therapeutic applications
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Megaphone className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Digital Presence & Education</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Develop a professional website with a product catalog, lab results, and educational content. Utilize compliant social media strategies to build a community and brand presence
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Handshake className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Dispensary Partnerships (B2B)</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Establish strong wholesale relationships with dispensaries across Southern Minnesota. Offer reliable supply, premium product, and marketing support to become a preferred craft supplier
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Community Engagement</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Sponsor and participate in local health and wellness events. Build trust and brand loyalty by demonstrating a commitment to the local community and patient well-being
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
