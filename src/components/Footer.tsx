import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-college-navy text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-college-navy" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Pinak Engineering College</h3>
                <p className="text-xs text-college-silver">Excellence in Engineering Education</p>
              </div>
            </div>
            <p className="text-college-silver mb-8 text-sm leading-relaxed">
              Pioneering engineering education since 1985. We're committed to developing innovative leaders 
              who will shape the future of technology and society.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-college-charcoal rounded-full flex items-center justify-center hover:bg-white hover:text-college-navy transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-college-charcoal rounded-full flex items-center justify-center hover:bg-white hover:text-college-navy transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-college-charcoal rounded-full flex items-center justify-center hover:bg-white hover:text-college-navy transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-college-charcoal rounded-full flex items-center justify-center hover:bg-white hover:text-college-navy transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Academic Programs</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Campus Life</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Alumni</a></li>
            </ul>
          </div>
          
          {/* Admissions */}
          <div>
            <h4 className="text-lg font-medium mb-8 text-white">Admissions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Apply Now</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Admission Requirements</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Financial Aid</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">Campus Tours</a></li>
              <li><a href="#" className="text-college-silver hover:text-white transition-colors">International Students</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-8 text-white">Contact Info</h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Pinak Engineering College</p>
                  <p className="text-college-silver">123 Innovation Drive<br />Tech City, TC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white flex-shrink-0" />
                <div>
                  <p className="text-white">+1 (555) 123-4567</p>
                  <p className="text-college-silver text-xs">Admissions Office</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <div>
                  <p className="text-white">admissions@pinak.edu</p>
                  <p className="text-college-silver text-xs">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-college-charcoal mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-college-silver text-sm">
              © 2024 Pinak Engineering College. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-college-silver hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-college-silver hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-college-silver hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;