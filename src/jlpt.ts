// mengimpor readline dari modul redline untuk membaca input dan output dari terminal
import * as readline from 'readline';
// di bawah ini adalah kode untuk antarmuka untuk membaca input dan output dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// di bawah ini deklarasi variable  contoh let yang dinamis yang bisa di ubah nantinya dan const yang nilainya tetap
const pajak = 0.10; // Tipe number(pajak)
const diskonMember = 100000; // Tipe number
let hargadasar = 0; 
let totalbayar = 0; 

console.log(" -------Sistem JLPT JEPANG ------ ");
console.log(" ----- >///< GAMBATE SENPAII>///<= -------");
console.log("di sini cuman ada N5-N1 yah jangan salah input");

// Pertanyaan 1: Input String
rl.question("Masukkan nama peserta: ", (namaSiswa) => {
    // Pertanyaan 2: Input String
    rl.question("Pilih Level JLPT (N5/N4/N3/N2/N1): ", (pilihanLevel) => {
        
        // --- LEVEL 1: SWITCH PERTAMA ---
        switch (pilihanLevel) {
            case "N5":
         hargadasar = 250000;
         break;
            case "N4":
         hargadasar = 260000;
         break;
            case "N3":
             hargadasar = 3000000;
         break;
            case"N2":
            hargadasar = 3500000;
            break;
            case"N1":
            hargadasar = 3600000;
            break;
            default:
                console.log("Tuu level gak ada bro sorry yeee cuman ada N5-N1!");
                rl.close();
                return; //buat penghenti jika input tidak valid(biar kaga lanjut ke pertnyaan berirukatnya jika salah input)
        }

        // Pertanyaan 3: Input Number
        rl.question("Masukkan hasil skor tes nya ya kakak :3 (0-100): ", (inputSkor) => {
            let skorTes = Number(inputSkor); // Mengubah input teks jadi angka

            // Pertanyaan 4: Input Boolean
            rl.question("Apakah punya kartu member? (y/n): ", (inputMember) => {
                let member = (inputMember === 'y'); // Jika ketik 'y' maka nilainya true

                // Pertanyaan 5: Input String
                rl.question("Pilih metode bayar (tunai/Transfer/dana): ", (metodeBayar) => {
                    
                    // --- LEVEL 2: NESTED IF PERTAMA (Operator Perbandingan) ---
                    if (skorTes >= 50) {
                        
                        // --- LEVEL 3: NESTED IF KEDUA (Operator Logika &&) ---
                        if (skorTes >= 80 && member === true) {
                            console.log("\n>> Selamat! Anda memenuhi syarat promo khusus.");
                            
                            // --- LEVEL 4: NESTED SWITCH KEDUA (Kedalaman Maksimal Paket A) ---
                            switch (metodeBayar.toLowerCase()) {
                                case "dana":
                                    // Operator Compound (-=)
                                    hargadasar -= diskonMember; 
                                    console.log(">> Potongan Dana Rp100.000 diterapkan.");
                                    break;
                                case "transfer":
                                    // Operator Compound (-=) dan Aritmatika (/)
                                    hargadasar -= (diskonMember / 2); 
                                    console.log(">> Potongan Transfer Bank Rp50.000 diterapkan.");
                                    break;
                                case "tunai":
                                    hargadasar -= 0;
                                    console.log(">> Pembayaran Tunai tidak mendapat diskon tambahan.");
                                    break;
                                default:
                                    console.log(">> Metode bayar tidak dikenali, harga normal.");
                                    break;
                            }
                        } else {
                            console.log("\n>> Skor tes cukup, tapi belum memenuhi syarat promo ganda.");
                        }
                    } else {
                        // Operator Logika NOT (!)
                        if (!member) { 
                            console.log("\n>> Maaf, skor di bawah standar dan bukan member.");
                        }
                    }

                    // --- PERHITUNGAN AKHIR (Operator Aritmatika * dan +) ---
                    let nilaiPajak = hargadasar * pajak;
                    totalbayar = hargadasar + nilaiPajak;

                    // --- CETAK STRUK OUTPUT ---
                    console.log("\n================================");
                    console.log("     STRUK AKHIR PENDAFTARAN    ");
                    console.log("================================");
                    console.log("Nama Peserta : " + namaSiswa);
                    console.log("Level JLPT   : " + pilihanLevel.toUpperCase());
                    console.log("Metode Bayar : " + metodeBayar);
                    console.log("Harga Dasar  : Rp " + hargadasar);
                    console.log("Pajak (11%)  : Rp " + nilaiPajak);
                    console.log("TOTAL BAYAR  : Rp " + totalbayar);
                    console.log("================================\n");

                    // Menutup terminal
                    rl.close();
                });
            });
        });
    });
});
