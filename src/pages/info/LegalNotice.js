import React from "react";
import Card from "../../components/ui/Card";

const LegalNotice = () => {
  return (
    <Card>
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <div>
        <p>Max Mustermann</p>
        <p>Musterstraße 1</p>
        <p>11111 Musterstadt</p>
      </div>
      <h2>Kontakt</h2>
      <div>
        <p>Telefon: +49 123 123456</p>
        <p>E-Mail: max@mustermann.de</p>
      </div>
    </Card>
  );
};

export default LegalNotice;
