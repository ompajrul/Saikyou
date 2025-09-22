import BG from "../images/suisei.png";
import porto1 from "../images/suisei_1.jpg";
import porto12 from "../images/Vanta.jpg";
import porto13 from "../images/zeya.jpg";

export default function Home() {
  return (
    <>
      {/* SECTION 1: Perkenalan */}
      <section
        className="text-center container-fluid d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="col-lg-6 col-md-8 mx-auto">
          <p className="lead text-primary fw-bold display-1 leading-tigh animate-fade-in">PERKENALAN</p>
          <p className="lead text-white fw-semibold display-6">
            Tinta, warna, dan imajinasi selalu jadi teman setia aku. <br />
            Halo saya <b>Om Pajrul</b>, Owner dari <b>Sai.kyou_</b> siap melayani kamu.
          </p>

          <div className="row">
            <div className="col">
              <a href="#" className="btn btn-primary px-5 fs-2 my-2">
                PESAN SEKARANG
              </a>
            </div>
            <div className="col">
              <a href="#porto" className="btn btn-secondary px-5 fs-2 my-2">
                PORTOFOLIO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: porto --------------------------------------------------------------------*/}
      <section className="container py-5" id="porto">
        <div className="row text-center mb-4 "style={{ fontFamily: "'Poppins', sans-serif" }} >
          <p className="fw-bold text-primary font-monospace lead display-1 leading-tigh animate-fade-in">PORTOFOLIO</p>
          <p className="text-muted">Contoh karya yang dibuat sebelumnya</p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={porto1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">SUISEI X SUMBER GROUP</h5>
                <p className="card-text">
                  bagaimana jika suisei dipadukan sama bus sumber group?
                  jadinya seperti ini
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={porto12}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">VANTA DENGAN BUKU</h5>
                <p className="card-text">
                  dalam rangka hari kemerdekaan, maka saya buat fanart. fanart kali ini lebih ke pr yamg harus dikerjakan di indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={porto13}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ZEYAYAYA WINDOWS MOMEN </h5>
                <p className="card-text">
                  terinspirasi dari wallpaper windows 11 dengan paduan Ichika Madobe sebagai maskot OsTan windows 11
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2: Cards --------------------------------------------------------------------*/}
      <section className="container py-5">
        <div className="row text-center mb-4">
          <h2 className="fw-bold">Kenapa Memilih Sai.kyou_?</h2>
          <p className="text-muted">Alasan kenapa kamu cocok pesan di sini ✨</p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Kualitas Premium</h5>
                <p className="card-text">
                  Setiap karya dibuat dengan detail dan warna terbaik agar hasil
                  memuaskan.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Harga Bersahabat</h5>
                <p className="card-text">
                   Mulai dari IDR 50.000, anda bisa request sesuai kebutuhan*.
                </p>
              </div>
            </div>
            *selama masih sesuai syarat dan ketentuan
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cepat & Responsif</h5>
                <p className="card-text">
                  Proses pengerjaan cepat, komunikasi selalu terbuka dan ramah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
