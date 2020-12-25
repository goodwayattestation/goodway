import React, { useEffect } from "react";
import NavigationBar from "../../../components/organisms/Navigation Bar/navigation-bar.js";
import ApostillePageTemplate from "../../../components/organisms/Apostille Page Template/Apostille-Page-Template.js";
import "./index.css";

function AustriaApostille(props) {
  useEffect(() => {
    document.title =
      "Austria Apostille Service in Bangalore - Austria Apostille Service Near Me";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Austria Certificate Apostille Attestation Service in Bangalore. Call:9148889666. MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille within 4 Days."
      );
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute(
        "content",
        "degree certificate apostille for austria, arriage certificate apostille for austria, austria mea apostille service, birth certificate apostille attestation for austria Legalisation for Austria , Apostille for documents from Austria , Austria Embassy Apostille"
      );
    document
      .querySelector('link[rel="canonical"]')
      .setAttribute(
        "href",
        "https://www.goodwayattestation.com/austria-apostille"
      );

    document.querySelector("#commonPageHeader").innerHTML =
      "Austria Apostille Service in Bangalore";
  }, []);

  return (
    <div className="routes-austria-apostille">
      <NavigationBar showTrackStatusBtn={true} />
      <ApostillePageTemplate headline="Apostille Service For Austria In Bengaluru">
        <div className="routes-austria-apostille_content">
          <p>
            <h2>Austria Apostille</h2>
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
        </div>
      </ApostillePageTemplate>
    </div>
  );
}

export default AustriaApostille;
