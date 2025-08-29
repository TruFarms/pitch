import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

const teamMembers = [
  {
    name: "Quinton Jones",
    role: "Founder & Owner",
    bio: "Visionary entrepreneur leading TruFarms to become a key player in Minnesota's cannabis extraction and manufacturing sector. Responsible for overall strategy and business development.",
    initials: "QJ",
    image: "https://i.pravatar.cc/150?u=quinton"
  },
  {
    name: "Operations Manager",
    role: "Future Hire",
    bio: "A planned key hire responsible for overseeing daily facility operations, production schedules, and ensuring compliance and efficiency.",
    initials: "OM",
  },
  {
    name: "Sales & Accounts Manager",
    role: "Future Hire",
    bio: "A planned key hire to build and maintain relationships with dispensaries and B2B clients, driving revenue and market penetration.",
    initials: "SM",
  },
];

export function SlideManagementTeam() {
  return (
    <Card className="w-full max-w-4xl h-auto md:h-[600px] flex flex-col justify-center">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Leadership</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          The experienced leadership guiding TruFarms to success.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center flex flex-col items-center">
              <Avatar className="h-20 w-20 sm:h-24 sm:w-24 mb-4">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} />
                ) : (
                  <AvatarFallback>
                    <User className="h-10 w-10 sm:h-12 sm:w-12" />
                  </AvatarFallback>
                )}
                
              </Avatar>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
         <div className="mt-6 text-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
          <p>The initial team will consist of 9 employees, including Extraction and Edibles Technicians, a Packaging Lead, a Compliance Manager, and a General Assistant, ensuring a robust operational launch.</p>
        </div>
      </CardContent>
    </Card>
  )
}
