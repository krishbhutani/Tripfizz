import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">About Tripfizz</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner in creating unforgettable travel experiences since 2020.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Travel Street</li>
              <li>Adventure City, AC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@tripfizz.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'Youtube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tripfizz Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;