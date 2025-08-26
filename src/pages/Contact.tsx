import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      projectType: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-6 animate-fade-in-up">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Ready to bring your vision to life? Let's discuss your project and create something extraordinary together
        </p>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="glass rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select project type</option>
                        <option value="photography">Photography</option>
                        <option value="videography">Videography</option>
                        <option value="reels">Instagram Reels</option>
                        <option value="combined">Combined Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="mt-1"
                      placeholder="Tell us about your project, vision, timeline, and any specific requirements..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group">
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <div className="glass rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@lensstudio.com</p>
                      <p className="text-muted-foreground">projects@lensstudio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Studio Location</h3>
                      <p className="text-muted-foreground">
                        123 Creative District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="glass rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-3" />
                      WhatsApp
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="tel:+15551234567">
                      <Phone className="h-5 w-5 mr-3" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Follow Our Work</h3>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://instagram.com/lensstudio" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm">
                    <a href="https://facebook.com/lensstudio" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  See our latest work and behind-the-scenes content on social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 inverted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-inverted-fg mb-4 animate-fade-in-up">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold text-inverted-fg mb-2">What's your typical turnaround time?</h3>
              <p className="text-inverted-fg/70">
                Photography: 2-3 weeks. Videography: 4-6 weeks. Reels: 1-2 weeks. 
                Rush delivery available for additional fee.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-inverted-fg mb-2">Do you travel for projects?</h3>
              <p className="text-inverted-fg/70">
                Yes! We travel locally and destination projects. Travel costs are calculated 
                based on location and project requirements.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold text-inverted-fg mb-2">What's included in your packages?</h3>
              <p className="text-inverted-fg/70">
                All packages include consultation, shooting/filming, professional editing, 
                and digital delivery. Print and additional services available.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-inverted-fg mb-2">How do we book a session?</h3>
              <p className="text-inverted-fg/70">
                Contact us through this form or phone. We'll discuss your vision, 
                provide a quote, and secure your date with a deposit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;