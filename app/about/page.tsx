import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, ThumbsUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Globe, value: '50+', label: 'Destinations' },
    { icon: Award, value: '15+', label: 'Travel Awards' },
    { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-8 text-4xl font-bold">About Tripfizz</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Founded in 2020, Tripfizz has grown to become one of the most trusted names
          in the travel industry. We specialize in creating unforgettable travel
          experiences that combine comfort, adventure, and cultural immersion.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <stat.icon className="h-12 w-12 text-primary" />
              <span className="mt-4 text-3xl font-bold">{stat.value}</span>
              <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            At Tripfizz, our mission is to make world-class travel experiences
            accessible to everyone. We believe that travel has the power to transform
            lives, broaden perspectives, and create lasting memories. Our team works
            tirelessly to ensure that every journey with us is seamless, enriching,
            and unforgettable.
          </p>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold">Our Values</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>• Customer satisfaction is our top priority</li>
            <li>• Commitment to sustainable and responsible tourism</li>
            <li>• Transparency in all our dealings</li>
            <li>• Continuous innovation in travel services</li>
            <li>• Respect for local cultures and environments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}