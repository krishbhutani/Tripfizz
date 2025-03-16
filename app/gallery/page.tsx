import { Card, CardContent } from '@/components/ui/card';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      location: 'Paris, France',
      description: 'Iconic Eiffel Tower at sunset',
    },
    {
      url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
      location: 'Venice, Italy',
      description: 'Romantic gondola rides through historic canals',
    },
    {
      url: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
      location: 'Santorini, Greece',
      description: 'Breathtaking sunset views over white-washed buildings',
    },
    {
      url: 'https://images.unsplash.com/photo-1546412414-e1885259563a',
      location: 'Bali, Indonesia',
      description: 'Serene rice terraces and ancient temples',
    },
    {
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
      location: 'Maldives',
      description: 'Crystal clear waters and luxury overwater villas',
    },
    {
      url: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18',
      location: 'Swiss Alps',
      description: 'Majestic mountain peaks and alpine meadows',
    },
    {
      url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
      location: 'Dubai, UAE',
      description: 'Modern architecture meets desert landscapes',
    },
    {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      location: 'New Zealand',
      description: 'Stunning landscapes and adventure activities',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Travel Gallery</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Explore our collection of stunning destinations and travel moments
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <CardContent className="p-4">
              <h3 className="font-semibold">{image.location}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}