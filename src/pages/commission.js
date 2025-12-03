import porto1 from "../images/suisei_1.jpg";
import porto3 from "../images/cecil.jpg";
import porto4 from "../images/zeya2.jpeg";
import porto5 from "../images/TBA.png";

export default function Commission() {
  return (
    <>
      {/* judul */}
      <div className="text-center">
        <h1 className="lead text-primary fw-bold display-1 leading-tigh animate-fade-in"> PRICELIST</h1>
        < h3 className="py-3">Daftar Harga yang tersedia di sini</h3>

      </div>
      <div className="container " style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="row g-4 ">
          <div className="col-6">
            <div className="card h-100 shadow card-trans ">
              <img
                src={porto4}
                className="card-img-top shadow h-100"
                alt="..."
              />
              <div className="card-body row d-flex">
                <div className="col mb-3">
                  <h5 className="card-title">BUST UP</h5>
                  <p className="card-text">
                    Dari dada ke kepala <br></br>
                    IDR 60.000
                  </p>
                </div>

                <div className="col text-end">
                  <a href="https://wa.me/6281542337411?text=Halo%20admin%2C%20apakah%20tersedia%20jasa%20gambar%20untuk%20bust%20up%3F" className="btn btn-primary ">
                    PESAN SEKARANG
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100 shadow card-trans ">
              <img
                src={porto1}
                className="card-img-top shadow"
                alt="..."
              />
              <div className="card-body d-flex row">
                <div className="col mb-3">
                  <h5 className="card-title">HALF BODY </h5>
                  <p className="card-text">
                    Gambar dari perut hingga ke kepala  <br></br>
                    IDR 85.000
                  </p>
                </div>
                <div className="col text-end">
                  <a href="https://wa.me/6281542337411?text=Halo%20admin%2C%20apakah%20tersedia%20jasa%20gambar%20untuk%20half%20body%3F" className="btn btn-primary  ">
                    PESAN SEKARANG
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100 shadow card-trans ">
              <img
                src={porto3}
                className="card-img-top shadow"
                alt="..."
              />
              <div className="card-body d-flex row">
                <div className="col mb-3">
                  <h5 className="card-title">FULL BODY </h5>
                  <p className="card-text">
                    Gambar dari kaki hingga kepala<br></br>
                    IDR 120.000
                  </p>
                </div>

                <div className="col text-end">
                  <a href="https://wa.me/6281542337411?text=Halo%20admin%2C%20apakah%20tersedia%20jasa%20gambar%20untuk%20full%20body%3F" className="btn btn-primary ">
                    PESAN SEKARANG
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100 shadow card-trans ">
              <img
                src={porto5}
                className="card-img-top shadow"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">COMING SOON</h5>
                <p className="card-text">
                  akan segera diumumkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}