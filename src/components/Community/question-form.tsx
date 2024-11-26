import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function QuestionForm() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Writing a good question</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm">
            You're ready to <span className="text-blue-600">ask a programming-related question</span> and this form will help guide you through the process.
          </p>
          <p className="text-sm text-muted-foreground">
            Looking to ask a non-programming question? See <span className="text-blue-600">the topics here</span> to find a relevant site.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">Steps</h3>
          <ul className="space-y-1 text-sm">
            <li>• Summarize your problem in a one-line title.</li>
            <li>• Describe your problem in more detail.</li>
            <li>• Describe what you tried and what you expected to happen.</li>
            <li>• Add "tags" which help surface your question to members of the community.</li>
            <li>• Review your question and post it to the site.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Title</h3>
          <p className="text-sm text-muted-foreground">
            Be specific and imagine you're asking a question to another person.
          </p>
          <Input placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Next
        </Button>
      </CardContent>
    </Card>
  )
}

