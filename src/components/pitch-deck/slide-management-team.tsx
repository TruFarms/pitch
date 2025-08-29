import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Dr. Alani Vance",
    role: "Chief Executive Officer",
    bio: "Expert horticulturalist with 15+ years in agricultural science and a PhD in Plant Pathology. Proven leader in sustainable farming.",
    initials: "AV",
    image: "https://i.pravatar.cc/150?u=alani"
  },
  {
    name: "Marcus Thorne",
    role: "Chief Operating Officer",
    bio: "Seasoned operations manager with a decade of experience in regulated industries, ensuring compliance and efficiency.",
    initials: "MT",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Jenna Ortega",
    role: "Head of Cultivation",
    bio: "Master grower with extensive experience in aeroponic systems and craft cannabis cultivation, focused on quality and potency.",
    initials: "JO",
    image: "https://i.pravatar.cc/150?u=jenna"
  },
];

export function SlideManagementTeam() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Management Team</CardTitle>
        <CardDescription>
          The experienced leadership guiding TruFarms to success.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
