import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
import { GrFacebookOption } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';


export const navData =[ 
    {id:0, name: 'Home' },
    {id:1, name: 'About' },
    {id:2, name: 'Gallery' },
    {id:3, name: 'Interview' },
    {id:4, name: 'Articles' },
    {id:5, name: 'Testimonial' },
    {id:6, name: 'Contact' },
  ]

export const socialData = [
  {id:0, href: '/', icon: GrFacebookOption },
  {id:1, href: '/', icon: IoLogoInstagram },
  {id:2, href: '/', icon: IoLogoPinterest },
  {id:3, href: '/', icon: IoLogoTwitter },
  {id:4, href: '/', icon: IoLogoYoutube },
];

export const galleryData =[
    {
      id:0,
      src: GalleryImg1,
    },
    {
      id:1,
      src: GalleryImg2,
    },
    {
      id:2,
      src: GalleryImg3,
    },
    {
      id:3,
      src: GalleryImg4,
    },
    {
      id:4,
      src: GalleryImg5,
    },
    {
      id:5,
      src: GalleryImg6,
    },
    {
      id:6,
      src: GalleryImg7,
    },
    {
      id:7,
      src: GalleryImg8,
    },
  ]


export const testimonialData = [
  {
    id:0,
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    id:1,
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
  {
    id:2,
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Jurgen Klopp',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: FaMapMarkerAlt,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: FaPhoneAlt,
        number: '+49 93 30493943',
      },
      email: {
        icon: FaEnvelope,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: FaMapMarkerAlt,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: FaPhoneAlt,
        number: '+49 34 36573355',
      },
      email: {
        icon: FaEnvelope,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: FaMapMarkerAlt,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: FaPhoneAlt,
      number: '+49 34 36573355',
    },
    email: {
      icon: FaEnvelope,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: FiSend,
    },
  },
};
