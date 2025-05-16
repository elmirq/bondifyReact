import React from 'react'
import '../style.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto animate__animated animate__fadeInUp">
      <div className="container">
        <div className="row">

          <div className="col-md-8 mb-4 animate__animated animate__fadeInLeft">
            <h5 className="mb-3">
              <i className="fas fa-info-circle me-2"></i>Hakkımızda
            </h5>
            <p>
              <i className="fas fa-chevron-right me-2 text-secondary"></i>
              Biz, müasir və effektiv komanda quruculuğu (team-building) həlləri təqdim edən bir təşkilatıq. Məqsədimiz — şirkətlərin əməkdaşları arasında etimad, ünsiyyət və əməkdaşlıq bacarıqlarını gücləndirməkdir.
            </p>
            <h5 className="mb-3">
              <i className="fas fa-info-circle me-2"></i>Niyə biz?
            </h5>
            <p> 
              <i className='fas fa-chevron-right me-2 text-secondary'></i>
              Komandamız fərqli sahələr üzrə peşəkar fasilitatorlardan, təlimçilərdən və yaradıcı liderlərdən ibarətdir. Hər bir layihəni müştərinin ehtiyaclarına uyğun olaraq fərdiləşdirir və həm əyləncəli, həm də məqsədyönlü proqramlar təqdim edirik.
            </p>
              <h5 className="mb-3">
              <i className="fas fa-info-circle me-2"></i>Missiyamız
            </h5>
                <p> 
              <i className='fas fa-chevron-right me-2 text-secondary'></i>
            Müasir iş mühitində səmərəli və xoşbəxt komandaların formalaşmasına dəstək olmaq, kollektivlər arasında ruh yüksəkliyi yaratmaq və iş məhsuldarlığını artırmaq.
            </p>
          </div>

          {/* Harita ve İletişim */}
          <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
            <h5 className="mb-3">
              <i className="fas fa-map-marker-alt me-2"></i>İletişim
            </h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home me-2 text-secondary"></i> Baku, Azerbaijan
              </li>
              <li>
                <i className="fas fa-envelope me-2 text-secondary"></i> info@bondify.com
              </li>
              <li>
                <i className="fas fa-phone me-2 text-secondary"></i> +994 555 555 55 55
              </li>
            </ul>
            <div className="mt-3 rounded overflow-hidden">
              <iframe
                title="Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1505391347882!2d49.88107767721705!3d40.40551575632006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403062b4ee44d523%3A0xcf89799807fd1940!2sSOCAR%20Tower%2C%20Baku!5e0!3m2!1str!2saz!4v1747405025979!5m2!1str!2saz"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-4 mb-4 animate__animated animate__fadeInRight">
            <h5 className="mb-3">
              <i className="fas fa-share-alt me-2"></i>Sosyal Medya
            </h5>
            <p className="mb-2">Əlaqə:</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5 ikonlar"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white fs-5 ikonlar"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white fs-5 ikonlar"><i className="fab fa-tiktok"></i></a>
              <a href="#" className="text-white fs-5 ikonlar"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır | <strong>Bondify</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer