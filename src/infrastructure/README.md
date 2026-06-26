# Infrastructure Layer

Layer ini adalah tempat aplikasi Anda berinteraksi dengan dunia luar.

Layer ini **BOLEH** bergantung pada semua layer internal (`use-cases` dan `domain`) dan library eksternal.

**Isi Folder Ini:**
- `api/`: Client untuk HTTP request, interceptors, dll.
- `database/`: Konfigurasi ORM (Prisma, Drizzle), database connection.
- `repositories/`: Implementasi konkret dari interface repository yang didefinisikan di layer `domain`.
- `services/`: Integrasi dengan layanan pihak ketiga (misalnya AWS S3, Stripe, Firebase Auth).
