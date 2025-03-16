import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const posts = [
    {
      title: 'Top 10 Hidden Gems in Europe',
      excerpt:
        'Discover lesser-known European destinations that offer unique experiences away from the tourist crowds.',
      date: 'April 15, 2024',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
      category: 'Travel Tips',
    },
    {
      title: 'Essential Packing Tips for Long-Term Travel',
      excerpt:
        'Learn how to pack efficiently for extended trips while keeping your luggage light and organized.',
      date: 'April 12, 2024',
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee',
      category: 'Travel Guide',
    },
    {
      title: 'Sustainable Travel: Making a Positive Impact',
      excerpt:
        'Explore ways to minimize your environmental footprint while traveling and support local communities.',
      date: 'April 10, 2024',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      category: 'Eco Tourism',
    },
    {
      title: 'Food Tourism: A Culinary Journey Through Asia',
      excerpt:
        'Embark on a gastronomic adventure exploring the diverse flavors and cooking traditions of Asia.',
      date: 'April 8, 2024',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      category: 'Food & Culture',
    },
    {
      title: 'Adventure Travel: Pushing Your Boundaries',
      excerpt:
        'From mountain climbing to deep-sea diving, discover thrilling activities for adventure seekers.',
      date: 'April 5, 2024',
      image: 'https://images.unsplash.com/photo-1533130061792-64b345e4d833',
      category: 'Adventure',
    },
    {
      title: 'Budget Travel: Exploring the World for Less',
      excerpt:
        'Smart tips and strategies for traveling on a budget without compromising on experiences.',
      date: 'April 3, 2024',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
      category: 'Travel Tips',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Travel Blog</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Discover travel tips, guides, and stories from around the world
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})` }}
            />
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.category}</span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="mt-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="#">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}