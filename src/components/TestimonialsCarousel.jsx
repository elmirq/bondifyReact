import { Carousel, Container, Form } from 'react-bootstrap';
import img1 from '/public/foto/unicef.png'
import img2 from '/public/foto/SOCAR.png'
import img3 from '/public/foto/irshad.png'
const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    quote: 'Bu hizmet harikaydı! Gerçekten işimi çok kolaylaştırdı.',
    company: 'UNICEF.',
    img: img1
  },
  {
    name: 'Ayşe Demir',
    quote: 'Kullanımı kolay ve çok pratik. Tavsiye ederim!',
    company: 'SOCAR.',
    img: img2
  },
  {
    name: 'Mehmet Can',
    quote: 'Müşteri hizmetleri mükemmel, çok memnun kaldım.',
    company: 'Irshad',
    img: img3
  },
];

const TestimonialsCarousel = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Müştəri Rəyləri</h2>
      <Carousel>
        {testimonials.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="text-center p-4">
              <p className="fs-5 fst-italic">"{item.quote}"</p>
              <h5 className="mt-3">{item.name}</h5>
              <img id='testiFoto' src={item.img} alt="" />
              <small className="text-muted">{item.company}</small>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialsCarousel;