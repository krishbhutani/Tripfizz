import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Shield, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Discover the World with
              <span className="block text-blue-400">Tripfizz</span>
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Your journey to extraordinary destinations begins here
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="/packages">Explore Packages</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: 'Exotic Locations',
                description: 'Discover breathtaking destinations worldwide',
              },
              {
                icon: Calendar,
                title: 'Flexible Booking',
                description: 'Easy scheduling and free cancellation',
              },
              {
                icon: Shield,
                title: 'Safe Travel',
                description: 'Your safety is our top priority',
              },
              {
                icon: Award,
                title: 'Best Price',
                description: 'Competitive rates and exclusive deals',
              },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <feature.icon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">Popular Destinations</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3',
                title: 'Bali, Indonesia',
                price: 'From $899',
              },
              {
                image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
                title: 'Paris, France',
                price: 'From $999',
              },
              {
                image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
                title: 'Venice, Italy',
                price: 'From $799',
              },
            ].map((destination) => (
              <Card key={destination.title} className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{destination.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {destination.price}
                  </p>
                  <Button className="mt-4" variant="secondary" asChild>
                    <Link href="/packages">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to Start Your Adventure?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Join thousands of satisfied travelers who have experienced the world with
            Tripfizz.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8"
            asChild
          >
            <Link href="/contact">Plan Your Trip Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}