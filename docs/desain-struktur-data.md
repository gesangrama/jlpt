# Desain Struktur Data dan Fungsi (Progress 2)

Sistem Pendaftaran dan Pembayaran Tes JLPT. Dokumen ini adalah rancangan awal. Nama field dan fungsi dapat disesuaikan dengan kode final.

## Struktur Data

Data peserta disimpan dalam array di memori (tanpa database).

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Pengenal unik peserta (tidak boleh duplikat) |
| nama | string | Nama peserta (tidak boleh kosong atau angka) |
| level | string | n1, n2, n3, n4, atau n5 |
| skor | number | Skor tes 0-100 |
| member | boolean | true jika member |
| metodeBayar | string | tunai, transfer, atau dana |
| total | number | Total bayar setelah diskon dan pajak |

```typescript
interface Peserta {
    id: number;
    nama: string;
    level: string;
    skor: number;
    member: boolean;
    metodeBayar: string;
    total: number;
}

let daftarPeserta: Peserta[] = [];
const pajak = 0.10;      // pajak tetap 10%
const diskon = 100000;   // diskon tetap 100 ribu
```

## Daftar Fungsi

| Fungsi | Fitur | Penanggung jawab | Keterangan |
|---|---|---|---|
| tampilMenu() | Menu utama | Gesang | Menampilkan menu dan mengulang (loop) sampai pilih keluar |
| hitungBiaya(level, skor, member, metodeBayar) | Hitung biaya | Gesang | Menghitung harga, diskon, pajak, dan total |
| tambahPeserta() | Create | Gesang | Menambah peserta baru dengan validasi input |
| tampilSemua() | Read | Stephani | Menampilkan seluruh data, atau pesan jika data kosong |
| tampilDetail(id) | Read | Stephani | Menampilkan satu peserta berdasarkan ID |
| ubahPeserta(id) | Update | Stephani | Mengubah data peserta dan menghitung ulang total |
| hapusPeserta(id) | Delete | Jihan | Menghapus peserta setelah konfirmasi Y/N |
| cariPeserta(kataKunci, level) | Search | Jihan | Mencari berdasarkan kata kunci dan filter level |
| validasiInput(nilai) | Semua fitur | Bersama | Mengecek input kosong, bukan angka, atau negatif |

## Kerangka Menu (Loop)

```
Mulai -> Tampil menu -> Input pilihan -> Pilihan?
  1 Create | 2 Read | 3 Update | 4 Delete | 5 Search -> kembali ke menu
  0 Keluar -> Selesai
  lainnya -> "Pilihan tidak valid" -> kembali ke menu
```

Flowchart lengkap ada di `flowchart_jlpt.drawio`.
