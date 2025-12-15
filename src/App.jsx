import React, { useState } from 'react';
import { ShoppingCart, Menu, X, MapPin, Clock, Mail, Facebook, Instagram, ChevronRight, Sparkles } from 'lucide-react';

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">PJ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Papelería Jireh
              </h1>
              <p className="text-sm text-gray-600">Cuautitlán • Material Escolar</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contacto
            </a>
            <a 
              href="https://papeleriajireh-wq.github.io/prueba2/?authuser=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Catálogo
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-purple-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </a>
              <a href="#productos" className="text-gray-700 hover:text-purple-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Productos
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-purple-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-purple-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </a>
              <a 
                href="https://papeleriajireh-wq.github.io/prueba2/?authuser=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ver Catálogo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-purple-500" size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Todo para tu
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Escuela y Oficina
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            En <strong>Papelería Jireh</strong> encuentras material escolar, de oficina, artístico y recreativo. 
            Los mejores precios en Cuautitlán.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://papeleriajireh-wq.github.io/prueba2/?authuser=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ShoppingCart className="mr-2" size={20} />
              Ver Catálogo Completo
            </a>
            <a 
              href="#productos" 
              className="btn-secondary"
            >
              Nuestros Productos
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const categories = [
    {
      id: 1,
      title: 'Material Escolar',
      icon: '📚',
      description: 'Cuadernos, mochilas, lápices, plumas y todo para estudiantes',
      color: 'from-blue-500 to-cyan-500',
      items: ['Cuadernos', 'Mochilas', 'Lápices', 'Plumas', 'Calculadoras']
    },
    {
      id: 2,
      title: 'Artículos de Oficina',
      icon: '💼',
      description: 'Suministros profesionales para empresas y negocios',
      color: 'from-purple-500 to-pink-500',
      items: ['Folders', 'Grapadoras', 'Archiveros', 'Impresiones', 'Papelería']
    },
    {
      id: 3,
      title: 'Material Artístico',
      icon: '🎨',
      description: 'Pinturas, pinceles y todo para creativos',
      color: 'from-orange-500 to-red-500',
      items: ['Pinturas', 'Pinceles', 'Lienzos', 'Acuarelas', 'Papeles']
    },
    {
      id: 4,
      title: 'Productos Recreativos',
      icon: '🎲',
      description: 'Juegos, manualidades y entretenimiento',
      color: 'from-green-500 to-emerald-500',
      items: ['Juegos educativos', 'Rompecabezas', 'Manualidades', 'Temporada']
    }
  ];
  
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Encontrarás
          </h2>
          <p className="text-xl text-gray-600">
            Productos de calidad para todas tus necesidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div 
              key={category.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA to full catalog */}
        <div className="mt-20 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-6xl">📚</div>
            <div className="absolute bottom-10 right-10 text-6xl">✏️</div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para ver todo?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Explora nuestro catálogo completo con fotos, precios y disponibilidad actualizada
            </p>
            <a 
              href="https://papeleriajireh-wq.github.io/prueba2/?authuser=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Ver Catálogo Completo
              <ChevronRight className="ml-2" size={20} />
            </a>
            <p className="mt-4 text-sm opacity-80">
              Más de 500 productos disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const features = [
    { text: 'Más de 10 años de experiencia', emoji: '🎓' },
    { text: 'Precios justos y competitivos', emoji: '💰' },
    { text: 'Productos de calidad garantizada', emoji: '⭐' },
    { text: 'Ubicación conveniente', emoji: '📍' },
    { text: 'Atención personalizada', emoji: '👥' },
    { text: 'Marcas reconocidas', emoji: '🏷️' }
  ];
  
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tu Papelería de Confianza
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En <strong>Paseos del Bosque, Cuautitlán</strong> nos dedicamos a proveer 
              material escolar y de oficina de la mejor calidad a precios accesibles.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nuestra misión es ayudar a estudiantes, padres de familia, profesionales 
              y creativos a encontrar exactamente lo que necesitan, con el mejor servicio 
              y atención personalizada.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{feature.emoji}</span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📍 Nuestra Ubicación
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Dirección</h4>
                  <p className="text-gray-600">Paseos del Bosque</p>
                  <p className="text-gray-600">Cuautitlán de Romero Rubio</p>
                  <p className="text-gray-600">Estado de México, C.P. 54850</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Horario de Atención</h4>
                  <p className="text-gray-600"><strong>Lunes a Viernes:</strong> 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600"><strong>Sábados:</strong> 8:00 AM - 3:00 PM</p>
                  <p className="text-gray-600"><strong>Domingos:</strong> Cerrado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Contacto</h4>
                  <p className="text-gray-600"><strong>Teléfono:</strong> (55) 5244-5678</p>
                  <p className="text-gray-600"><strong>WhatsApp:</strong> 55-1234-5678</p>
                  <p className="text-gray-600"><strong>Email:</strong> contacto@papeleriajireh.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Visítanos!
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-white">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-2xl mb-6">Información de Contacto</h3>
                <p className="opacity-90 mb-6">
                  Ven a conocernos o contáctanos para más información sobre productos y precios.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Dirección</h4>
                  <p className="opacity-90">Manzana 009, Paseos del Bosque</p>
                  <p className="opacity-90">54850 Cuautitlán, México</p>
                  <p className="opacity-80 text-sm mt-2">♿ Acceso para personas con discapacidad</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Horario</h4>
                  <p className="opacity-90"><strong>Lunes a Viernes:</strong> 9:00 AM - 7:00 PM</p>
                  <p className="opacity-90"><strong>Sábados:</strong> 8:00 AM - 3:00 PM</p>
                  <p className="opacity-90"><strong>Domingos:</strong> Cerrado</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <h4 className="font-bold text-xl mb-4">Síguenos en Redes</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/papejireh16/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all flex-1 justify-center"
                  >
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/_papeleriajireh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all flex-1 justify-center"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map and Quick Contact */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 min-h-[300px]">
              <div className="text-center">
                <MapPin size={64} className="mx-auto mb-4 text-purple-600" />
                <p className="text-2xl font-bold text-gray-700">Paseos del Bosque</p>
                <p className="text-xl text-gray-600">Cuautitlán, Estado de México</p>
                <p className="text-gray-500 mt-2">Zona residencial • Fácil acceso</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
              <h4 className="font-bold text-2xl text-gray-900 mb-4">📞 Contacto Rápido</h4>
              <div className="space-y-4">
                <a 
                  href="tel:+525552445678" 
                  className="block w-full text-center px-6 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-lg transition-all border border-purple-200"
                >
                  Llamar: (55) 5244-5678
                </a>
                <a 
                  href="https://wa.me/525512345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-green-500 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  WhatsApp: 55-1234-5678
                </a>
                <a 
                  href="mailto:contacto@papeleriajireh.com" 
                  className="block w-full text-center px-6 py-4 bg-gray-800 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Email: contacto@papeleriajireh.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Papelería Jireh</h3>
                <p className="text-sm text-gray-400">Desde 2010</p>
              </div>
            </div>
            <p className="text-gray-400">
              Tu papelería de confianza en Cuautitlán. Productos de calidad a precios justos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Horario</h3>
            <p className="text-gray-400">Lunes a Viernes</p>
            <p className="text-gray-400">9:00 AM - 7:00 PM</p>
            <p className="text-gray-400 mt-2">Sábados</p>
            <p className="text-gray-400">8:00 AM - 3:00 PM</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ubicación</h3>
            <p className="text-gray-400">Paseos del Bosque</p>
            <p className="text-gray-400">Cuautitlán de Romero Rubio</p>
            <p className="text-gray-400">Estado de México</p>
            <p className="text-gray-400">C.P. 54850</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-400 hover:text-white transition-colors">
                Inicio
              </a>
              <a 
                href="https://papeleriajireh-wq.github.io/prueba2/?authuser=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Catálogo Completo
              </a>
              <a href="#contacto" className="block text-gray-400 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Papelería Jireh. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              📞 (55) 5244-5678 • 📍 Paseos del Bosque, Cuautitlán
            </p>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Precios sujetos a cambio sin previo aviso • ¡Gracias por su preferencia!
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
