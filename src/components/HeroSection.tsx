import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-white mb-6 animate-fade-in-up">
          Capturing Stories
          <br />
          <span className="text-primary">Through Lens</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Professional videography, photography, and Instagram reels that bring your vision to life
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild variant="default" size="lg" className="group">
            <Link to="/portfolio" className="flex items-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
        
        {/* Stats or Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-lg p-6 hover-lift">
            <h3 className="text-2xl font-bold text-white mb-2">Photography</h3>
            <p className="text-gray-300">Capturing moments that last forever</p>
          </div>
          <div className="glass rounded-lg p-6 hover-lift">
            <h3 className="text-2xl font-bold text-white mb-2">Videography</h3>
            <p className="text-gray-300">Stories that move and inspire</p>
          </div>
          <div className="glass rounded-lg p-6 hover-lift">
            <h3 className="text-2xl font-bold text-white mb-2">Reels</h3>
            <p className="text-gray-300">Social media content that engages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;