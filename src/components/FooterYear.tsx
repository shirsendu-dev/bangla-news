import { connection } from "next/server";

const FooterYear = async () => {
    await connection();

    const year = new Date().getFullYear();

    return (
        <p>
            © {year} Bangla News Bulletin
        </p>
    );
};

export default FooterYear;