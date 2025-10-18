// ===== JUAN PINTA FOTOGRAFÍA - SCRIPTS PRINCIPALES =====
// Desarrollado por: Antony Salcedo
// Cliente: Juan Diego Bolaños (Juan Pinta Fotografía)
// Descripción: Scripts interactivos para el sitio web de fotografía profesional

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Inicializando Juan Pinta Website...');
    
    // Inicializar todas las funcionalidades
    initLucideIcons();
    initMobileMenu();
    initSmoothScrolling();
    initPortfolioFilters();
    initPortfolioLightbox();
    initParallaxEffects();
    initScrollAnimations();
    
    console.log('✅ Todas las funcionalidades inicializadas correctamente');
});

// ===== INICIALIZACIÓN DE ICONOS LUCIDE =====
function initLucideIcons() {
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            console.log('✅ Iconos Lucide inicializados');
        } else {
            console.warn('⚠️ Lucide no está disponible');
        }
    } catch (error) {
        console.error('❌ Error al inicializar iconos Lucide:', error);
    }
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            console.log('📱 Menú móvil toggled');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a[href^="#"]');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
        
        console.log('✅ Menú móvil inicializado');
    } else {
        console.warn('⚠️ Elementos del menú móvil no encontrados');
    }
}

// ===== NAVEGACIÓN SUAVE =====
function initSmoothScrolling() {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('🎯 Navegando a:', targetId);
            }
        });
    });
    
    console.log(`✅ Navegación suave inicializada para ${smoothLinks.length} enlaces`);
}

// ===== FILTROS DEL PORTAFOLIO =====
// ===== PORTAFOLIO DINÁMICO =====
class DynamicPortfolio {
    constructor() {
        this.portfolioData = {
            familia: {
                name: 'Momentos en Familia',
                images: []
            },
            quinces: {
                name: 'XV Años',
                images: []
            },
            sesiones: {
                name: 'Sesiones',
                images: []
            }
        };
        this.currentFilter = 'all';
        this.gallery = document.getElementById('portfolio-gallery');
        this.loadingIndicator = document.getElementById('portfolio-loading');
        this.filterButtons = document.querySelectorAll('.portfolio-filter');
    }

    // Función para detectar automáticamente las imágenes en cada carpeta
    async loadPortfolioImages() {
        try {
            // Mostrar indicador de carga
            this.showLoading(true);

            // Definir las imágenes manualmente basándose en la estructura conocida
            this.portfolioData = {
                familia: {
                    name: 'Momentos en Familia',
                    images: [
                        'familia 1.jpg',
                        'familia 2.jpg',
                        'familia 3.jpg',
                        'familia 4.jpg',
                        'familia 5.jpg',
                        'familia 6.jpg'
                    ]
                },
                quinces: {
                    name: 'XV Años',
                    images: [
                        'quinces 1.jpg',
                        'quinces 2.jpg',
                        'quinces 3.jpg'
                    ]
                },
                sesiones: {
                    name: 'Sesiones',
                    images: [
                        'sesiones 1.jpg',
                        'sesiones 2.jpg',
                        'sesiones 3.jpg',
                        'sesiones 4.jpg',
                        'sesiones 5.jpg',
                        'sesiones 6.jpg'
                    ]
                }
            };

            // Generar la galería
            this.generateGallery();
            
            // Configurar filtros
            this.setupFilters();
            
            // Ocultar indicador de carga
            this.showLoading(false);

        } catch (error) {
            console.error('Error cargando el portafolio:', error);
            this.showError();
        }
    }

    // Generar la galería HTML dinámicamente
    generateGallery() {
        let galleryHTML = '';
        
        // Iterar por cada categoría
        Object.keys(this.portfolioData).forEach(category => {
            const categoryData = this.portfolioData[category];
            
            categoryData.images.forEach((imageName, index) => {
                const imagePath = `/Juan-Pinta---Fotograf-a/images/${category}/${imageName}`;
                const altText = `${categoryData.name} - Imagen ${index + 1}`;
                
                galleryHTML += `
                    <div class="portfolio-item ${category} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-category="${category}">
                        <img src="${imagePath}" alt="${altText}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <i data-lucide="zoom-in" class="w-8 h-8 text-white"></i>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p class="text-white text-sm font-medium">${categoryData.name}</p>
                        </div>
                    </div>
                `;
            });
        });
        
        this.gallery.innerHTML = galleryHTML;
        
        // Reinicializar iconos de Lucide
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Reinicializar lightbox
        this.initPortfolioLightbox();
    }

    // Configurar los filtros
    setupFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remover clase active de todos los botones
                this.filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-gray-900', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700');
                });
                
                // Agregar clase active al botón clickeado
                button.classList.add('active', 'bg-gray-900', 'text-white');
                button.classList.remove('bg-white', 'text-gray-700');
                
                // Obtener el filtro
                const filter = button.getAttribute('data-filter');
                this.filterGallery(filter);
            });
        });
    }

    // Filtrar la galería
    filterGallery(filter) {
        this.currentFilter = filter;
        const items = this.gallery.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                // Animación de entrada
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Inicializar lightbox para las imágenes
    initPortfolioLightbox() {
        const portfolioItems = this.gallery.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const imgSrc = img.src;
                const imgAlt = img.alt;
                
                this.openLightbox(imgSrc, imgAlt);
            });
        });
    }

    // Abrir lightbox
    openLightbox(src, alt) {
        // Crear overlay del lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
        lightbox.innerHTML = `
            <div class="relative max-w-4xl max-h-full">
                <img src="${src}" alt="${alt}" class="max-w-full max-h-full object-contain rounded-lg">
                <button class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                    <i data-lucide="x" class="w-8 h-8"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // Reinicializar iconos
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Cerrar lightbox
        const closeBtn = lightbox.querySelector('button');
        const closeLightbox = () => {
            lightbox.remove();
            document.body.style.overflow = 'auto';
        };
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
        
        // Cerrar con ESC
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    }

    // Mostrar/ocultar indicador de carga
    showLoading(show) {
        if (this.loadingIndicator) {
            this.loadingIndicator.style.display = show ? 'block' : 'none';
        }
    }

    // Mostrar error
    showError() {
        this.gallery.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-gray-500">
                    <i data-lucide="alert-circle" class="w-12 h-12 mx-auto mb-4"></i>
                    <p class="text-lg font-medium mb-2">Error al cargar el portafolio</p>
                    <p class="text-sm">Por favor, intenta recargar la página</p>
                </div>
            </div>
        `;
        
        this.showLoading(false);
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Función para agregar nuevas imágenes dinámicamente (para futuro uso)
    addNewImages(category, newImages) {
        if (this.portfolioData[category]) {
            this.portfolioData[category].images.push(...newImages);
            this.generateGallery();
        }
    }

    // Función para detectar automáticamente nuevas imágenes (simulada)
    async detectNewImages() {
        // Esta función podría expandirse en el futuro para detectar automáticamente
        // nuevas imágenes en las carpetas usando APIs del servidor
        console.log('Función para detectar nuevas imágenes - En desarrollo');
    }
}

// Instancia global del portafolio dinámico
let dynamicPortfolio;

// ===== INICIALIZACIÓN ACTUALIZADA =====
function initPortfolioFilters() {
    // Esta función ahora es manejada por DynamicPortfolio
    console.log('Filtros del portafolio inicializados por DynamicPortfolio');
}

function initPortfolioLightbox() {
    // Esta función ahora es manejada por DynamicPortfolio
    console.log('Lightbox del portafolio inicializado por DynamicPortfolio');
}

// ===== INICIALIZACIÓN PRINCIPAL ACTUALIZADA =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Inicializar menú móvil
    initMobileMenu();
    
    // Inicializar navegación suave
    initSmoothScrolling();
    
    // Inicializar efectos de parallax
    initParallaxEffects();
    
    // Inicializar portafolio dinámico
    dynamicPortfolio = new DynamicPortfolio();
    dynamicPortfolio.loadPortfolioImages();
    
    // Inicializar animaciones al hacer scroll
    initScrollAnimations();
});

// ===== EFECTO PARALLAX =====
function initParallaxEffects() {
    const heroSection = document.getElementById('inicio');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroImage = heroSection.querySelector('.hero-bg-image');
            
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
        
        console.log('✅ Efecto parallax inicializado');
    } else {
        console.warn('⚠️ Sección hero no encontrada para parallax');
    }
}

// ===== ANIMACIONES DE SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                console.log('🎬 Elemento animado:', entry.target.tagName);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('section > div > div, .service-card, .portfolio-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    console.log(`✅ Animaciones de scroll inicializadas para ${animatedElements.length} elementos`);
}

// ===== UTILIDADES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Exportar funciones para uso global si es necesario
window.JuanPintaWebsite = {
    initLucideIcons,
    initMobileMenu,
    initSmoothScrolling,
    initPortfolioFilters,
    initPortfolioLightbox,
    initParallaxEffects,
    initScrollAnimations,
    DynamicPortfolio
};