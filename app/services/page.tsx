import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Plane,
  Hotel,
  Car,
  Compass,
  Shield,
  Headphones,
  CreditCard,
  Map,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: 'Flight Bookings',
      description:
        'Get the best deals on flights worldwide with our extensive network of airline partners.',
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description:
        'Choose from a wide range of accommodations, from luxury resorts to boutique hotels.',
    },
    {
      icon: Car,
      title: 'Transportation',
      description:
        'Comfortable and reliable transportation services throughout your journey.',
    },
    {
      icon: Compass,
      title: 'Guided Tours',
      description:
        'Expert local guides to help you discover the hidden gems of each destination.',
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description:
        'Comprehensive travel insurance coverage for a worry-free vacation.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Round-the-clock assistance for any travel-related queries or emergencies.',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payments',
      description:
        'Easy payment options with installment plans available for select packages.',
    },
    {
      icon: Map,
      title: 'Custom Itineraries',
      description:
        'Personalized travel plans tailored to your preferences and interests.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Services</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Comprehensive travel services to make your journey memorable
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title} className="transition-transform hover:scale-105">
            <CardHeader>
              <service.icon className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}