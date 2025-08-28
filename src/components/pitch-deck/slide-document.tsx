import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"

export function SlideDocument() {
  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Full Business Plan</CardTitle>
        <CardDescription>
          Dive deeper into our strategy, financials, and operations.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center bg-muted/50 m-6 mt-0 rounded-lg">
        <div className="text-center p-8 border-2 border-dashed rounded-lg">
          <FileText className="mx-auto h-16 w-16 text-muted-foreground" />
          <p className="mt-4 font-semibold text-lg">TruFarms_Business_Plan.pdf</p>
          <p className="text-muted-foreground text-sm">1.2 MB - 24 Pages</p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button disabled>
          <Download className="mr-2 h-4 w-4" />
          Download Full Document (Coming Soon)
        </Button>
      </CardFooter>
    </Card>
  )
}
