<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>homespot</title>

    <!-- Bootstrap CSS Start -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <!-- Bootstrap CSS End -->

    <!-- Font Awesome CSS Start -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- Font Awesome CSS End -->

    <!-- CSS Start -->
    <link rel="stylesheet" href="../assets/css/style.css" />
    <!-- CSS End -->
  </head>
  <body>
    <!-- Navbar Start -->
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg header-homespot">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="../assets/img/logo.svg" alt="Homespot" />
          </a>
          <div class="collapse navbar-collapse justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle px-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kota Pilihan
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Kota 1</a></li>
                  <li><a class="dropdown-item" href="#">Kota 2</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active px-3" href="#">Beli</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Tentang Kami</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Daftar Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Asuransi</a>
              </li>
            </ul>
          </div>
          <div class="d-flex text-center gap-1">
            <i class="fa-solid fa-circle-user fs-4"></i>
            <span>
                joshuasinaga@gmail.com
            </span>
          </div>
        </div>
      </nav>
    </header>
    <!-- Navbar End -->

    <!-- Main Start -->
    <main>
      <!-- Hero Start -->
      <section class="profile" id="profile-homespot">
        <div
          class="container min-vh-100 d-flex p-4 justify-content-center"
        >
          <div class="row w-100">
            <div class="col-3">
                <div class="card">
                    <div class="card-header card-header-profile-homespot d-flex align-items-center justify-content-center gap-2 text-center fw-bold">
                    <i class="fa-solid fa-circle-user fs-2"></i>
                        Joshua Bertus Sinaga
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-homespot">
                            <div class="menu-profile-homespot active">
                                <i class="fa-solid fa-user fs-5 icon-profile-homespot"></i>    
                                Profile
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-homespot">
                            <div class="menu-profile-homespot">
                                <i class="fa-solid fa-heart fs-5 icon-profile-homespot"></i>
                                Properti Tersimpan
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-homespot">
                            <div class="menu-profile-homespot">
                                <i class="fa-solid fa-house-chimney fs-5 icon-profile-homespot"></i>
                                List Pengajuan KPR
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-9">
                <div class="pb-3">
                    <span class="fs-4 fw-bold d-block">Detail Profil</span>
                    <span class="text-profile-desc-homespot fs-6">Atur profil kamu disini</span>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <div class="card">
                                    <div class="p-2">
                                        <img src="https://source.unsplash.com/200x150?profile" class="card-img" alt="...">
                                    </div>
                                    <div class="card-body p-2 d-flex align-items-center justify-content-center">
                                        <button type="button" class="btn btn-outline-primary">Upload Foto</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-9">
                                <div class="card">
                                    <div class="card-body d-flex align-items-center justify-content-between pb-0">
                                        <span>
                                            <span class="fs-5 fw-bold text-primary">Data Diri</span>
                                            <span class="fs-6 text-danger">*</span>
                                        </span>
                                        <button type="button" class="btn btn-outline-danger">
                                        <i class="fa-solid fa-pen-clip"></i>
                                        Edit</button>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-2">
                                            <label for="namaLengkap" class="form-label">Nama Lengkap</label>
                                            <input type="text" class="form-control" id="namaLengkap" placeholder="Nama Lengkap">
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <label for="tempatLahir" class="form-label">Tempat Lahir</label>
                                                <input type="text" class="form-control" id="tempatLahir" placeholder="Tempat Lahir">
                                            </div>
                                            <div class="col-6">
                                                <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                                                <input type="date" class="form-control" id="tanggalLahir" placeholder="Tanggal Lahir">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card m-2">
                                        <div class="card-body d-flex align-items-center pb-0">
                                            <span>
                                                <span class="fs-5 fw-bold text-primary">Identitas</span>
                                                <span class="fs-6 text-danger">*</span>
                                            </span>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-2">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="text" class="form-control" id="email" placeholder="Email">
                                            </div>
                                            <div class="mb-2">
                                                <label for="noHandphone" class="form-label">No Handphone</label>
                                                <input type="text" class="form-control" id="noHandphone" placeholder="No Handphone">
                                            </div>
                                            <div class="mb-2">
                                                <label for="changePassword" class="form-label">Ubah Kata Sandi</label>
                                                <div class="input-group mb-3">
                                                    <input type="password" class="form-control" placeholder="Kata Sandi Baru">
                                                    <button class="btn btn-secondary" type="button" id="changePassword"><i class="fa-solid fa-eye-slash"></i></button>
                                                </div>
                                            </div>
                                            <div class="card-body d-flex align-items-center justify-content-end">
                                                <button type="button" class="btn btn-primary">
                                                Ubah Data</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body d-flex align-items-center pb-0">
                                        <span>
                                            <span class="fs-5 fw-bold text-primary">Alamat (Sesuai KTP)</span>
                                            <span class="fs-6 text-danger">*</span>
                                        </span>
                                    </div>
                                    <div class="card-body">
                                        <div class="row mb-2">
                                            <div class="col-6">
                                                <label for="provinsi" class="form-label">Provinsi</label>
                                                <select class="form-select">
                                                    <option selected>Pilih Provinsi</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                            <div class="col-6">
                                                <label for="kabupatenKota" class="form-label">Kabupaten/Kota</label>
                                                <select class="form-select">
                                                    <option selected>Pilih Kabupaten/Kota</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-6">
                                                <label for="kecamatan" class="form-label">Kecamatan</label>
                                                <select class="form-select">
                                                    <option selected>Pilih Kecamatan</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                            <div class="col-6">
                                                <label for="desaKelurahan" class="form-label">Desa/Kelurahan</label>
                                                <select class="form-select">
                                                    <option selected>Pilih Desa/Kelurahan</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4">
                                                <label for="rt" class="form-label">RT</label>
                                                <input type="text" class="form-control" id="rt" placeholder="RT">
                                            </div>
                                            <div class="col-4">
                                                <label for="rw" class="form-label">RW</label>
                                                <input type="text" class="form-control" id="rw" placeholder="RW">
                                            </div>
                                            <div class="col-4">
                                                <label for="kodePos" class="form-label">Kode Pos</label>
                                                <input type="text" class="form-control" id="kodePos" placeholder="Kode Pos">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body d-flex align-items-center pb-0">
                                        <span>
                                            <span class="fs-5 fw-bold text-primary">Alamat Domisili</span>
                                        </span>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-2">
                                            <input type="text" class="form-control" id="alamatDomisili" placeholder="Alamat Domisili">
                                        </div>
                                    </div>
                                    <div class="card-body d-flex align-items-center pb-0">
                                        <span>
                                            <span class="fs-5 fw-bold text-primary">Pin Lokasi</span>
                                            <span class="fs-6 text-danger">*</span>
                                        </span>
                                    </div>
                                    <div class="card-body">
                                        <div class="input-group mb-w">
                                            <input type="text" class="form-control" placeholder="Pin Lokasi Anda!">
                                            <button class="btn btn-primary" type="button" id="button-addon2">PIN LOKASI</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
    </main>
    <!-- Main End -->

    <!-- Bootstrap JS Start -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <!-- Bootstrap JS End -->

    <!-- JQuery JS Start -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <!-- JQuery JS End -->

    <!-- JS Start -->
    <script src="../assets/js/home.js"></script>
    <!-- JS End -->
  </body>
</html>
