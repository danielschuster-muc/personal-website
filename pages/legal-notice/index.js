import { Box, Card, Typography } from "@mui/material";
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
          <Typography variant="h4">Impressum</Typography>
          <Typography variant="subtitle1">
            The TMG requires German websites to give information about the
            publisher of a website. Further information:{" "}
            <Link href="https://www.gesetze-im-internet.de/tmg/__5.html">
              https://www.gesetze-im-internet.de/tmg/__5.html
            </Link>
          </Typography>

          <Typography variant="h5">Angaben gemäß § 5 TMG</Typography>
          <div>
            <Typography variant="body1">Daniel Schuster</Typography>
            <Typography variant="body1">Felix-Fechenbach-Bogen 49</Typography>
            <Typography variant="body1">80797 München</Typography>
            <Typography variant="body1">Deutschland</Typography>
          </div>
          <Typography variant="h5">Kontakt</Typography>
          <div>
            <Typography variant="body1">Telefon: +49 160 1241748</Typography>
            <Typography variant="body1">
              E-Mail: daniel.a.schuster@t-online.de
            </Typography>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default LegalNotice;
