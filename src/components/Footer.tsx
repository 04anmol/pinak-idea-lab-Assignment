import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden" style={{ backgroundColor: '#FFFAF0' }}>
      <div className="mx-8 md:mx-16 lg:mx-20 xl:mx-24 py-12">
        <div className="border border-white/20 rounded-b-2xl p-8" style={{ backgroundColor: '#2A2F38' }}>
          {/* Top grid: four columns */}
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand column */}
            <div className="lg:pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/P-removebg-preview.png" alt="College logo" className="w-20 h-20 object-contain" />
                <div>
                  <h3 className="text-xl font-serif tracking-wide">Pinak <span className="italic">Engineering</span> College</h3>
                  <p className="text-xs text-white/50">Excellence in Engineering Education</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-md">
                Pioneering engineering education since 1985. We're committed to developing innovative leaders 
                who will shape the future of technology and society.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all" style={{ backgroundColor: '#1877F2' }}>
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all" style={{ backgroundColor: '#1DA1F2' }}>
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all" style={{ backgroundColor: '#0A66C2' }}>
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all" style={{ backgroundColor: '#E4405F' }}>
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right columns with vertical separator */}
            <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Quick Links */}
              <div className="pl-8 md:pl-10">
                <h4 className="text-sm uppercase tracking-wider mb-6 text-white/80">Quick Links</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Academic Programs</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Faculty</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Research</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Campus Life</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Alumni</a></li>
                </ul>
              </div>

              {/* Admissions */}
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-6 text-white/80">Admissions</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Apply Now</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Admission Requirements</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Scholarships</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Financial Aid</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Campus Tours</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">International Students</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-6 text-white/80">Contact Info</h4>
                <div className="space-y-6 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white">Pinak Engineering College</p>
                      <p className="text-white/60">123 Innovation Drive<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-white flex-shrink-0" />
                    <div>
                      <p className="text-white">+1 (555) 123-4567</p>
                      <p className="text-white/60 text-xs">Admissions Office</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-white flex-shrink-0" />
                    <div>
                      <p className="text-white">admissions@pinak.edu</p>
                      <p className="text-white/60 text-xs">General Inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-3 lg:col-span-4" />

            {/* Bottom legal row */}
            <div className="lg:col-span-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">© 2025 Pinak Engineering College. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;