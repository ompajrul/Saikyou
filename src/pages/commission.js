import porto1 from "../images/suisei_1.jpg";
import porto3 from "../images/cecil.jpg";
import porto4 from "../images/zeya2.jpeg";

export default function Commission(){
    return(
        <>
        <h1 className="lead text-primary fw-bold display-1 leading-tigh animate-fade-in"> PRICELIST</h1>
        <div className="container ">
  <div className="row g-4">
    <div className="col-6">
        <div className="card h-100 shadow">
              <img
                src={porto4}
                className="card-img-top shadow"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">BUST UP</h5>
                <p className="card-text">
                Dari dada ke kepala <br></br>
                IDR 60.000
                </p>
              </div>
            </div>
    </div>
    <div className="col-6">
             <div className="card h-100 shadow">
              <img
                src={porto1}
                className="card-img-top shadow"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">HALF BODY </h5>
                <p className="card-text">
                  Gambar dari perut hingga ke kepala  <br></br>
                    IDR 85.000
                </p>
              </div>
            </div>
    </div>
    <div className="col-6">
             <div className="card h-100 shadow">
              <img
                src={porto3}
                className="card-img-top shadow"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">FULL BODY </h5>
                <p className="card-text">
                 Gambar dari kaki hingga kepala<br></br>
                 IDR 120.000
                </p>
              </div>
            </div>
    </div>
    <div className="col-6">
             <div className="card h-100 shadow">
              <img
                src="#"
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