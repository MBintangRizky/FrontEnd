<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>homespot</title>

    <!-- Bootstrap CSS Start -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <!-- Bootstrap CSS End -->

    <!-- Bootstrap Icon -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Bootstrap Icon End -->

    <!-- Font Awesome CSS Start -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Font Awesome CSS End -->

    <!-- CSS Start -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- CSS End -->
</head>

<body>
    <!-- Navbar Start -->
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg header-homespot">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="assets/img/logo.svg" alt="Homespot" />
                </a>
                <div class="collapse navbar-collapse justify-content-center">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
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
                <button class="btn btn-outline-primary" type="button" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                    Daftar/Login
                </button>
            </div>
        </nav>
    </header>
    <!-- Navbar End -->

    <!-- Main Start -->
    <main>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Masuk</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                    placeholder="youremail@email.com">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <div class="input-group">
                                    <input type="password" placeholder="password" class="form-control" id="password">
                                    <button class="btn btn-outline-secondary" type="button" id="showPassword"><i
                                            class="bi bi-eye"></i></button>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="rememberMe">
                                    <label class="form-check-label" for="rememberMe">Ingat Saya</label>
                                </div>
                                <a href="#" class="small text-warning">Lupa Password ?</a>
                            </div>
                            <div class="d-grid gap-1">
                                <button type="submit" class="btn btn-primary">Masuk</button>
                                <p class="text-center my-2 text-muted">atau</p>
                                <button type="button" class="btn btn-secondary"><i class="bi bi-google"></i> Sign in
                                    with Google
                                </button>
                            </div>
                        </form>
                        <div class="text-center mt-3">
                            <p class="small text-muted">Belum punya akun? <a href="#" id="signupLink"
                                    class="text-warning">Daftar</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Sign Up Modal -->
        <div class="modal fade" id="signupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="signupModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="signupModalLabel">Daftar</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Nama Lengkap</label>
                                <input type="text" class="form-control" id="fullName" placeholder="Nama Lengkap">
                            </div>
                            <div class="mb-3">
                                <label for="signupEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="signupEmail" placeholder="your@email.com">
                            </div>
                            <label for="phone" class="form-label">No. Handphone</label>
                            <div class="mb-3 input-group">
                                <span class="input-group-text" id="basic-addon1">+62</span>
                                <input type="text" class="form-control" id="phone">
                            </div>
                            <div class="mb-3">
                                <label for="signupPassword" class="form-label">Password</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="signupPassword"
                                        placeholder="Password">
                                    <button class="btn btn-outline-secondary" type="button" id="showSignupPassword"><i
                                            class="bi bi-eye"></i></button>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Konfirmasi Password</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="confirmPassword"
                                        placeholder="Konfirmasi Password">
                                    <button class="btn btn-outline-secondary" type="button" id="showConfirmPassword"><i
                                            class="bi bi-eye"></i></button>
                                </div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="termCondition">
                                <label class="form-check-label" for="termCondition" style="font-size: 0.8rem;">
                                    <small>
                                        Dengan ini saya menyetujui <span class="text-primary">syarat dan
                                            ketentuan</span> yang berlaku
                                        sesuai <span class="text-primary">Kebijakan Privasi</span> Homespot serta
                                        memberikan otorisasi
                                        kepada kami untuk meneruskan data kepada partner bank.
                                    </small>
                                </label>
                            </div>


                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Daftar</button>
                            </div>
                        </form>
                        <div class="text-center mt-3">
                            <p class="small text-muted">Sudah punya akun? <a href="#" id="loginLinkFromSignup"
                                    class="text-warning">Masuk</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Hero Start -->
        <section class="hero" id="hero-homespot">
            <div class="container min-vh-100 d-flex align-items-center justify-content-center">
                <div class="row">
                    <div class="col-12">
                        <!-- Judul dengan padding tambahan -->
                        <div class="text-center text-white">
                            <h2>Beli Rumah Impianmu hanya di Homespot</h2>
                        </div>
                        <div class="py-5">
                            <div class="input-group input-group-home-homespot p-3">
                                <span class="input-group-text">
                                    <i class="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" class="form-control input-home-homespot"
                                    placeholder="Cari lokasi, nama properti atau nama developer" />
                                <button class="btn btn-tipe-home-homespot dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown">
                                    Pilih Tipe
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Tipe 1</a></li>
                                    <li><a class="dropdown-item" href="#">Tipe 2</a></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Tipe 3</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Tipe 4</a></li>
                                </ul>
                                <button class="btn btn-primary btn-cari-home-homespot" type="button">Cari</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Hero End -->

        <!-- Card Top Start -->
        <section class="card-top">
            <div class="container min-vh-100 d-flex align-items-center justify-content-center carousel-homespot">
                <div class="container-card-top-homespot position-absolute">
                </div>
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-3">
                        <div>
                            <span class="py-2">
                                <i class="fa-solid fa-location-dot icon-home-homespot"></i>
                                Kota Jakarta Pusat</span>
                            <h2>Properti Baru di Sekitarmu</h2>
                            <p>Rekomendasi pilihan kami untukmu. Dari rumah minimalis, ruko strategis, sampai apartemen
                                modern semua tersedia</p>
                            <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">Lihat semuanya</a>
                        </div>
                    </div>
                    <?php
                    $cards = [
                        [
                            'title' => 'Go Home Residence',
                            'provinsi' => 'Banten',
                            'text' => '3 KT * 2 KM * LB 29m2 * LT 60m2 * SHGB',
                            'harga' => 'Rp300 Jt - Rp800 Jt',
                            'images' => [
                                'assets/img/Card bawah/Go Home Residence.jpg',
                                'assets/img/Card bawah/Al Banjary Village.jpg'
                            ]
                        ],
                        [
                            'title' => 'Graha Permata Estate',
                            'provinsi' => 'Jawa Tengah',
                            'text' => '3 KT * 3 KM * LB 103m2 * LT 112m2 * SHM',
                            'harga' => 'Rp940 Jt - Rp1.2 M',
                            'images' => [
                                'assets/img/Card bawah/Graha Permata Estate.jpg',
                                'assets/img/Card bawah/Astana Buwana 2.jpg'
                            ]
                        ],
                        [
                            'title' => 'Graha Permata Wiradadi',
                            'provinsi' => 'Jawa Tengah',
                            'text' => '3 KT * 1 KM * LB 60m2 * LT 135m2 * SHM',
                            'harga' => 'Rp388 Jt - Rp548 Jt',
                            'images' => [
                                'assets/img/Card bawah/Graha Permata Wiradadi.jpg',
                                'assets/img/Card bawah/Pandaran Avenue.jpeg'
                            ]
                        ],
                        [
                            'title' => 'Grand Trevista Residence',
                            'provinsi' => 'DKI Jakarta',
                            'text' => '3 KT * 4 KM * LB 182m2 * LT 112m2 * SHGB',
                            'harga' => 'Rp4.2 M - Rp5.1 M',
                            'images' => [
                                'assets/img/Card bawah/Grand Trevista Residence.jpg',
                                'assets/img/Card bawah/Griya Rafada 4 River View.jpeg'
                            ]
                        ],
                        [
                            'title' => 'The Shizeb',
                            'provinsi' => 'Banten',
                            'text' => '3 KT * 2 KM * LB 29m2 * LT 60m2 * SHGB',
                            'harga' => 'Rp300 Jt - Rp800 Jt',
                            'images' => [
                                'assets/img/Card bawah/The Shizeb.jpg',
                                'assets/img/Card bawah/Villa Argomulyo.jpg',
                            ]
                        ],
                    ];
                    ?>
                    <div class="col-9">
                            <div class="carousel slide" data-bs-ride="carousel" id="carouselHomespotTop">
                                <button id="carousel-control-prev-index-homespot-bottom"
                                    class="carousel-control-prev carousel-control-prev-icon-homespot-card" type="button"
                                    data-bs-target="#carouselHomespotTop" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button id="carousel-control-next-index-homespot-bottom"
                                    class="carousel-control-next carousel-control-next-icon-homespot-card" type="button"
                                    data-bs-target="#carouselHomespotTop" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                                <div class="carousel-inner carousel-inner-homespot">
                                    <?php
                                    $i = 0;
                                    foreach ($cards as $index => $c):
                                        ?>
               <div id="carousel-item-bottom-homespot"
                                                class="carousel-item <?= $i == 0 ? 'active' : '' ?>"
                                                data-bs-interval="27500">
                                                <div class="col-4 px-2">
                                                    <div class="card card-homespot">
                                                        <div id="carouselIndicators<?= $index ?>"
                                                            class="carousel slide carousel-image-homespot"
                                                            data-bs-ride="carousel">
                                                            <div class="carousel-inner">
                                                                <?php foreach ($c['images'] as $i => $image): ?>
                                                                    <div class="carousel-item <?= $i === 0 ? 'active' : '' ?>">
                                                                        <div class="image-thumbnail-homespot">
                                                                            <img src="<?= $image ?>" class="d-block w-100">
                                                                        </div>
                                                                    </div>
                                                                <?php endforeach; ?>
                                                            </div>
                                                            <button class="carousel-control-prev" type="button"
                                                                data-bs-target="#carouselIndicators<?= $index ?>"
                                                                data-bs-slide="prev">
                                                                <span class="carousel-control-prev-icon"
                                                                    aria-hidden="true"></span>
                                                            </button>
                                                            <button class="carousel-control-next" type="button"
                                                                data-bs-target="#carouselIndicators<?= $index ?>"
                                                                data-bs-slide="next">
                                                                <span class="carousel-control-next-icon"
                                                                    aria-hidden="true"></span>
                                                            </button>
                                                        </div>
                                                        <div class="card-body">
                                                            <h5 class="card-title-homespot card-title">
                                                                <?= $c['title'] ?>
                                                            </h5>
                                                            <p class="card-text mb-0">
                                                                <?= $c['provinsi'] ?>
                                                            </p>
                                                            <p class="card-text card-deskripsi-homespot">
                                                                <?= $c['text'] ?>
                                                            </p>
                                                            <h5 class="card-harga">
                                                                <?= $c['harga'] ?>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php
                                            $i++;
                                    endforeach;
                                    ?>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <!-- Card Top End -->

        <!-- Card Bottom Start -->
        <section class="card-bottom">
            <div class="container carousel-homespot min-vh-100 d-flex align-items-center justify-content-center">
                <div class="row py-2 px-4">
                    <div class="col-12 d-flex justify-content-between align-items-center py-4">
                        <h3 class="text-center">Jelajahi Properti dengan Virtual 360</h3>
                        <button class="btn btn-primary" type="button">
                            Lihat Semua
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <?php
                    $cards = [
                        [
                            'title' => 'Go Home Residence',
                            'provinsi' => 'Banten',
                            'text' => '3 KT * 2 KM * LB 29m2 * LT 60m2 * SHGB',
                            'harga' => 'Rp300 Jt - Rp800 Jt',
                            'images' => [
                                'assets/img/Card bawah/Go Home Residence.jpg',
                                'assets/img/Card bawah/Al Banjary Village.jpg'
                            ]
                        ],
                        [
                            'title' => 'Graha Permata Estate',
                            'provinsi' => 'Jawa Tengah',
                            'text' => '3 KT * 3 KM * LB 103m2 * LT 112m2 * SHM',
                            'harga' => 'Rp940 Jt - Rp1.2 M',
                            'images' => [
                                'assets/img/Card bawah/Graha Permata Estate.jpg',
                                'assets/img/Card bawah/Astana Buwana 2.jpg'
                            ]
                        ],
                        [
                            'title' => 'Graha Permata Wiradadi',
                            'provinsi' => 'Jawa Tengah',
                            'text' => '3 KT * 1 KM * LB 60m2 * LT 135m2 * SHM',
                            'harga' => 'Rp388 Jt - Rp548 Jt',
                            'images' => [
                                'assets/img/Card bawah/Graha Permata Wiradadi.jpg',
                                'assets/img/Card bawah/Pandaran Avenue.jpeg'
                            ]
                        ],
                        [
                            'title' => 'Grand Trevista Residence',
                            'provinsi' => 'DKI Jakarta',
                            'text' => '3 KT * 4 KM * LB 182m2 * LT 112m2 * SHGB',
                            'harga' => 'Rp4.2 M - Rp5.1 M',
                            'images' => [
                                'assets/img/Card bawah/Grand Trevista Residence.jpg',
                                'assets/img/Card bawah/Griya Rafada 4 River View.jpeg'
                            ]
                        ],
                        [
                            'title' => 'The Shizeb',
                            'provinsi' => 'Banten',
                            'text' => '3 KT * 2 KM * LB 29m2 * LT 60m2 * SHGB',
                            'harga' => 'Rp300 Jt - Rp800 Jt',
                            'images' => [
                                'assets/img/Card bawah/The Shizeb.jpg',
                                'assets/img/Card bawah/Villa Argomulyo.jpg',
                            ]
                        ],
                    ];
                    ?>
                    <div class="carousel slide" data-bs-ride="carousel" id="carouselHomespotBottom">
                            <button id="carousel-control-prev-index-homespot-bottom"
                                class="carousel-control-prev carousel-control-prev-icon-homespot-card" type="button"
                                data-bs-target="#carouselHomespotBottom" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button id="carousel-control-next-index-homespot-bottom"
                                class="carousel-control-next carousel-control-next-icon-homespot-card" type="button"
                                data-bs-target="#carouselHomespotBottom" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                            <div class="carousel-inner carousel-inner-homespot">
                                <?php
                                $i = 0;
                                foreach ($cards as $index => $c):
                                    ?>
                                    <div id="carousel-item-bottom-homespot"
                                            class="carousel-item <?= $i == 0 ? 'active' : '' ?>" data-bs-interval="27500">
                                            <div class="col-3 px-2">
                                                <div class="card card-homespot">
                                                    <div id="carouselIndicators<?= $index ?>"
                                                        class="carousel slide carousel-image-homespot"
                                                        data-bs-ride="carousel">
                                                        <div class="carousel-inner">
                                                            <?php foreach ($c['images'] as $i => $image): ?>
                                                                <div class="carousel-item <?= $i === 0 ? 'active' : '' ?>">
                                                                    <div class="image-thumbnail-homespot">
                                                                        <img src="<?= $image ?>" class="d-block w-100">
                                                                    </div>
                                                                </div>
                                                            <?php endforeach; ?>
                                                        </div>
                                                        <button class="carousel-control-prev" type="button"
                                                            data-bs-target="#carouselIndicators<?= $index ?>"
                                                            data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon"
                                                                aria-hidden="true"></span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button"
                                                            data-bs-target="#carouselIndicators<?= $index ?>"
                                                            data-bs-slide="next">
                                                            <span class="carousel-control-next-icon"
                                                                aria-hidden="true"></span>
                                                        </button>
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title-homespot card-title">
                                                            <?= $c['title'] ?>
                                                        </h5>
                                                        <p class="card-text mb-0">
                                                            <?= $c['provinsi'] ?>
                                                        </p>
                                                        <p class="card-text card-deskripsi-homespot">
                                                            <?= $c['text'] ?>
                                                        </p>
                                                        <h5 class="card-harga">
                                                            <?= $c['harga'] ?>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <?php
                                        $i++;
                                endforeach;
                                ?>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </section>
        <!-- Card Bottom End -->

        <!-- Kota Start -->
        <section class="properti-kota">
            <div class="container min-vh-100 d-flex align-items-center justify-content-center position-relative">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-3">
                        <div>
                            <h2>Cari Properti Berdasarkan Kota</h2>
                            <p>Yuk, cari properti yang sesuai dengan preferensimu di kota-kota pilihan terfavorit</p>
                            <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">Lihat semuanya</a>
                        </div>
                    </div>
                    <div class="col-9 py-5">
                        <div id="carouselKota" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner carousel-inner-homespot">
                                <div class="carousel-item active">
                                    <div class="row d-flex justify-content-center align-items-center">
                                        <?php
                                        $kota = [
                                            ['nama' => 'Bandung', 'properti' => '366 Properti', 'image' => 'assets/img/bandung.png'],
                                            ['nama' => 'Surabaya', 'properti' => '169 Properti', 'image' => 'assets/img/surabaya.png'],
                                            ['nama' => 'Makassar', 'properti' => '203 Properti', 'image' => 'assets/img/makassar.png'],
                                            ['nama' => 'Jakarta', 'properti' => '52 Properti', 'image' => 'assets/img/jakarta.png'],
                                            ['nama' => 'Medan', 'properti' => '142 Properti', 'image' => 'assets/img/medan.png'],
                                        ];

                                        foreach ($kota as $index => $card) {
                                            echo '<div class="col-2 px-2">';
                                            echo '<div class="card card-homespot-kota">';
                                            echo '<div class="card-body">';
                                            echo '<div class="position-absolute py-1 px-2">';
                                            echo '<h6 class="card-title mb-0">' . $card['nama'] . '</h6>';
                                            echo '<p class="card-text mb-0">' . $card['properti'] . '</p>';
                                            echo '</div>';
                                            echo '<img src="' . $card['image'] . '" class="d-block w-100">';
                                            echo '</div>';
                                            echo '</div>';
                                            echo '</div>';
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-kota-homespot position-absolute">
                </div>
            </div>
        </section>
        <!-- Kota End -->

        <!-- Carousel Start -->
        <section class="carousel-section">
            <div class="container min-vh-100 d-flex align-items-center justify-content-center position-relative">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-12">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://source.unsplash.com/1200x400?random" class="d-block w-100"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://source.unsplash.com/1200x400?random" class="d-block w-100"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://source.unsplash.com/1200x400?random" class="d-block w-100"
                                        alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Carousel End -->

        <!-- Kalkulator Start -->
        <section class="calculator-section">
            <div class="container min-vh-100 d-flex align-items-center justify-content-center position-relative">
                <div class="container p-5 container-calculator-homespot">
                    <div class="row d-flex align-items-center justify-content-center p-4">
                        <div class="col-4">
                            <div>
                                <h2>Kalkulator KPR</h2>
                                <img src="assets/img/Rectangle 10184.png" alt="Calculator" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label for="hargaProperti" class="form-label">Harga Properti</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="hargaProperti">Rp</span>
                                            <input type="number" class="form-control" placeholder="0" min="0">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="uangMuka" class="form-label">Uang Muka</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="uangMuka">Rp</span>
                                            <input type="number" class="form-control" placeholder="0" min="0">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label for="jumlahPinjaman" class="form-label">Jumlah Pinjaman</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="jumlahPinjaman">Rp</span>
                                            <input type="number" class="form-control" placeholder="0" min="0" disabled>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="masaKreditFix" class="form-label">Masa Kredit Fix</label>
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" placeholder="0" min="0" disabled>
                                            <span class="input-group-text" id="masaKreditFix">Tahun</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="sukuBunga" class="form-label">Suku Bunga</label>
                                        <select class="form-select">
                                            <option selected>Program Suku Bunga</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">...</option>
                                            <option value="5">100</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="nominalSukuBunga" class="form-label">Nominal Suku Bunga</label>
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" placeholder="0" min="0" disabled>
                                            <span class="input-group-text" id="nominalSukuBunga">%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="lamaPinjaman" class="form-label">Lama Pinjaman</label>
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" placeholder="0" min="0" disabled>
                                            <span class="input-group-text" id="lamaPinjaman">Tahun</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <!-- Kalkulator End -->
    </main>
    <!-- Main End -->

    <!-- Footer Start -->
    <div class="container-fluid container-footer">
        <div class="container">
            <footer class="py-5 text-white">
                <div class="row d-flex justify-content-center">
                    <div class="col-2 mb-3">
                        <h5 class="mb-4">Kantor Pusat</h5>
                        <p class="mb-0">
                            PT. Bringin Inti Teknologi (BIT) Intiland Tower Lt 12A
                        </p>
                        <p class="mb-0">
                            Jl. Jend. Sudirman Kav. 32
                        </p>
                        <p class="mb-0">
                            Jakarta 10220
                        </p>
                        <p class="mb-0">
                            Indonesia
                        </p>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5 class="mb-4">Dukungan</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-white">Kebijakan Privasi</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-white">Syarat dan Ketentuan</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-2 mb-3">
                        <h5 class="mb-4">Hubungi Kami</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <a href="#" class="nav-link p-0 text-white">+62 812-3456-7890</a>
                                </div>
                            </li>
                            <li class="nav-item mb-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <i class="fa-solid fa-envelope"></i>
                                    <a href="#" class="nav-link p-0 text-white">support@homespot.id</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-2 mb-3">
                        <h5 class="mb-4">Homespot By:</h5>
                        <div class="container-image-footer d-flex align-items-center justify-content-center">
                            <img class="w-100" src="assets/img/logo bit.png">
                        </div>
                    </div>
                    <div class="col-2 mb-3">
                        <h5 class="mb-4">Powered By:</h5>
                        <div class="container-image-footer d-flex align-items-center justify-content-center">
                            <img class="w-100" src="assets/img/bri-logo.png">
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>

    <!-- Footer End -->

    <!-- Bootstrap JS Start -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <!-- Bootstrap JS End -->

    <!-- JQuery JS Start -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- JQuery JS End -->

    <!-- JS Start -->
    <script src="assets/js/home.js"></script>
    <script src="assets/js/script.js"></script>
    <!-- JS End -->
</body>

</html>