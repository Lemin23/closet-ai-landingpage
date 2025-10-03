import Link from "next/link"
import { Camera, Sparkles, Palette, ShoppingBag, Share2, User, ChevronRight, Check, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-inter text-primary">StyleAI</span>
            </div>
            <div className="flex items-center">
              <Button asChild className="bg-primary hover:bg-[#1F2144] text-white font-inter transform hover:scale-105 transition-all duration-300">
                <Link href="/onboarding">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[#1F2144] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold font-inter leading-tight mb-4 animate-fadeIn">
                Your AI Fashion Stylist in Your Pocket
              </h1>
              <p className="text-lg font-poppins mb-8 text-gray-100">
                Create perfect outfits from your own wardrobe, get personalized style recommendations, and shop smarter
                with AI-powered fashion advice.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-accent hover:bg-[#3DBDB5] text-primary font-inter font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <Link href="/onboarding">Join Waitlist</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/20 font-inter font-medium transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative mx-auto w-full max-w-xs animate-float">
                {/* Phone mockup */}
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                    <img
                      src="/placeholder.svg?height=572&width=272"
                      className="w-[272px] h-[572px] object-cover"
                      alt="StyleAI App Screenshot"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-primary p-3 rounded-full shadow-lg animate-bounce">
                  <Camera className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#F5F5F5"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-inter text-primary mb-4">Smart Features for Your Style</h2>
              <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
                Our AI-powered app helps you make the most of your wardrobe and elevate your personal style.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <Camera className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-primary mb-2 group-hover:text-secondary transition-colors duration-300">Smart Closet Scanner</h3>
                  <p className="font-poppins text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Snap photos of your clothes and our AI automatically tags and categorizes them for your digital
                    wardrobe.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-sm font-medium font-inter text-gray-500">Core Feature</span>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <Sparkles className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-primary mb-2 group-hover:text-secondary transition-colors duration-300">AI Outfit Generator</h3>
                  <p className="font-poppins text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Get personalized outfit suggestions based on your style, occasion, and even the weather.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-sm font-medium font-inter text-gray-500">Key Selling Point</span>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <Palette className="h-6 w-6 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-primary mb-2 group-hover:text-secondary transition-colors duration-300">Style Personalization</h3>
                  <p className="font-poppins text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Take our style quiz and let our AI learn your preferences to refine recommendations over time.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-sm font-medium font-inter text-gray-500">Personalization</span>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              {/* Feature 4 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <ShoppingBag className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-primary mb-2 group-hover:text-secondary transition-colors duration-300">Shopping Recommendations</h3>
                  <p className="font-poppins text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Identify gaps in your wardrobe and get personalized shopping suggestions that complement your style.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-sm font-medium font-inter text-gray-500">Monetization</span>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              {/* Feature 5 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <Share2 className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-primary mb-2 group-hover:text-secondary transition-colors duration-300">Social Sharing</h3>
                  <p className="font-poppins text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Share your favorite outfits with friends or on social media and participate in style challenges.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-sm font-medium font-inter text-gray-500">Community</span>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              {/* Feature 6 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <User className="h-6 w-6 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-primary mb-2 group-hover:text-secondary transition-colors duration-300">User Profile & Preferences</h3>
                  <p className="font-poppins text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Input your measurements, favorite colors, and style preferences for a truly personalized experience.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center group-hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-sm font-medium font-inter text-gray-500">Customization</span>
                  <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-inter text-primary mb-4">How StyleAI Works</h2>
              <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
                Three simple steps to revolutionize your wardrobe and elevate your style
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <ScrollReveal delay={100} direction="left">
              <div className="text-center transform hover:-translate-y-2 transition-transform duration-300 hover:cursor-pointer">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-110 transform">1</div>
                <h3 className="text-xl font-bold font-inter text-primary mb-3 hover:text-secondary transition-colors duration-300">Scan Your Wardrobe</h3>
                <p className="font-poppins text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Take photos of your clothes or add them manually to build your digital closet.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={300} direction="up">
              <div className="text-center transform hover:-translate-y-2 transition-transform duration-300 hover:cursor-pointer">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-110 transform">2</div>
                <h3 className="text-xl font-bold font-inter text-primary mb-3 hover:text-secondary transition-colors duration-300">Set Your Preferences</h3>
                <p className="font-poppins text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Complete your style profile and tell us about your fashion preferences.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={500} direction="right">
              <div className="text-center transform hover:-translate-y-2 transition-transform duration-300 hover:cursor-pointer">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-110 transform">3</div>
                <h3 className="text-xl font-bold font-inter text-primary mb-3 hover:text-secondary transition-colors duration-300">Get AI Recommendations</h3>
                <p className="font-poppins text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Receive personalized outfit suggestions and shopping recommendations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials/Social Proof */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-inter text-primary mb-4">What Our Beta Users Say</h2>
              <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
                Join our growing community of fashion enthusiasts
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-l-4 hover:border-secondary">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full overflow-hidden mr-4 transform hover:scale-110 transition-transform duration-300">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold font-inter text-primary">Sarah J.</h4>
                    <p className="text-sm font-poppins text-gray-500">Fashion Blogger</p>
                  </div>
                </div>
                <p className="font-poppins text-gray-600 italic hover:text-gray-800 transition-colors duration-300">
                  "StyleAI has completely transformed how I put together outfits. I'm rediscovering pieces I forgot I
                  had!"
                </p>
              </div>
            </ScrollReveal>

            {/* Testimonial 2 */}
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-l-4 hover:border-secondary">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full overflow-hidden mr-4 transform hover:scale-110 transition-transform duration-300">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold font-inter text-primary">Michael T.</h4>
                    <p className="text-sm font-poppins text-gray-500">Tech Professional</p>
                  </div>
                </div>
                <p className="font-poppins text-gray-600 italic hover:text-gray-800 transition-colors duration-300">
                  "As someone who struggles with fashion choices, this app has been a game-changer for my daily work
                  outfits."
                </p>
              </div>
            </ScrollReveal>

            {/* Testimonial 3 */}
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-l-4 hover:border-secondary">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full overflow-hidden mr-4 transform hover:scale-110 transition-transform duration-300">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold font-inter text-primary">Aisha K.</h4>
                    <p className="text-sm font-poppins text-gray-500">Student</p>
                  </div>
                </div>
                <p className="font-poppins text-gray-600 italic hover:text-gray-800 transition-colors duration-300">
                  "The shopping recommendations are spot on! I've saved money by only buying pieces that work with my
                  existing wardrobe."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-[#1F2144] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold font-inter mb-4">Ready to Transform Your Style?</h2>
              <p className="text-lg font-poppins mb-6">
                Join our waitlist today and be among the first to experience the future of fashion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span className="font-poppins">Early access to all features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span className="font-poppins">Exclusive beta tester perks</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span className="font-poppins">Shape the future of the app with your feedback</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold font-inter text-primary mb-4">Join the Waitlist</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 transform hover:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 transform hover:shadow-md"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-[#3DBDB5] text-primary font-inter font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold font-inter text-primary">StyleAI</span>
              <p className="mt-2 text-sm font-poppins text-gray-600 max-w-xs">
                Revolutionizing personal style with AI-powered fashion recommendations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold font-inter text-gray-500 uppercase tracking-wider mb-4">
                  Product
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#features" className="text-gray-600 hover:text-primary font-poppins">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold font-inter text-gray-500 uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold font-inter text-gray-500 uppercase tracking-wider mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary font-poppins">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.06.048-1.37.06-4.123.06s-3.063-.012-4.123-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="text-sm font-poppins text-gray-500">
              &copy; {new Date().getFullYear()} StyleAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

