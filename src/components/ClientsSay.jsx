import React from 'react';
import { Quote } from 'lucide-react';

// Лого партнеров в нужном тебе порядке
const partners = [
  {
    name: "Asaxiy",
    img: "https://clone-asaxiy-six.vercel.app/logo-icon.png",
  },
  {
    name: "FeedUp",
    img: "http://feedup.uz/images/feedup/logo.svg",
  },
  {
    name: "QazPost",
    img: "https://qazpost.kz/images/logo-short.svg",
  },
  {
    name: "KEGOC",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="43" viewBox="0 0 64 43"><defs><style>.a,.c{fill:#23e5db;}.a{stroke:rgba(0,0,0,0);}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="64" height="43"/></clipPath></defs><g class="b"><path class="c" d="M48.944,43.559H40.252V6.926h8.692ZM37.119,25.243a15.1,15.1,0,1,1-15.1-15.1A15.1,15.1,0,0,1,37.119,25.243Zm-10.521,0a4.575,4.575,0,1,0-4.575,4.575A4.575,4.575,0,0,0,26.6,25.243Zm44.331-9.174H65.149l-3.386,3.386-3.386-3.386H52.6v5.87l3.34,3.34L52.6,28.62v5.79H58.45L61.759,31.1l3.308,3.308h5.861V28.625l-3.341-3.341,3.341-3.345Z" transform="translate(-6.928 -3.909)"/></g></svg>`,
  },
  {
    name: "Kloop",
    img: "https://kloop.kg/wp-content/uploads/2023/09/kloop_logo_544.jpg",
  },
];

// ОТЗЫВЫ с указанием партнера по индексу
const testimonials = [
  {
    text: "Partnering with Chester Frontline has revolutionized our customer engagement. Their skilled agents have seamlessly integrated with our systems, enhancing our sales and client interactions.",
    author: "Siddikov Mukhammad",
    position: "Head of Sales",
    partnerIndex: 0, // Asaxiy
  },
  {
    text: "Chester Frontline's professionalism and dedication have been pivotal. Their effective communication with our clients has driven our success.",
    author: "Anna Mukhina",
    position: "Operations Director",
    partnerIndex: 1, // FeedUp
  },
  {
    text: "Collaborating with Chester Frontline has been a rewarding experience. Their focus on quality and transparency supports our growth strategy.",
    author: "Munisa Artikzhanova",
    position: "Chief Executive Officer",
    partnerIndex: 2, // QazPost
  },
  {
    text: "The team's alignment with our business needs is exceptional. Their proactive customer support has strengthened our client relationships.",
    author: "Saed Sultanov",
    position: "Customer Success Manager",
    partnerIndex: 3, // KEGOC
  },
  // Можно добавить больше отзывов, партнёр будет выбираться по индексу
];

// Универсальный компонент для логотипа компании
const CompanyLogo = ({ partnerIndex }) => {
  const partner = partners[partnerIndex];
  if (!partner) return null;
  if (partner.svg) {
    return (
      <span
        className="block h-10 w-auto"
        style={{ maxHeight: 44 }}
        dangerouslySetInnerHTML={{ __html: partner.svg }}
        title={partner.name}
      />
    );
  }
  return (
    <img
      src={partner.img}
      alt={partner.name}
      className="h-10 w-auto object-contain"
      style={{ maxHeight: 34 }}
      title={partner.name}
    />
  );
};

const ClientsSay = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-normal">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
                {/* Company Logo */}
                <CompanyLogo partnerIndex={testimonial.partnerIndex} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Trusted by leading companies
            </h3>
            <p className="text-gray-600 text-lg">
              Join hundreds of satisfied clients who trust us with their success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSay;
