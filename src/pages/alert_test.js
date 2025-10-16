import { useState } from "react";
import Preview from "../components/preview";

export default function Test_overlay() {
  const [mode, setMode] = useState("tako");

  // Default template untuk masing-masing platform
  const defaultTemplates = {
    tako: {
      html: `
        <html>
            <head>
            <style>
                body {
                margin: 0;
                font-family: Arial, sans-serif;
                color: white;
                background: none;
                }
                .box {
                padding: 16px;
                background: #333;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }
                h2 {
                margin: 0;
                color: #FFDD00;
                }
                p {
                margin: 5px 0;
                }
                .pesan {
                font-style: italic;
                color: #BBBBBB;
                }
                img {
                width: 50px;
                border-radius: 50%;
                }
            </style>
            </head>
            <body>
            <div class="box">
                <img src="{{gifterPicture}}" alt="Profile">
                <h2>🎉 Makasih, {{gifterName}}!</h2>
                <p>Donasi: {{formattedAmount}}</p>
                <p class="pesan">"{{message}}"</p>
            </div>
            </body>
            </html>
      `,
      css: `` // Tako mungkin HTML+CSS gabung
    },
    trakteer: {
      html: `
        <div class="alert">
          <img src="{supporter_avatar}" alt="avatar"/>
          <h3>{supporter_name} kasih dukungan!</h3>
          <p>{support_message}</p>
          <p>{unit_count} {unit_icon} — {nominal_price}</p>
        </div>
      `,
      css: `
        .alert {
          background: rgba(255,0,0,0.7);
          padding: 16px;
          border-radius: 8px;
          color: white;
          max-width: 300px;
          margin: auto;
        }
        .alert img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-bottom: 8px;
        }
      `
    }
  };

  const [template, setTemplate] = useState(defaultTemplates.tako);

  // Data dummy untuk tako
  const takoData = {
    gifterName: "Budi",
    formattedAmount: "Rp 50.000",
    message: "Semangat terus ya!"
  };

  // Data dummy untuk trakteer
  const trakteerData = {
   
    supporter_name: "Ani",
    supporter_message: "Keep up the good work!",
    unit_count: "3",
    unit_icon: "☕",
    nominal_price: "Rp 15.000"
  };

  // Render template sesuai mode
  const renderHtml =
    mode === "tako"
      ? template.html
          .replace(/{{gifterName}}/g, takoData.gifterName)
          .replace(/{{formattedAmount}}/g, takoData.formattedAmount)
          .replace(/{{message}}/g, takoData.message)
      : template.html
          .replace(/{supporter_avatar}/g, trakteerData.supporter_avatar)
          .replace(/{supporter_name}/g, trakteerData.supporter_name)
          .replace(/{support_message}/g, trakteerData.supporter_message)
          .replace(/{unit_count}/g, trakteerData.unit_count)
          .replace(/{unit_icon}/g, trakteerData.unit_icon)
          .replace(/{nominal_price}/g, trakteerData.nominal_price);

  const renderCss = template.css;

  // Reset template sesuai mode
  const handleReset = () => {
    setTemplate(defaultTemplates[mode]);
  };

  // Ganti mode
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTemplate(defaultTemplates[newMode]);
  };

  return (
    <>
      <section className="p-3">
        <h1>Overlay Tester</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-danger"
                onClick={() => handleModeChange("trakteer")}
              >
                Trakteer
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => handleModeChange("tako")}
              >
                Tako
              </button>
            </div>
          </div>
        </div>
      </section>

        <section>
        Preview hasil render
        {/* <div
          className="p-6 bg-purple-700/70 rounded-xl shadow-xl w-full max-w-lg text-center"
          dangerouslySetInnerHTML={{
            __html: `<style>${renderCss}</style>${renderHtml}`
          }}
        /> */}
        <Preview />
      </section>
    </>
  );
}
