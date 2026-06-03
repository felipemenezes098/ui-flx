import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Accordion11() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="account"
      className="w-full max-w-md"
    >
      <AccordionItem value="account">
        <AccordionTrigger>Account</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            Manage your profile and security in the grouped sections below.
          </p>
          <div className="bg-muted/40 mt-3 rounded-lg border px-3">
            <Accordion type="single" collapsible defaultValue="profile">
              <AccordionItem value="profile">
                <AccordionTrigger className="text-foreground py-3">
                  Profile
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground h-auto">
                  Update your name, avatar, and the email tied to your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security" className="border-b-0">
                <AccordionTrigger className="text-foreground py-3">
                  Security
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground h-auto">
                  Enable two-factor authentication and review active sessions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="workspace">
        <AccordionTrigger>Workspace</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Members, roles, and billing settings for the whole team.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
