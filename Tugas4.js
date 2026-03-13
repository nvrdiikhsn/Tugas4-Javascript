class Kendaraan {
    constructor(nama, jenis){
        this.nama = nama;
        this.jenis = jenis;
    }

    getInfo(){
        return `${this.nama} (${this.jenis})`;
    }
}

class Mobil extends Kendaraan {
    constructor(nama, jenis, pintu){
        super(nama, jenis);
        this.pintu = pintu;
    }
}

class Motor extends Kendaraan {
    constructor(nama, jenis, tipe){
        super(nama, jenis);
        this.tipe = tipe;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(Kendaraan){
        this.kendaraanDisewa = Kendaraan;
    }

    tampilkanInfo(){
        if(this.kendaraanDisewa){
            return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa.getInfo()}`;
        } else {
            return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Belum menyewa kendaraan`;
        }
    }
}

let mobil1 = new Mobil("Toyota Avanza", "Mobil", 4);
let mobil2 = new Mobil("Honda Jazz", "Mobil", 4);
let mobil3 = new Mobil("Toyota Fortuner", "Mobil", 4);
let mobil4 = new Mobil("Daihatsu Sigra", "Mobil", 4);
let mobil5 = new Mobil("Toyota Agya", "Mobil", 4);
let motor1 = new Motor("Honda CBR", "Motor", "Sport");
let motor2 = new Motor("Yamaha Nmax", "Motor", "Scooter");
let motor3 = new Motor("Honda PCX", "Motor", "Scooter");
let motor4 = new Motor("Honda Vario", "Motor", "Scooter");
let motor5 = new Motor("Honda Beat", "Motor", "Scooter");

let daftarKendaraan = [mobil1, mobil2, mobil3, mobil4, mobil5, motor1, motor2, motor3, motor4, motor5];

function tampilkanKendaraan(){
    console.log("Daftar Kendaraan:");

    daftarKendaraan.forEach((k, index) => {
        console.log(`${index + 1}. ${k.getInfo()}`);
    });
}

tampilkanKendaraan();

let pelanggan1 = new Pelanggan("Sandi", "081378123929");
let pelanggan2 = new Pelanggan("Zidan", "081323173828");
let pelanggan3 = new Pelanggan("Rojak", "081398662312");
let pelanggan4 = new Pelanggan("Ikhsan", "081398635030");

console.log("\nDaftar Pelanggan Belum Sewa Kendaraan: ")
console.log(pelanggan4.tampilkanInfo());

pelanggan1.sewaKendaraan(daftarKendaraan[0]);
pelanggan2.sewaKendaraan(daftarKendaraan[3]);
pelanggan3.sewaKendaraan(daftarKendaraan[5]);

let daftarPelanggan = [pelanggan1, pelanggan2, pelanggan3];
console.log("\nDaftar Pelanggan Penyewa Kendaraan: ");

daftarPelanggan.forEach(p => {
    console.log(p.tampilkanInfo());
});