import { Box, Card } from "@mui/material";

const LegalNotice = () => {
  return (
    <Card>
      <Box px={3}>
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <div>
          <p>Daniel Schuster</p>
          <p>Felix-Fechenbach-Bogen 49</p>
          <p>80797 München</p>
          <p>Deutschland</p>
        </div>
        <h2>Kontakt</h2>
        <div>
          <p>Telefon: +49 160 1241748</p>
          <p>E-Mail: daniel.a.schuster@t-online.de</p>
        </div>
      </Box>
    </Card>
  );
};

export default LegalNotice;
