import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Service Engagement</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      By engaging with CHURISTU Management and Development Private Limited, you agree to provide accurate project requirements and timely feedback. All projects are undertaken based on mutual agreement of scope, timeline, and deliverables. We reserve the right to decline projects that don't align with our expertise or values.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-2">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Ownership & Intellectual Property</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      Upon full payment, clients receive ownership rights to the final delivered product. However, CHURISTU retains the right to showcase completed work in our portfolio unless explicitly agreed otherwise. Any pre-existing code, frameworks, or tools used remain the property of their respective owners. Custom solutions developed specifically for your project become your property after final payment.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-3">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Payments & Refunds</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      Payment terms are established in the project agreement. Typically, we require a 50% advance payment before project commencement and the remaining 50% upon completion. Refunds are evaluated on a case-by-case basis. If the project is cancelled before development begins, a refund of 80% of the advance payment will be provided. Once development has started, refunds are not available, but we commit to resolving any issues to your satisfaction.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-4">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Confidentiality</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      We treat all client information with strict confidentiality. Any sensitive data, business strategies, or proprietary information shared during the project will not be disclosed to third parties. We can sign Non-Disclosure Agreements (NDAs) upon request. We expect clients to maintain similar confidentiality regarding our internal processes and methodologies.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-5">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Liability</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      CHURISTU strives for excellence but cannot guarantee uninterrupted or error-free service. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or products. Our liability is limited to the total amount paid for the specific service in question. We recommend thorough testing before deploying any solution in production environments.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-6">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Revisions & Modifications</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      Each project includes a specified number of revision rounds as outlined in the agreement. Additional revisions beyond the agreed scope will be charged separately. Major changes to project requirements after development has begun may result in timeline extensions and additional costs. We encourage clear communication during the planning phase to minimize such changes.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-7">
              <Card className="glass-effect border-primary/20">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-xl text-foreground">Governing Law</CardTitle>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      These terms and conditions are governed by the laws of India. Any disputes arising from our services shall be subject to the exclusive jurisdiction of the courts in Varanasi, Uttar Pradesh. We encourage resolving any disagreements through amicable discussion before pursuing legal action.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>

          <Card className="glass-effect border-primary/20 mt-8">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Have questions about our terms?
              </p>
              <Link 
                to="/#contact" 
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Contact us for clarification
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
