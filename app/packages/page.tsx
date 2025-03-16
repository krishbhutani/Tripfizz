import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Packages() {
  const packages = [
    {
      title: 'European Dream',
      duration: '10 Days',
      price: '$2,499',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      includes: [
        'Luxury accommodation',
        'Guided tours',
        'Airport transfers',
        'Daily breakfast',
        'Travel insurance',
      ],
      image: 'https://images.unsplash.com/photo-1471874276752-65e2d717604a',
    },
    {
      title: 'Asian Adventure',
      duration: '12 Days',
      price: '$2,799',
      destinations: ['Tokyo', 'Bangkok', 'Singapore'],
      includes: [
        'Premium hotels',
        'Local experiences',
        'Transportation',
        'Selected meals',
        'Tour guide',
      ],
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
    },
    {
      title: 'Tropical Paradise',
      duration: '7 Days',
      price: '$1,999',
      destinations: ['Maldives', 'Bali'],
      includes: [
        'Beach resorts',
        'Water activities',
        'Spa treatments',
        'All meals',
        'Island hopping',
      ],
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Travel Packages</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Choose from our carefully curated selection of travel packages
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <Card key={pkg.title} className="flex flex-col">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${pkg.image})` }}
            />
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{pkg.price}</span>
                <span className="text-sm text-muted-foreground">{pkg.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4">
                <h4 className="font-semibold">Destinations:</h4>
                <p className="text-sm text-muted-foreground">
                  {pkg.destinations.join(' • ')}
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Package Includes:</h4>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}