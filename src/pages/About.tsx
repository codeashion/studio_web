import { Camera, Video, Instagram, Heart, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 animate-fade-in-up">About The Snake Film Production</h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We are a creative studio passionate about capturing life's most precious moments through the art of visual storytelling
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 inverted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-inverted-fg mb-6">Our Story</h2>
              <p className="text-inverted-fg/80 text-lg mb-6">
                Founded with a passion for visual storytelling, The Snake Film Production has been creating compelling content
                that captures the essence of every moment. We believe that every story deserves to be told
                beautifully, whether it's a wedding day, corporate event, or social media campaign.
              </p>
              <p className="text-inverted-fg/80 text-lg mb-8">
                Our team combines technical expertise with creative vision to deliver content that not only
                looks stunning but also resonates with your audience on an emotional level.
              </p>
              <Button asChild className="bg-black text-white hover:bg-gray-900">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <div className="aspect-square bg-accent rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Camera className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 animate-fade-in-up">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our comprehensive creative services cover every aspect of visual content creation
            </p>
          </div>

          <div className="space-y-16">
            {/* Photography */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <Camera className="h-8 w-8 mr-4 text-primary" />
                  <h3 className="text-3xl font-bold">Photography</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  From intimate portraits to grand events, we capture the emotions and details that make
                  every moment special. Our photography style blends artistic vision with documentary
                  authenticity.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wedding & Event Photography</li>
                  <li>• Portrait & Lifestyle Sessions</li>
                  <li>• Commercial & Product Photography</li>
                  <li>• Corporate Headshots</li>
                </ul>
              </div>
              <div className="animate-scale-in">
                <div className="aspect-video bg-accent rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Camera className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Videography */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in order-2 lg:order-1">
                <div className="aspect-video bg-accent rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-muted flex items-center justify-center">
                    <Video className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              <div className="animate-fade-in order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Video className="h-8 w-8 mr-4 text-primary" />
                  <h3 className="text-3xl font-bold">Videography</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  Cinematic storytelling that brings your vision to life. We create videos that not only
                  document events but tell compelling stories that engage and inspire your audience.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wedding Films & Highlight Reels</li>
                  <li>• Corporate & Promotional Videos</li>
                  <li>• Event Coverage & Documentation</li>
                  <li>• Music Videos & Creative Projects</li>
                </ul>
              </div>
            </div>

            {/* Instagram Reels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <Instagram className="h-8 w-8 mr-4 text-primary" />
                  <h3 className="text-3xl font-bold">Instagram Reels</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  Social media content that captures attention and drives engagement. We create thumb-stopping
                  reels that tell your story in a format that resonates with modern audiences.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Behind-the-Scenes Content</li>
                  <li>• Product Showcases & Demos</li>
                  <li>• Event Highlights & Teasers</li>
                  <li>• Brand Storytelling Reels</li>
                </ul>
              </div>
              <div className="animate-scale-in">
                <div className="aspect-[9/16] max-w-sm mx-auto bg-accent rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <Instagram className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 inverted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-inverted-fg mb-6 animate-fade-in-up">Why Choose The Snake Film Production</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-inverted-fg mb-2">Passion-Driven</h3>
              <p className="text-inverted-fg/70">
                We pour our heart into every project, ensuring each piece reflects genuine emotion and artistry
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-inverted-fg mb-2">Award-Winning</h3>
              <p className="text-inverted-fg/70">
                Recognized for excellence in visual storytelling and creative innovation
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-inverted-fg mb-2">Client-Focused</h3>
              <p className="text-inverted-fg/70">
                Your vision is our priority. We work closely with you to bring your ideas to life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 animate-fade-in-up">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's create something beautiful together. Get in touch to discuss your next project.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;