import { Box, Card } from "@mui/material";
import Link from "next/link";
import Meta from "../../components/Meta";

const LegalNotice = () => {
  return (
    <>
      <Meta
        title="Legal Notice"
        description="The TMG requires German websites to give information about the publisher of a website."
      />
      <Card>
        <Box px={3}>
          <h1>Impressum</h1>
          <h4>
            The TMG requires German websites to give information about the
            publisher of a website. Further information:{" "}
            <Link href="https://www.gesetze-im-internet.de/tmg/__5.html">
              https://www.gesetze-im-internet.de/tmg/__5.html
            </Link>
          </h4>
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
    </>
  );
};

export default LegalNotice;
