# Domain Layer

Layer ini adalah pusat dari aplikasi dan merepresentasikan entitas serta logika inti bisnis.
Layer ini **TIDAK BOLEH** bergantung pada library eksternal, framework, atau layer lainnya.

**Isi Folder Ini:**
- `entities/`: Model data inti atau struktur objek (misalnya definisi tipe TypeScript, class).
- `repositories/`: Interface/kontrak untuk akses data. Implementasi sebenarnya akan diletakkan di layer `infrastructure`.
- `types/`: Type definitions yang bersifat global atau milik entitas tertentu.
