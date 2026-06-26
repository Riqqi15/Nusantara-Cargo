# Use Cases (Application) Layer

Layer ini mendefinisikan kasus penggunaan atau alur kerja bisnis dari aplikasi (business rules).

Layer ini **BOLEH** bergantung pada layer `domain`, tetapi **TIDAK BOLEH** bergantung pada `infrastructure` atau framework UI seperti React/Next.js.

**Isi Folder Ini:**
- Service atau fungsi yang menjalankan alur logika dengan memanfaatkan interface dari layer `domain`.
- Data Transfer Objects (DTO) untuk pertukaran data antara layer `presentation` dan layer `use-cases`.
