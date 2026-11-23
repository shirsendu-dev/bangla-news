import Link from "next/link";

export interface NavItem {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {
    const response = await fetch(
        "https://news-api-v2.vercel.app/api/categories"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch navigation categories");
    }

    const data = await response.json();

    const navLinks: NavItem[] = data.data;

    const filteredNavLinks = navLinks.filter(
        (navLink) => navLink.scrapable
    );

    return (
        <nav className="border-t border-gray-200">
            <div
                className="
          flex items-center gap-6
          overflow-x-auto whitespace-nowrap
          py-4
          text-[16px]
          sm:gap-8 sm:text-[17px]
          lg:justify-center lg:gap-10 lg:text-[18px] md:justify-center
        "
            >
                <Link
                    href="/"
                    className="shrink-0 transition-colors hover:text-red-700"
                >
                    হোম
                </Link>

                {filteredNavLinks.map((navLink) => (
                    <Link
                        key={navLink.slug}
                        href={`/category/${navLink.slug}`}
                        className="shrink-0 transition-colors hover:text-red-700"
                    >
                        {navLink.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavLinks;