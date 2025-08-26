import { useState } from 'react';
import { Camera, Video, Instagram, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('photography');

  // Mock portfolio items
  const portfolioItems = {
    photography: [
      {
        id: 1,
        title: "Wedding Ceremony",
        description: "Intimate wedding capture",
        category: "Wedding",
        image: "/api/placeholder/400/300"
      },
      {
        id: 2,
        title: "Corporate Headshots",
        description: "Professional business portraits",
        category: "Corporate",
        image: "/api/placeholder/400/300"
      },
      {
        id: 3,
        title: "Product Photography",
        description: "Commercial product showcase",
        category: "Commercial",
        image: "/api/placeholder/400/300"
      },
      {
        id: 4,
        title: "Event Coverage",
        description: "Corporate event documentation",
        category: "Event",
        image: "/api/placeholder/400/300"
      },
      {
        id: 5,
        title: "Portrait Session",
        description: "Creative lifestyle portraits",
        category: "Portrait",
        image: "/api/placeholder/400/300"
      },
      {
        id: 6,
        title: "Fashion Shoot",
        description: "Editorial fashion photography",
        category: "Fashion",
        image: "/api/placeholder/400/300"
      }
    ],
    videography: [
      {
        id: 7,
        title: "Wedding Film",
        description: "Cinematic wedding story",
        category: "Wedding",
        image: "/api/placeholder/400/300",
        duration: "3:45"
      },
      {
        id: 8,
        title: "Corporate Promo",
        description: "Brand promotional video",
        category: "Corporate",
        image: "/api/placeholder/400/300",
        duration: "2:30"
      },
      {
        id: 9,
        title: "Event Highlight",
        description: "Conference highlight reel",
        category: "Event",
        image: "/api/placeholder/400/300",
        duration: "1:20"
      },
      {
        id: 10,
        title: "Music Video",
        description: "Creative music video project",
        category: "Music",
        image: "/api/placeholder/400/300",
        duration: "4:15"
      }
    ],
    reels: [
      {
        id: 11,
        title: "Behind the Scenes",
        description: "Studio work process",
        category: "BTS",
        image: "/api/placeholder/300/400",
        duration: "0:30"
      },
      {
        id: 12,
        title: "Product Launch",
        description: "Product reveal reel",
        category: "Product",
        image: "/api/placeholder/300/400",
        duration: "0:45"
      },
      {
        id: 13,
        title: "Event Teaser",
        description: "Quick event preview",
        category: "Event",
        image: "/api/placeholder/300/400",
        duration: "0:15"
      },
      {
        id: 14,
        title: "Transformation",
        description: "Before/after showcase",
        category: "Transform",
        image: "/api/placeholder/300/400",
        duration: "0:25"
      }
    ]
  };

  const PortfolioGrid = ({ items, isReels = false }: { items: any[], isReels?: boolean }) => (
    <div className={`gallery-grid ${isReels ? 'md:grid-cols-4' : ''}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-lg bg-card hover-lift smooth-transition animate-scale-in"
          style={{ animationDelay: `${(item.id % 6) * 0.1}s` }}
        >
          <div className={`${isReels ? 'aspect-[9/16]' : 'aspect-video'} bg-accent relative overflow-hidden`}>
            {/* Placeholder for images */}
            <div className="w-full h-full bg-gradient-to-br from-accent via-secondary to-muted flex items-center justify-center">
              {selectedCategory === 'photography' && <Camera className="h-12 w-12 text-white" />}
              {selectedCategory === 'videography' && <Video className="h-12 w-12 text-white" />}
              {selectedCategory === 'reels' && <Instagram className="h-12 w-12 text-white" />}
            </div>
            
            {/* Duration badge for videos */}
            {item.duration && (
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {item.duration}
              </div>
            )}
            
            {/* Play button for videos */}
            {(selectedCategory === 'videography' || selectedCategory === 'reels') && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <Play className="h-12 w-12 text-white" />
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{item.description}</p>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">{item.category}</span>
            </div>
            
            {/* View button */}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-6 animate-fade-in-up">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Explore our collection of visual stories across photography, videography, and social media content
        </p>
      </section>

      {/* Portfolio Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="photography" className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>Photography</span>
              </TabsTrigger>
              <TabsTrigger value="videography" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Videography</span>
              </TabsTrigger>
              <TabsTrigger value="reels" className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span>Reels</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photography" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Photography Gallery</h2>
                <p className="text-muted-foreground">
                  Capturing moments that tell powerful stories through the art of photography
                </p>
              </div>
              <PortfolioGrid items={portfolioItems.photography} />
            </TabsContent>

            <TabsContent value="videography" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Videography Collection</h2>
                <p className="text-muted-foreground">
                  Cinematic storytelling that brings emotions and narratives to life
                </p>
              </div>
              <PortfolioGrid items={portfolioItems.videography} />
            </TabsContent>

            <TabsContent value="reels" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Instagram Reels</h2>
                <p className="text-muted-foreground">
                  Short-form content designed to capture attention and drive engagement
                </p>
              </div>
              <PortfolioGrid items={portfolioItems.reels} isReels={true} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 inverted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-inverted-fg mb-6 animate-fade-in-up">
            Like What You See?
          </h2>
          <p className="text-xl text-inverted-fg/70 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's create something amazing together. Every project is a new story waiting to be told.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;