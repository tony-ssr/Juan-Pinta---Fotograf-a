// ===== JUAN PINTA FOTOGRAFÍA - SCRIPTS PRINCIPALES =====

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Inicializando Juan Pinta Website...');
    
    // Inicializar todas las funcionalidades
    initLucideIcons();
    initMobileMenu();
    initSmoothScrolling();
    initPortfolioFilters();
    initPortfolioLightbox();
    initParallaxEffect();
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
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length === 0 || portfolioItems.length === 0) {
        console.warn('⚠️ Elementos del portafolio no encontrados');
        return;
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-gray-900', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700');
            });
            
            // Agregar clase active al botón clickeado
            this.classList.add('active', 'bg-gray-900', 'text-white');
            this.classList.remove('bg-white', 'text-gray-700');
            
            const filter = this.getAttribute('data-filter');
            console.log('🔍 Filtrando por:', filter);
            
            // Filtrar elementos
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    // Mostrar elemento
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Ocultar elemento
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    console.log(`✅ Filtros del portafolio inicializados: ${filterButtons.length} botones, ${portfolioItems.length} elementos`);
}

// ===== LIGHTBOX PARA IMÁGENES DEL PORTAFOLIO =====
function initPortfolioLightbox() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                openLightbox(img.src, img.alt);
            }
        });
        
        // Agregar cursor pointer para indicar que es clickeable
        item.style.cursor = 'pointer';
    });
    
    console.log(`✅ Lightbox inicializado para ${portfolioItems.length} imágenes`);
}

// ===== CREAR LIGHTBOX =====
function openLightbox(imageSrc, imageAlt) {
    // Crear overlay del lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-container">
            <button class="lightbox-close" aria-label="Cerrar">&times;</button>
            <img src="${imageSrc}" alt="" class="lightbox-image">
        </div>
    `;
    
    // Agregar estilos del lightbox
    const lightboxStyles = `
        .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lightbox-overlay.active {
            opacity: 1;
        }
        
        .lightbox-container {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        }
        
        .lightbox-image {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }
        
        .lightbox-close:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
        }
    `;
    
    // Agregar estilos si no existen
    if (!document.querySelector('#lightbox-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'lightbox-styles';
        styleSheet.textContent = lightboxStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Agregar lightbox al DOM
    document.body.appendChild(lightbox);
    
    // Activar lightbox con animación
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    
    // Eventos para cerrar lightbox
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    console.log('🖼️ Lightbox abierto para:', imageAlt);
}

// ===== EFECTO PARALLAX =====
function initParallaxEffect() {
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
    initParallaxEffect,
    initScrollAnimations
};