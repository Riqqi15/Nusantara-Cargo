import { ContentRepository } from '../../domain/repositories/ContentRepository';
import { LandingPageContent } from '../../domain/entities';

// Implementasi Infrastructure
// Berisi data aktual. Dalam skenario nyata, ini bisa melakukan fetch ke API atau database.
// Karena ini landing page, kita menggunakan InMemory untuk kecepatan.

export class InMemoryContentRepository implements ContentRepository {
  async getLandingPageData(): Promise<LandingPageContent> {
    // Simulasi delay jaringan (opsional, bisa dihapus)
    // await new Promise(resolve => setTimeout(resolve, 500));

    return {
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
        { id: '2', value: '34', label: 'Provinsi Dijangkau' },
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
      ]
    };
  }
}
