import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Facebook, Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { ParallaxElement } from "@/components/parallax-element"
import { ParallaxBackground } from "@/components/parallax-background"
import { FloatingElements } from "@/components/floating-elements"
import { Header } from "@/components/header"
import { ScrollProgress } from "@/components/scroll-progress"

export default function LandingPage() {
  // Define navigation links to use in both desktop and mobile navigation
  const navigationLinks = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <ScrollProgress />
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <Header navigationLinks={navigationLinks} />

        <main className="flex-1">
          {/* Hero Section with Parallax Background and Floating Elements */}
          <ParallaxBackground
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative"
            backgroundImage="/placeholder.svg?height=1080&width=1920"
            speed={0.2}
          >
            <FloatingElements count={15} speed={0.3} />
            <div className="container px-4 md:px-6 relative z-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <AnimatedSection className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Streamline Your Workflow, Amplify Your Productivity
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Automate repetitive tasks, collaborate seamlessly, and focus on what truly matters with our
                      all-in-one workflow solution.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild size="lg">
                      <Link href="#cta">
                        Start Free Trial
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg">
                      <Link href="#demo">Watch Demo</Link>
                    </Button>
                  </div>
                </AnimatedSection>
                <ParallaxElement direction="left" speed={0.4} className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="StreamLine Dashboard"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </ParallaxElement>
              </div>
            </div>
          </ParallaxBackground>

          {/* Features Section with Parallax Elements */}
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need to Succeed</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Our platform provides all the tools you need to automate workflows, collaborate with your team, and
                    boost productivity.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <ParallaxElement speed={0.2} direction="up">
                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <CardTitle>Workflow Automation</CardTitle>
                      <CardDescription>
                        Automate repetitive tasks and processes to save time and reduce errors.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ParallaxElement>
                <ParallaxElement speed={0.3} direction="up">
                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <CardTitle>Team Collaboration</CardTitle>
                      <CardDescription>
                        Work together seamlessly with real-time updates and communication tools.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ParallaxElement>
                <ParallaxElement speed={0.4} direction="up">
                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <CardTitle>Custom Workflows</CardTitle>
                      <CardDescription>
                        Create and customize workflows to match your specific business needs.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ParallaxElement>
                <ParallaxElement speed={0.5} direction="up">
                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <CardTitle>Powerful Analytics</CardTitle>
                      <CardDescription>
                        Gain insights into your team's performance with detailed analytics and reports.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ParallaxElement>
              </div>
            </div>
          </section>

          {/* Testimonials Section with Parallax Elements */}
          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Don't just take our word for it. Here's what our customers have to say about StreamLine.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <ParallaxElement direction="right" speed={0.2} scale opacity>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          width={40}
                          height={40}
                          alt="Sarah Johnson"
                          className="rounded-full"
                        />
                        <div>
                          <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                          <CardDescription>Marketing Director</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        "StreamLine has completely transformed how our marketing team collaborates. We've reduced our
                        campaign launch time by 40% and improved our overall productivity."
                      </p>
                    </CardContent>
                  </Card>
                </ParallaxElement>
                <ParallaxElement direction="right" speed={0.3} scale opacity>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          width={40}
                          height={40}
                          alt="David Chen"
                          className="rounded-full"
                        />
                        <div>
                          <CardTitle className="text-lg">David Chen</CardTitle>
                          <CardDescription>Product Manager</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        "The automation features in StreamLine have saved our team countless hours. We can now focus on
                        innovation instead of repetitive tasks."
                      </p>
                    </CardContent>
                  </Card>
                </ParallaxElement>
                <ParallaxElement direction="right" speed={0.4} scale opacity>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          width={40}
                          height={40}
                          alt="Emily Rodriguez"
                          className="rounded-full"
                        />
                        <div>
                          <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
                          <CardDescription>Operations Manager</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        "The analytics provided by StreamLine have given us valuable insights into our processes. We've
                        optimized our workflows and increased efficiency by 35%."
                      </p>
                    </CardContent>
                  </Card>
                </ParallaxElement>
              </div>
            </div>
          </section>

          {/* Pricing Section with Parallax Elements */}
          <ParallaxBackground
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
            backgroundImage="/placeholder.svg?height=1080&width=1920"
            speed={0.1}
          >
            <div className="container px-4 md:px-6">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Pricing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Choose the plan that's right for your team. All plans include a 14-day free trial.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                <ParallaxElement direction="up" speed={0.2} rotate>
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <div className="text-3xl font-bold">$29</div>
                      <CardDescription>per user / month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Basic workflow automation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Up to 10 team members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>5GB storage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                </ParallaxElement>
                <ParallaxElement direction="up" speed={0.3}>
                  <Card className="border-primary">
                    <CardHeader>
                      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
                        Popular
                      </div>
                      <CardTitle>Professional</CardTitle>
                      <div className="text-3xl font-bold">$79</div>
                      <CardDescription>per user / month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Advanced workflow automation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Unlimited team members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>50GB storage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Advanced analytics</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                </ParallaxElement>
                <ParallaxElement direction="up" speed={0.4} rotate>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="text-3xl font-bold">Custom</div>
                      <CardDescription>Contact for pricing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Custom workflow solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Unlimited team members</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Unlimited storage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>24/7 dedicated support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>On-premise deployment option</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Contact Sales
                      </Button>
                    </CardFooter>
                  </Card>
                </ParallaxElement>
              </div>
            </div>
          </ParallaxBackground>

          {/* Contact Section */}
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Have questions or need more information? We're here to help.
                  </p>
                </div>
              </AnimatedSection>

              <div className="mx-auto max-w-5xl py-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <ParallaxElement direction="right" speed={0.2} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold">Contact Information</h3>
                      <p className="text-muted-foreground mt-2">
                        Fill out the form or contact us directly using the information below.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-muted-foreground">contact@streamline.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Office</h4>
                          <p className="text-muted-foreground">
                            123 Workflow Avenue
                            <br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <span className="sr-only">Twitter</span>
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <span className="sr-only">Facebook</span>
                          <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <span className="sr-only">Instagram</span>
                          <Instagram className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </ParallaxElement>

                  <ParallaxElement direction="left" speed={0.2}>
                    <ContactForm />
                  </ParallaxElement>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section with Parallax Background */}
          <ParallaxBackground
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
            backgroundImage="/placeholder.svg?height=1080&width=1920"
            speed={0.15}
          >
            <div className="container px-4 md:px-6">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to Streamline Your Workflow?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of teams that have already transformed their productivity with StreamLine.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Start Your Free Trial
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule a Demo
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
              </AnimatedSection>
            </div>
          </ParallaxBackground>
        </main>

        {/* Footer */}
        <footer className="w-full border-t bg-background">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <Image src="/placeholder.svg?height=32&width=32" alt="StreamLine Logo" width={32} height={32} />
              <p className="text-center text-sm leading-loose md:text-left">
                &copy; {new Date().getFullYear()} StreamLine, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
            <nav className="flex gap-4 md:gap-6">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}
