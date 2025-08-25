
import Head from "next/head"
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Clock,
  Mail,
  Users,
  BookOpen,
  ClockIcon,
  Play as Pray,
  Heart,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function IICESHomePage() {
  // SEO básico para la página principal
  // Puedes personalizar los valores según tu iglesia
  const seo = {
    title: "IICES - Iglesia Internacional de Cristo El Salvador",
    description: "Una iglesia de fe, esperanza y amor en San Salvador. Todos son bienvenidos. Conoce nuestros servicios, ministerios y galería.",
    url: "https://tudominio.vercel.app/", // Cambia por tu dominio real
    image: "/Logo.png"
  }
  // Scroll suave con offset personalizado
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      if (id === 'hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        return;
      }
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 18;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    ministries: false,
    studies: false,
    gallery: false,
    contact: false,
  })

  const observerRef = useRef<IntersectionObserver | null>(null)
  const observedElementsRef = useRef<Set<Element>>(new Set())

  const galleryImages = [
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
    "/",
  ]

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImageIndex(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return

    if (direction === "prev") {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1)
    } else {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return

      if (e.key === "Escape") {
        closeImageModal()
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev")
      } else if (e.key === "ArrowRight") {
        navigateImage("next")
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (sectionId) {
          setIsVisible((prev) => ({ ...prev, [sectionId]: entry.isIntersecting }));
        }
      });
    }, observerOptions)

    const elementsToObserve = ["hero", "services", "ministries", "studies", "gallery", "contact"]

    elementsToObserve.forEach((id) => {
      const element = document.getElementById(id)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
        observedElementsRef.current.add(element)
      }
    })

    return () => {
      if (observerRef.current) {
        // Unobserve all tracked elements
        observedElementsRef.current.forEach((element) => {
          if (observerRef.current) {
            observerRef.current.unobserve(element)
          }
        })
        // Disconnect the observer
        observerRef.current.disconnect()
        observerRef.current = null
        observedElementsRef.current.clear()
      }
    }
  }, [])

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="NV2JmAqDT0tkIwDzuenPSArAR6O870s4Ys2EP2cvg54" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="canonical" href={seo.url} />
      </Head>
      <div className="min-h-screen" style={{ background: '#000000', boxShadow: '0 8px 6px -6px white'}}>
      {/* ================= HEADER ================= */}
  <header className="bg-[#000000] text-white backdrop-blur-md sticky top-0 z-50 shadow" style={{ boxShadow: '0 4px 16px -4px rgba(255,255,255,0.25)' }}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 bg-transparent rounded-lg sm:rounded-xl flex items-center justify-center ">
                <img
                  src="/Logo.png"
                  alt="Logo IICES"
                  className="w-72 h-72 sm:w-96 sm:h-96 md:w-[36rem] md:h-[36rem] object-contain"
                  width={576}
                  height={576}
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">IICES</h1>
                <p className="text-xs sm:text-sm text-white/80 hidden sm:block">
                  Iglesia Internacional de Cristo
                </p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Servicios", href: "#services" },
                { label: "Ministerios", href: "#ministries" },
                { label: "Estudios Bíblicos", href: "#studies" },
                { label: "Galería", href: "#gallery" },
                { label: "Ubicación", href: "#ubicacion" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-white hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
  <div className="lg:hidden fixed top-0 left-0 w-full h-screen z-50 bg-black bg-opacity-95 animate-in slide-in-from-top duration-300 overflow-y-auto flex flex-col">
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <div className="flex items-center space-x-2">
        <img src='/Logo.png' alt='Logo IICES' className='w-8 h-8 object-contain'/>
        <span className="text-xl font-bold text-white">IICES</span>
      </div>
      <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Cerrar menú" className="text-white text-3xl p-2 focus:outline-none">
        <X className="w-7 h-7" />
      </button>
    </div>
    <nav className="flex flex-col space-y-2 mt-8 px-6">
      {[
        { label: "Inicio", href: "#hero" },
        { label: "Servicios", href: "#services" },
        { label: "Ministerios", href: "#ministries" },
        { label: "Estudios Bíblicos", href: "#studies" },
        { label: "Galería", href: "#gallery" },
        { label: "Ubicación", href: "#ubicacion" },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={e => handleNavClick(e, item.href)}
          className="text-lg font-semibold text-white hover:text-primary transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-white/10 tracking-wide"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
)}
        </div>
      </header>

  {/* ================= HERO SECTION ================= */}
  <section id="hero" className="min-h-screen md:min-h-0 py-8 sm:py-14 md:py-20 px-4 sm:px-6 flex flex-col justify-center md:block relative overflow-hidden pb-24 sm:pb-0" style={{ background: '#000000' }}>
  {/* Fondo personalizado con la imagen */}
  <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center blur-[2.5px] scale-105" style={{backgroundImage: 'url(/Fondo.jpg)'}}></div>
  <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none" />

        <div
          className={`container mx-auto text-center max-w-5xl relative transition-all duration-1000 ${
            isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } flex-1 flex flex-col justify-center md:block mt-[-4rem] sm:mt-0`}
        >
          <div className="mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-2 sm:mb-4 leading-tight mt-[-7rem] sm:mt-0 pb-9.5 sm:pb-0" style={{ color: '#ffffffdb' }}>
              Bienvenidos a
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-semibold" style={{ color: '#ffffffdb' }}>
                IICES
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-12 max-w-3xl mx-auto leading-relaxed mt-[-2.5rem] sm:mt-0 font-light" style={{ color: '#f6f6f6ea' }}>
              Iglesia Internacional de Cristo - Una Iglesia de fe, esperanza y amor donde todos son bienvenidos
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 sm:gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const ubicacion = document.getElementById('ubicacion');
                if (ubicacion) {
                  ubicacion.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Visítanos en nuestra Iglesia
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-[#e9822f] text-white shadow-lg px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none border-0 hover:bg-[#e9822f] hover:text-white"
              onClick={() => {
                const galeria = document.getElementById('gallery');
                if (galeria) {
                  galeria.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Conoce más sobre nosotros
            </Button>
          </div>
        </div>
      </section>

  {/* ================= SERVICIOS ================= */}
  <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#000000' }}>
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', backgroundImage: 'url("/predica.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter: 'blur(5px) brightness(0.5)' }} />
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.07)', zIndex: 1, pointerEvents: 'none' }} />
    <div style={{ position: 'relative', zIndex: 2 }}>
  <div className="container mx-auto max-w-7xl" style={{ color: '#fff' }}>
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-4xl font-light mb-6" style={{ color: '#fff' }}>Nuestros Servicios</h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#fff' }}>
              Te invitamos a acompañarnos en nuestros servicios semanales llenos de adoración y gratitud
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card simple 1 */}
            <div className="bg-[#000000] rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center border border-[#23272f]">
              <h4 className="text-xl font-bold mb-2" style={{ color: '#fff' }}>Servicio General <br />Domingo</h4>
              <p className="text-base mb-1" style={{ color: '#fff' }}>Domingo 10:30 AM - 12:00 PM</p>
              <span className="text-sm text-gray-300">Celebración principal de adoración y enseñanza</span>
            </div>
            {/* Card simple 2 */}
            <div className="bg-[#000000] rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center border border-[#23272f]">
              <h4 className="text-xl font-bold mb-2" style={{ color: '#fff' }}>Servicio General<br /> Miércoles</h4>
              <p className="text-base mb-1" style={{ color: '#fff' }}>Miércoles 6:00 PM - 7:00 PM</p>
              <span className="text-sm text-gray-300">Encuentro semanal de oración y comunión</span>
            </div>
          </div>
        </div>
  </div>
  </section>

  {/* ================= MINISTERIOS ================= */}
  <section
    id="ministries"
    className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    style={{ backgroundImage: 'url("/alabanza.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    ></div>
    <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.ministries ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-light text-foreground mb-4" style={{ color: '#fff' }}>Nuestros Ministerios</h3>
            <p className="text-muted-foreground max-w-xl mx-auto" style={{ color: '#fff' }}>Diferentes formas de servir y crecer en comunidad</p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-300 ${
              isVisible.ministries ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {[
              {
                img: "/GR.jpg",
                icon: Users,
                title: "Ministerio GR",
                desc: "Ministerio de jovenes donde crecen en su fe, amistad y valores en cristo",
              },
              {
                img: "/ae.jpg",
                icon: Heart,
                title: "Ministerio de AE",
                desc: "Jovenes Universitarios, llamado Accion Estudiantil",
              },
              {
                img: "/placeholder-abqql.png",
                icon: BookOpen,
                title: "Ministerio Nohemis",
                desc: "...........",
              },
              {
                img: "/medios.jpg",
                icon: Pray,
                title: "Ministerio Medios",
                desc: "Encargado de los medios de comunicación y Multimedia",
              },
              {
                img: "/ministerio-alabanza.png",
                icon: Users,
                title: "Ministerio de Alabanza",
                desc: "Adoración musical que eleva nuestros corazones a Dios",
              },
              {
                img: "/",
                icon: Heart,
                title: "Ministerio de Familia",
                desc: "Apoyo y cuidado para las familias de nuestra iglesia",
              },
              {
                img: "/",
                icon: Users,
                title: "Ministerio de Solteros",
                desc: "Espacio de crecimiento y apoyo para solteros en su fe",
              },
              {
                img: "/",
                icon: BookOpen,
                title: "Ministerio de Casados",
                desc: "Acompañamiento en el crecimiento espiritual para parejas",
              },
              
            ].map((ministry, index) => (
                <Card
                  key={index}
                  className="shadow-lg p-0 flex flex-col inset-shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 overflow-hidden group bg-black border-none"
                >
                  <div className="w-full overflow-hidden aspect-[5/6] sm:aspect-[16/9] h-auto min-h-40 sm:min-h-48 md:min-h-52 lg:min-h-56 xl:min-h-60">
                    <img
                      src={ministry.img || "/placeholder.svg"}
                      alt={ministry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-center text-center">
                    <h4 className="text-lg sm:text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300 text-[#15a9e2]">
                      {ministry.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300">{ministry.desc}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
    </div>
  </section>

  {/* ================= ESTUDIOS BÍBLICOS ================= */}
  <section
    id="studies"
    className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    style={{
      background: "#000000",
      color: "#ffffff",
      backgroundImage: 'url(/Estudio.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
  <div className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-[4px] z-0 pointer-events-none" />
    <div className="relative z-10">
  <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.studies ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-light text-foreground mb-4" style={{ color: '#ffffffff' }}>Estudios Bíblicos</h3>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: '#ffffffff' }}>
              Profundiza en la Palabra de Dios con nuestra Iglesia
            </p>
          </div>

          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible.studies ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Card className="hover:shadow-lg transition-all duration-500 hover:scale-[1.02] overflow-hidden group max-w-md mx-auto" style={{ background: '#000', border: 'none', outline: 'none', boxShadow: 'none' }}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src="/biblia2.jpg"
                  alt="Estudios Bíblicos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4 sm:p-6 text-center">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed" style={{ color: '#ffffffff' }}>
                  En nuestra iglesia ofrecemos estudios bíblicos donde profundizamos en el aprendizaje de la Palabra de Dios.
                  Estos encuentros nos permiten crecer espiritualmente y fortalecer nuestra fe como iglesia, explorando
                  las enseñanzas bíblicas de manera práctica y como aplicarlas a nuestra vida diaria.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

  {/* ================= GALERÍA ================= */}
  <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundImage: 'url(/Galeria.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
  <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.gallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-light text-foreground mb-4" style={{ color: '#ffffffff' }}>Nuestra Iglesia</h3>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto" style={{ color: '#ffffffff' }}>
              Momentos especiales de nuestra vida en la iglesia
            </p>
          </div>

          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 transition-all duration-1000 delay-300 ${
              isVisible.gallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openImageModal(index)}
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Imagen de comunidad ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  </section>

  {/* ================= MAPA / UBICACIÓN ================= */}
  <section
    id="ubicacion"
    className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    style={{ backgroundImage: 'url(/IICES.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
  >
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  <div style={{ position: 'relative', zIndex: 1 }}>
    <div className="container mx-auto max-w-4xl">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-light text-foreground mb-4" style={{ color: '#fff' }}>¿Dónde estamos?</h3>
      <p className="text-lg text-muted-foreground mb-6" style={{ color: '#fff' }}>Encuentra nuestra iglesia en el mapa</p>
    </div>
    <div className="rounded-xl overflow-hidden shadow-lg border border-border">
      <iframe
      title="Ubicación Iglesia IICES"
      src="https://www.google.com/maps?q=Iglesia+Internacional+De+Cristo+El+Salvador,+79+Avenida+Nte.,+San+Salvador&output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  </div>
  </section>


      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImageIndex] || "/placeholder.svg"}
              alt={`Imagen de comunidad ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {selectedImageIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}


  {/* ================= FOOTER ================= */}
      <footer className="bg-background border-t border-border py-8 sm:py-12 px-4 sm:px-6" style={{ background: '#191a199f', color: 'white' }}>
        <div className="container mx-auto max-w-6xl" style={{ color: 'white' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8" style={{ color: 'white' }}>
            <div className="space-y-4" style={{ color: 'white' }}>
              <div className="flex items-center space-x-3" style={{ color: 'white' }}>
                <div className="w-20 h-20 sm:w-10 sm:h-10  rounded-lg sm:rounded-xl flex items-center justify-center">
                  <img src="/Logo.png" alt="Logo IICES" className="w-20 h-20 sm:w-10 sm:h-10 object-contain" />
                </div>
                <div style={{ color: 'white' }}>
                  <h4 className="font-semibold" style={{ color: 'white' }}>IICES</h4>
                  <p className="text-sm" style={{ color: 'white' }}>Iglesia Internacional de Cristo</p>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'white' }}>
                Una comunidad de fe comprometida con el amor, la esperanza y el servicio a Dios y al prójimo.
              </p>
              <div className="flex flex-row gap-4 pt-2">
                <a
                  href="https://www.instagram.com/iices.sv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow hover:bg-neutral-800 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9a3.75 3.75 0 01-3.75 3.75h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75z" />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/IICES.SV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow hover:bg-neutral-800 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4" style={{ color: 'white' }}>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 relative">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm sm:text-base text-center" style={{ color: 'white' }}>
                © 2025 IICES - Iglesia Internacional de Cristo. Todos los derechos reservados.
              </p>
            </div>
          </div>
          </div>
        </footer>
    {/* ...existing code... */}
    </div>
    </>
  )
}

