import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, Instagram } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 animate-fade-in-up">Our Creative Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We specialize in creating visual content that tells your story with passion and precision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                <Camera className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Photography</h3>
              <p className="text-muted-foreground mb-6">
                Professional photography for events, portraits, and commercial projects. 
                Every shot tells a story.
              </p>
              <Button asChild variant="ghost" className="group">
                <Link to="/portfolio" className="flex items-center space-x-2">
                  <span>View Gallery</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="text-center group hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                <Video className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Videography</h3>
              <p className="text-muted-foreground mb-6">
                Cinematic videos for weddings, corporate events, and promotional content. 
                Motion that moves hearts.
              </p>
              <Button asChild variant="ghost" className="group">
                <Link to="/portfolio" className="flex items-center space-x-2">
                  <span>Watch Reels</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="text-center group hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                <Instagram className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instagram Reels</h3>
              <p className="text-muted-foreground mb-6">
                Social media-ready content that captures attention and drives engagement. 
                Stories that go viral.
              </p>
              <Button asChild variant="ghost" className="group">
                <Link to="/portfolio" className="flex items-center space-x-2">
                  <span>See Examples</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 inverted">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-inverted-fg mb-6 animate-fade-in-up">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-inverted-fg/70 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss your project and bring your vision to life through our lens
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;