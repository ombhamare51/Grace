import React, { useState } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
    { name: 'Products', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Grace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <Link to="/signin" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link to="/contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 rounded-lg text-foreground hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50 flex flex-col space-y-3">
                <Link to="/signin" onClick={() => setIsOpen(false)} className="w-full px-4 py-3 text-center text-sm font-medium border-2 border-border/80 rounded-xl text-foreground hover:bg-muted/50 transition-colors inline-block">
                  Sign In
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full px-4 py-3 text-center text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 inline-block">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
