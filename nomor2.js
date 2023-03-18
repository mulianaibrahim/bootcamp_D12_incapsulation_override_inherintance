class Siswa {
    nama;
    nik;
    jenisKelamin;
    alamat;

    setNama(nama) {
        this.nama = nama;
    }

    setNik(nik) {
        this.nik = nik;
    }

    setJenisKelamin(jenisKelamin) {
        this.jenisKelamin = jenisKelamin;
    }

    setAlamat(alamat) {
        this.alamat = alamat;
    }

    getNama() {
        return this.nama;
    }

    getNik() {
        return this.nik;
    }

    getJenisKelamin() {
        return this.jenisKelamin;
    }

    getAlamat() {
        return this.alamat
    }
}

class Employee extends Siswa {
    dataSiswa() {
        console.log('data employee.')
    }
}

class karyawan {
    pekerjaan;
    salary;

    setPekerjaan(pekerjaan) {
        this.pekerjaan = pekerjaan;
    }

    setSalary(gaji) {
        this.gaji = gaji;
    }

    getPekerjaan() {
        return this.pekerjaan;
    }

    getSalary() {
        return this.gaji;
    }
}

class Student extends Siswa {
    dataSiswa() {
        console.log('data student...')
    }
}

class mahasiswa {
    kampus;
    jurusan;

    setKampus(kampus) {
        this.kampus = kampus;
    }

    setJurusan(jurusan) {
        this.jurusan = jurusan;
    }

    getKampus() {
        return this.kampus;
    }

    getJurusan() {
        return this.jurusan;
    }
}

const pelajar = new Siswa ();
pelajar.setNama('Muliana');
pelajar.setNik(1100772233266);
pelajar.setJenisKelamin('perempuan');
pelajar.setAlamat('Aceh Timur, perureulak');
console.log(pelajar.getNama());
console.log(pelajar.getNik());
console.log(pelajar.getJenisKelamin());
console.log(pelajar.getAlamat());

console.log('lanjutttttt');

const siswa = new Siswa();
const employee = new Employee();
const student = new Student();

employee.dataSiswa();
student.dataSiswa();

const k = new karyawan();
k.setPekerjaan('HRD');
k.setSalary(5000000);
console.log(k.getPekerjaan());
console.log(k.getSalary());

const m = new mahasiswa();
m.setKampus('UNIVERSITAS MALIKUSSALEH');
m.setJurusan('SISTEM INFORMASI');
console.log(m.getKampus());
console.log(m.getJurusan());
