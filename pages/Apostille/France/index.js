import React, { useEffect } from "react";
import NavigationBar from "../../../components/organisms/Navigation Bar/navigation-bar.js";
import ApostillePageTemplate from "../../../components/organisms/Apostille Page Template/Apostille-Page-Template.js";
import "./index.css";

function FranceApostille(props) {
  useEffect(() => {
    document.title =
      "France Apostille Service in Bangalore - Degree Certificate Apostille in India";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "France Certificate Apostille Attestation Service in Bangalore. Call:9148889666. France MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille for France within 4 Days."
      );
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute(
        "content",
        "degree certificate apostille for france, marriage certificate apostille for france, france mea apostille service, birth certificate apostille attestation for france Legalisation for france , Apostille for documents from france, france Embassy Apostille"
      );
    document
      .querySelector('link[rel="canonical"]')
      .setAttribute(
        "href",
        "https://www.goodwayattestation.com/france-apostille"
      );

    document.querySelector("#commonPageHeader").innerHTML =
      "France Apostille Service in Bangalore";
  }, []);

  return (
    <div className="routes-france-apostille">
      <NavigationBar showTrackStatusBtn={true} />
      <ApostillePageTemplate headline="Apostille Service For France In Bengaluru">
        <div className="routes-france-apostille_content">
          <p>
            <h2>France Apostille</h2>
          </p>

          <p className="xs-mt-12 md-mt-18">
            Procedure for certificate apostille: Submit your original
            certificate with a photocopy of passport, the certificates will be
            given to Sub Divisional Magistrate wherein it will be authenticated
            then Ministry of External Affairs will Apostille your document.
          </p>

          <p className="xs-mt-12 md-mt-18">
            <b>Duration for Apostille:</b> 2 Working Days
          </p>

          <p className="xs-mt-12 md-mt-18">
            This will be without verification in which the ministry will put a
            seal stating that THE MINISTRY OF EXTERNAL AFFAIRS ARE NOT
            RESPONSIBLE FOR THE CONTENT.
          </p>

          <p className="xs-mt-12 md-mt-18">
            Procedure for certificate apostille: Submit your original
            certificate with a photocopy of passport, the certificates will be
            given to Sub Divisional Magistrate wherein it will be authenticated
            then Ministry of External Affairs will Apostille your document.
          </p>

          <p className="xs-mt-12 md-mt-18">
            <b>Duration for Apostille:</b> 2 Working Days
          </p>

          <p className="xs-mt-12 md-mt-18">
            This will be without verification in which the ministry will put a
            seal stating that THE MINISTRY OF EXTERNAL AFFAIRS ARE NOT
            RESPONSIBLE FOR THE CONTENT.
          </p>

          <p className="xs-mt-12 md-mt-18">
            Procedure for certificate apostille: If you submit your original
            certificate with a photocopy of the passport we will first submit
            your document to HRD Department of Concerned State wherein it will
            be authenticated then Ministry of External Affairs will Apostille
            your document.
          </p>
          <p className="xs-mt-12 md-mt-18">
            <b>Duration for Apostille:</b> 10 to 15 Working Days
          </p>

          <p className="xs-mt-12 md-mt-18">
            France is one of the most developed countries in the European Union.
            Its history and rich cultural heritage makes it a widely popular
            tourist destination.
          </p>

          <p className="xs-mt-12 md-mt-18">
            Make your travel plans to France a lot more easy with apostilling of
            certificates and documents by the French embassy. Our helpful staff
            members will guide you about the apostilling process.
          </p>

          <p className="xs-mt-12 md-mt-18">
            Contact Goodway Attestation for apostille services by the French
            embassy. Get your educational, experience and medical certificates,
            and important documents apostilled by the Embassy of France, through
            our guidance at a nominal fee, in Bengaluru itself.
          </p>
        </div>
      </ApostillePageTemplate>
    </div>
  );
}

export default FranceApostille;
