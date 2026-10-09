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
// di bawah ini deklarasi variable awal contoh let yang dinamis yang bisa di ubah nantinya dan const yang nilainya tetap
const pajak = 0.10; // mengatur pajak tetap 10%
const diskon = 100000; // set diskon tetap 100k
let harga = 0; // set  harga awal nya 0
let total = 0; //  set tottal  awlaanya nya 0
console.log(" sistem jlpt  ");
console.log("semoga lulus ya banh :3");
// pertanyaan meminta input nama kalian
rl.question("Masukkan nama peserta: ", (nama) => {
    // pertnyaan meminta kalaian menginput atau memeilih kevel
    rl.question("pilih level n1 n2 n3 n4 n5: ", (pilihLevel) => {
        // LEVEL 1: SWITCH PERTAMA cek level yang akan di pilih supaya sistem bisa nentuin harganya
        switch (pilihLevel) {
            case "n5":
                harga = 250000;
                break;
            case "n4":
                harga = 260000;
                break;
            case "n3":
                harga = 300000;
                break;
            case "n2":
                harga = 350000;
                break;
            case "n1":
                harga = 360000;
                break;
            //kalok ngeti selain n1-n5 program akan berhenti dan memunculkan console lpg di bawah ini
            default:
                console.log("Tuu level gak ada bro sorry yeee cuman ada n1-n5!");
                rl.close();
                return;
        }
        // Pertanyaan 3: meminta input skor tes kalian
        rl.question("Masukkan hasil skor tes nya ya kakak :3 (0-100): ", (inputSkor) => {
            let skorTes = Number(inputSkor); // ubah tipe string dari terminal jadi tipe angka
            // Pertanyaan 4: Input boolean atau input number yang di ubah menjadi boolen
            rl.question("apakah kamu member ? (y/n): ", (inputMember) => {
                let member = (inputMember == 'y'); // Jika ketik 'y' maka nilainya true
                // Pertanyaan 5: Input String atau input metode bayar yang akan di pilih
                rl.question(" bayar (tunai/transfer/dana): ", (metodeBayar) => {
                    // LEVEL 2: IF (cek batas lulus minimal skor 50) ini buat perbandingan skor tes kalian dengan minimal lulus 50
                    if (skorTes >= 50) {
                        //  LEVEL 3: IF KEDUA (Operator Logika &&) (cek dapet promo atau nggak, wajib skor >=80 DAN statusnya member)
                        if (skorTes >= 80 && member == true) {
                            // --- LEVEL 4:SWITCH (buat nentuin potongan harga dari cara bayarnya) Paket A) ---
                            switch (metodeBayar) {
                                case "dana":
                                    // Operator perhitungan diskon (-=)
                                    harga -= diskon;
                                    break; // jika memakai dana dapet diskon full 100k
                                case "transfer":
                                    // Operator perhitungan(-=) dan Aritmatika (/)
                                    harga -= (diskon / 2);
                                    break; // jikatranfer di potong 50k
                                case "tunai": break; // jika tunai gak di potong samsek
                                default:
                                    console.log("metode tidak ada ");
                                    break; //jika memasukan metode selain di atas akan muncul metode tidk ada
                            }
                        }
                    }
                    else {
                        console.log("Tidak lulus"); // tampil kalo skor di bawah 50
                    }
                    // perhitungan pajak dan total bayar 
                    let nilaiPajak = harga * pajak; //hitung nmnimal pajak dengan  cara mengkalikan harga dengan pajak 10%
                    total = harga + nilaiPajak; // tanbahkan harga dan pajak yang sudah di hitung harga kali pajak
                    // output hasil perhitugan 
                    console.log("totalbayar " + nama + " : Rp " + total);
                    // Menutup terminal atau proses readline
                    rl.close();
                });
            });
        });
    });
});
//# sourceMappingURL=jlpt.js.map