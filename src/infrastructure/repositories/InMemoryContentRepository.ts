import { ContentRepository } from '../../domain/repositories/ContentRepository';
import { LandingPageContent } from '../../domain/entities';

const dataId: LandingPageContent = {
  hero: {
    headline: 'Menguasai Angkasa, Menghubungkan Nusantara',
    subHeadline: 'Layanan kargo udara berkecepatan tinggi dengan keandalan maksimal untuk seluruh wilayah Indonesia dan Internasional.',
    bgImageUrl: '/images/cargo_hero_bg_1782412689758.png',
    bgImageUrls: [
      '/images/cargo_hero_bg_1782412689758.png',
      '/images/hero_sunrise.png',
      '/images/hero_fleet.png'
    ]
  },
  about: {
    title: 'Dedikasi Tanpa Batas di Ketinggian',
    description: 'Nusantara Cargo didirikan dengan satu tujuan utama: meruntuhkan hambatan geografis melalui solusi logistik udara yang presisi. Berakar kuat di Indonesia, kami memahami tantangan unik kepulauan dan merancang rute efisien yang menghubungkan ujung barat hingga timur negeri, serta menjangkau pusat bisnis global.',
    mission: 'Menyediakan layanan kargo udara tercepat, teraman, dan terintegrasi untuk mendukung pertumbuhan ekonomi di setiap wilayah yang kami jangkau.',
    vision: 'Menjadi tulang punggung logistik udara Asia Tenggara yang paling diandalkan.',
    imageUrl: '/images/cargo_about_1782412705296.png'
  },
  achievements: [
    { id: '1', value: '15+', label: 'Tahun Pengalaman' },
    { id: '2', value: '13', label: 'Kota Destinasi' },
    { id: '3', value: '25K+', label: 'Ton Kargo / Tahun' },
    { id: '4', value: '99%', label: 'On-Time Delivery' },
  ],
  services: [
    {
      id: 's1',
      title: 'Pengiriman Domestik & Internasional',
      description: 'Jangkauan rute penerbangan terluas. Kami memastikan kargo Anda tiba di tujuan dengan aman dan tepat waktu, baik untuk rute antar pulau di Indonesia maupun ekspor-impor global.',
      imageUrl: '/images/cargo_service_1_1782412719459.png'
    },
    {
      id: 's2',
      title: 'Penanganan Kargo Khusus & Berat',
      description: 'Tim ahli kami berpengalaman menangani alat berat, kendaraan, hingga material sensitif. Kapasitas armada kami siap mengakomodasi muatan yang melebihi standar komersial.',
      imageUrl: '/images/cargo_service_2_1782412732512.png'
    },
    {
      id: 's3',
      title: 'Penerbangan Kargo Carter',
      description: 'Solusi fleksibel untuk kebutuhan logistik mendesak. Sewa pesawat kargo eksklusif dengan jadwal dan rute yang sepenuhnya dapat disesuaikan dengan ritme bisnis Anda.',
      imageUrl: '/images/cargo_service_3_1782412748138.png'
    }
  ],
  fleets: [
    {
      id: 'f1',
      name: 'Boeing 737-800F',
      payloadCapacity: '23,900 Kg',
      volume: '141.5 m³',
      maxRange: '3,700 Km',
      minRunway: '1,800 m',
      description: 'Tulang punggung pengiriman domestik cepat dengan efisiensi tinggi.',
      imageUrl: '/images/cargo_fleet_1_1782412761495.png'
    },
    {
      id: 'f2',
      name: 'Airbus A330-200F',
      payloadCapacity: '70,000 Kg',
      volume: '475 m³',
      maxRange: '7,400 Km',
      minRunway: '2,500 m',
      description: 'Jagoan pengiriman internasional jarak jauh untuk muatan medium-heavy.',
      imageUrl: '/images/cargo_fleet_2_1782412778405.png'
    }
  ],
  partners: [
    { id: 'p1', name: 'Angkasa Pura', logoUrl: 'https://logo.clearbit.com/angkasapura2.co.id' },
    { id: 'p2', name: 'Garuda Indonesia', logoUrl: 'https://logo.clearbit.com/garuda-indonesia.com' },
    { id: 'p3', name: 'DHL', logoUrl: 'https://logo.clearbit.com/dhl.com' },
    { id: 'p4', name: 'FedEx', logoUrl: 'https://logo.clearbit.com/fedex.com' },
    { id: 'p5', name: 'Pertamina', logoUrl: 'https://logo.clearbit.com/pertamina.com' },
    { id: 'p6', name: 'Amazon', logoUrl: 'https://logo.clearbit.com/amazon.com' },
    { id: 'p7', name: 'Alibaba', logoUrl: 'https://logo.clearbit.com/alibaba.com' },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Budi Santoso',
      role: 'Supply Chain Manager',
      company: 'PT. Teknologi Global',
      content: 'Nusantara Cargo sangat dapat diandalkan. Pengiriman komponen elektronik kami dari luar negeri selalu tepat waktu dan aman.',
      avatarUrl: '/images/avatars/avatar_1.png'
    },
    {
      id: 't2',
      name: 'Siti Aminah',
      role: 'CEO',
      company: 'Export Indo',
      content: 'Layanan carter mereka sangat membantu ketika kami memiliki kebutuhan mendesak. Timnya profesional dan responsif.',
      avatarUrl: '/images/avatars/avatar_2.png'
    },
    {
      id: 't3',
      name: 'Andi Pratama',
      role: 'Direktur Operasional',
      company: 'Medikal Utama',
      content: 'Pengiriman alat kesehatan membutuhkan kehati-hatian ekstra, dan Nusantara Cargo membuktikan mereka ahlinya.',
      avatarUrl: '/images/avatars/avatar_3.png'
    }
  ],
  labels: {
    heroCta: 'Pelajari Layanan',
    aboutTitle: 'Tentang Kami',
    servicesTitle: 'Layanan Utama',
    servicesSub: 'Solusi Logistik Kargo Udara Komprehensif',
    fleetTitle: 'Armada Udara',
    fleetSub: 'Didukung oleh armada modern berspesifikasi tinggi yang dirancang khusus untuk efisiensi maksimum di setiap rute penerbangan.',
    partnersTitle: 'Jejaring Kemitraan',
    partnersSub: 'Mitra Kepercayaan',
    testimonialsTitle: 'Suara Pelanggan',
    testimonialsSub: 'Pengalaman nyata dari para mitra yang telah mempercayakan urusan logistik udara mereka kepada Nusantara Cargo.',
    contactTitle: 'Hubungi Kami',
    contactSub: 'Siap untuk mengirimkan kargo Anda?'
  }
};

const dataEn: LandingPageContent = {
  hero: {
    headline: 'Mastering the Skies, Connecting the Archipelago',
    subHeadline: 'High-speed air cargo services with maximum reliability for all of Indonesia and International destinations.',
    bgImageUrl: '/images/cargo_hero_bg_1782412689758.png',
    bgImageUrls: [
      '/images/cargo_hero_bg_1782412689758.png',
      '/images/hero_sunrise.png',
      '/images/hero_fleet.png'
    ]
  },
  about: {
    title: 'Limitless Dedication at Altitude',
    description: 'Nusantara Cargo was founded with one main goal: to break down geographical barriers through precise air logistics solutions. Deeply rooted in Indonesia, we understand the unique challenges of the archipelago and design efficient routes connecting the western to the eastern ends of the country, as well as reaching global business hubs.',
    mission: 'Providing the fastest, safest, and integrated air cargo services to support economic growth in every region we serve.',
    vision: 'To become the most reliable air logistics backbone in Southeast Asia.',
    imageUrl: '/images/cargo_about_1782412705296.png'
  },
  achievements: [
    { id: '1', value: '15+', label: 'Years Experience' },
    { id: '2', value: '13', label: 'Destinations' },
    { id: '3', value: '25K+', label: 'Tons Cargo / Year' },
    { id: '4', value: '99%', label: 'On-Time Delivery' },
  ],
  services: [
    {
      id: 's1',
      title: 'Domestic & International Freight',
      description: 'The widest flight route coverage. We ensure your cargo arrives safely and on time, whether it is an inter-island route in Indonesia or global export-import.',
      imageUrl: '/images/cargo_service_1_1782412719459.png'
    },
    {
      id: 's2',
      title: 'Special & Heavy Cargo Handling',
      description: 'Our expert team is experienced in handling heavy equipment, vehicles, and sensitive materials. Our fleet capacity is ready to accommodate loads exceeding commercial standards.',
      imageUrl: '/images/cargo_service_2_1782412732512.png'
    },
    {
      id: 's3',
      title: 'Charter Cargo Flights',
      description: 'Flexible solutions for urgent logistics needs. Charter an exclusive cargo plane with schedules and routes fully customizable to your business rhythm.',
      imageUrl: '/images/cargo_service_3_1782412748138.png'
    }
  ],
  fleets: [
    {
      id: 'f1',
      name: 'Boeing 737-800F',
      payloadCapacity: '23,900 Kg',
      volume: '141.5 m³',
      maxRange: '3,700 Km',
      minRunway: '1,800 m',
      description: 'The backbone of high-efficiency fast domestic delivery.',
      imageUrl: '/images/cargo_fleet_1_1782412761495.png'
    },
    {
      id: 'f2',
      name: 'Airbus A330-200F',
      payloadCapacity: '70,000 Kg',
      volume: '475 m³',
      maxRange: '7,400 Km',
      minRunway: '2,500 m',
      description: 'The champion of long-haul international delivery for medium-heavy payloads.',
      imageUrl: '/images/cargo_fleet_2_1782412778405.png'
    }
  ],
  partners: [
    { id: 'p1', name: 'Angkasa Pura', logoUrl: 'https://logo.clearbit.com/angkasapura2.co.id' },
    { id: 'p2', name: 'Garuda Indonesia', logoUrl: 'https://logo.clearbit.com/garuda-indonesia.com' },
    { id: 'p3', name: 'DHL', logoUrl: 'https://logo.clearbit.com/dhl.com' },
    { id: 'p4', name: 'FedEx', logoUrl: 'https://logo.clearbit.com/fedex.com' },
    { id: 'p5', name: 'Pertamina', logoUrl: 'https://logo.clearbit.com/pertamina.com' },
    { id: 'p6', name: 'Amazon', logoUrl: 'https://logo.clearbit.com/amazon.com' },
    { id: 'p7', name: 'Alibaba', logoUrl: 'https://logo.clearbit.com/alibaba.com' },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Budi Santoso',
      role: 'Supply Chain Manager',
      company: 'PT. Teknologi Global',
      content: 'Nusantara Cargo is highly reliable. Our electronic component shipments from overseas are always on time and safe.',
      avatarUrl: '/images/avatars/avatar_1.png'
    },
    {
      id: 't2',
      name: 'Siti Aminah',
      role: 'CEO',
      company: 'Export Indo',
      content: 'Their charter service is extremely helpful when we have urgent needs. The team is professional and responsive.',
      avatarUrl: '/images/avatars/avatar_2.png'
    },
    {
      id: 't3',
      name: 'Andi Pratama',
      role: 'Operations Director',
      company: 'Medikal Utama',
      content: 'Shipping medical equipment requires extra care, and Nusantara Cargo proves they are the experts.',
      avatarUrl: '/images/avatars/avatar_3.png'
    }
  ],
  labels: {
    heroCta: 'Explore Services',
    aboutTitle: 'About Us',
    servicesTitle: 'Main Services',
    servicesSub: 'Comprehensive Air Cargo Logistics Solutions',
    fleetTitle: 'Air Fleet',
    fleetSub: 'Supported by a modern, high-specification fleet designed specifically for maximum efficiency on every flight route.',
    partnersTitle: 'Partnership Network',
    partnersSub: 'Trusted Partners',
    testimonialsTitle: 'Customer Voices',
    testimonialsSub: 'Real experiences from partners who have entrusted their air logistics needs to Nusantara Cargo.',
    contactTitle: 'Contact Us',
    contactSub: 'Ready to ship your cargo?'
  }
};
export class InMemoryContentRepository implements ContentRepository {
  async getLandingPageData(lang?: 'id' | 'en'): Promise<LandingPageContent> {
    return lang === 'en' ? dataEn : dataId;
  }
}
