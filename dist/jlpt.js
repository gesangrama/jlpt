"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// mengimpor readline dari modul redline untuk membaca input dan output dari terminal
const readline = __importStar(require("readline"));
// di bawah ini adalah kode untuk antarmuka untuk membaca input dan output dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// di bawah ini deklarasi variable  contoh let yang dinamis yang bisa di ubah nantinya dan const yang nilainya tetap
const pajak = 0.10; // Tipe number
const diskonMember = 100000; // Tipe number
let hargaDasar = 0;
let totalBayar = 0;
console.log("=Sistem JLPT JEPANG=\n");
console.log("=>///\< GAMBATE SENPAII>///<=\n");
// Pertanyaan 1: Input String
rl.question("Masukkan nama peserta: ", (namaSiswa) => {
    // Pertanyaan 2: Input String
    rl.question("Pilih Level JLPT (N5/N4/N3): ", (pilihanLevel) => {
        // --- LEVEL 1: SWITCH PERTAMA ---
        switch (pilihanLevel.toUpperCase()) {
            case "N5":
                hargaDasar = 500000;
                break;
            case "N4":
                hargaDasar = 750000;
                break;
            case "N3":
                hargaDasar = 1000000;
                break;
            default:
                console.log("Error: Level kelas tidak valid!");
                rl.close();
                return; // Menghentikan program jika salah ketik
        }
        // Pertanyaan 3: Input Number
        rl.question("Masukkan skor tes penempatan (0-100): ", (inputSkor) => {
            let skorTes = Number(inputSkor); // Mengubah input teks jadi angka
            // Pertanyaan 4: Input Boolean
            rl.question("Apakah punya kartu member? (y/n): ", (inputMember) => {
                let isMember = (inputMember.toLowerCase() === 'y'); // Jika ketik 'y' maka nilainya true
                // Pertanyaan 5: Input String
                rl.question("Pilih metode bayar (Cash/Transfer/E-Wallet): ", (metodeBayar) => {
                    // --- LEVEL 2: NESTED IF PERTAMA (Operator Perbandingan) ---
                    if (skorTes >= 50) {
                        // --- LEVEL 3: NESTED IF KEDUA (Operator Logika &&) ---
                        if (skorTes >= 80 && isMember === true) {
                            console.log("\n>> Selamat! Anda memenuhi syarat promo khusus.");
                            // --- LEVEL 4: NESTED SWITCH KEDUA (Kedalaman Maksimal Paket A) ---
                            switch (metodeBayar.toLowerCase()) {
                                case "e-wallet":
                                    // Operator Compound (-=)
                                    hargaDasar -= diskonMember;
                                    console.log(">> Potongan E-Wallet Rp100.000 diterapkan.");
                                    break;
                                case "transfer":
                                    // Operator Compound (-=) dan Aritmatika (/)
                                    hargaDasar -= (diskonMember / 2);
                                    console.log(">> Potongan Transfer Bank Rp50.000 diterapkan.");
                                    break;
                                case "cash":
                                    hargaDasar -= 0;
                                    console.log(">> Pembayaran Cash tidak mendapat diskon tambahan.");
                                    break;
                                default:
                                    console.log(">> Metode bayar tidak dikenali, harga normal.");
                                    break;
                            }
                        }
                        else {
                            console.log("\n>> Skor tes cukup, tapi belum memenuhi syarat promo ganda.");
                        }
                    }
                    else {
                        // Operator Logika NOT (!)
                        if (!isMember) {
                            console.log("\n>> Maaf, skor di bawah standar dan bukan member.");
                        }
                    }
                    // --- PERHITUNGAN AKHIR (Operator Aritmatika * dan +) ---
                    let nilaiPajak = hargaDasar * pajak;
                    totalBayar = hargaDasar + nilaiPajak;
                    // --- CETAK STRUK OUTPUT ---
                    console.log("\n================================");
                    console.log("     STRUK AKHIR PENDAFTARAN    ");
                    console.log("================================");
                    console.log("Nama Peserta : " + namaSiswa);
                    console.log("Level JLPT   : " + pilihanLevel.toUpperCase());
                    console.log("Metode Bayar : " + metodeBayar);
                    console.log("Harga Dasar  : Rp " + hargaDasar);
                    console.log("Pajak (11%)  : Rp " + nilaiPajak);
                    console.log("TOTAL BAYAR  : Rp " + totalBayar);
                    console.log("================================\n");
                    // Menutup terminal
                    rl.close();
                });
            });
        });
    });
});
//# sourceMappingURL=jlpt.js.map