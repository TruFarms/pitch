import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Handshake, Megaphone, Stethoscope, Users } from "lucide-react"

export function SlideMarketingStrategy() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Marketing & Sales Strategy</CardTitle>
        <CardDescription>
          A targeted approach to build brand recognition and secure market share.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Stethoscope className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Healthcare Professional Outreach</h3>
              <p className="text-muted-foreground">
                Engage with local physicians, clinics, and patient advocacy groups to educate them on the benefits and quality of TruFarms products. Provide material on strains, dosage, and therapeutic applications.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Megaphone className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Digital Presence & Education</h3>
              <p className="text-muted-foreground">
                Develop a professional website with a product catalog, lab results, and educational content. Utilize compliant social media strategies to build a community and brand presence.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Handshake className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Dispensary Partnerships (B2B)</h3>
              <p className="text-muted-foreground">
                Establish strong wholesale relationships with dispensaries across Southern Minnesota. Offer reliable supply, premium product, and marketing support to become a preferred craft supplier.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Community Engagement</h3>
              <p className="text-muted-foreground">
                Sponsor and participate in local health and wellness events. Build trust and brand loyalty by demonstrating a commitment to the local community and patient well-being.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
