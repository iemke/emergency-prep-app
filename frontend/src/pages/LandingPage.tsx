import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Cog, AlertTriangle, Info, Clock, MapPin } from 'lucide-react';

export function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center md:text-left md:max-w-2xl md:mx-auto lg:mx-0 lg:max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Prepare Today for a<br />
              <span className="text-primary">Safer Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
              PrepReady helps you create personalized emergency plans, 
              build the right supplies kit, and connect with your community for 
              better preparedness when it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrepReady?</h2>
            <p className="text-muted-foreground md:text-lg md:max-w-2xl mx-auto">
              Our comprehensive approach to emergency preparedness makes it simple 
              to protect yourself, your loved ones, and your community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Personalized Plans</h3>
              <p className="text-muted-foreground">
                Create customized emergency plans tailored to your location, household size, and specific needs.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cog className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Supply Checklists</h3>
              <p className="text-muted-foreground">
                Access interactive checklists to build and maintain your emergency kit with reminders for expiration dates.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Alerts & Notifications</h3>
              <p className="text-muted-foreground">
                Receive timely alerts about potential emergencies in your area and important updates.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Info className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Educational Resources</h3>
              <p className="text-muted-foreground">
                Learn essential skills with our library of guides, videos, and interactive tutorials.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Community Connection</h3>
              <p className="text-muted-foreground">
                Connect with neighbors and local resources to strengthen your community's resilience.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Quick Access</h3>
              <p className="text-muted-foreground">
                Access your emergency information instantly, even offline, when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be Prepared?</h2>
          <p className="md:text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and families who are taking control of their emergency preparedness today.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              PrepReady has helped thousands of people prepare for emergencies. Here's what they have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="mb-4">
                "PrepReady's personalized plan helped our family prepare for wildfire season. When we had to evacuate last summer, we knew exactly what to do and had everything we needed."
              </p>
              <div className="font-medium">Sarah K., California</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="mb-4">
                "The community feature connected me with neighbors I never knew. We've created a local emergency response team that gives me peace of mind for my aging parents."
              </p>
              <div className="font-medium">Michael T., Florida</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="mb-4">
                "After the power outage during the winter storm, my PrepReady kit was the only reason we had light, warmth, and communication for three days. It truly made a difference."
              </p>
              <div className="font-medium">Jamie L., Texas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Coverage Section */}
      <section className="bg-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">National Coverage</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preparedness for Any Region</h2>
              <p className="text-muted-foreground mb-6">
                PrepReady provides localized emergency information for all 50 states, with specific guidance based on regional risks—from hurricanes on the coast to earthquakes in the west and everything in between.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Region-specific emergency guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Local emergency contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Community-specific resources and shelters</span>
                </li>
              </ul>
              <Link to="/coverage">
                <Button variant="outline">View Coverage Details</Button>
              </Link>
            </div>
            <div className="md:w-1/2 bg-card rounded-lg p-4 border border-border">
              {/* This would typically be a map or coverage visualization */}
              <div className="aspect-video bg-accent/20 rounded flex items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Interactive Coverage Map<br />
                  <span className="text-sm">(Visualization would appear here)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}