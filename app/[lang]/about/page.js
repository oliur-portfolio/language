import Blog from "../components/Blog";
import { getDictionary } from "@/get-dictionary";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default async function Home({ params: { lang } }) {
    const { products, blogCards } = await getDictionary(lang);

    return (
        <div className="max-w-7xl mx-auto">
            <LocaleSwitcher />
            <p>Current locale about: {lang}</p>

            <h1 className="text-3xl font-bold mt-10 text-center">
                about {products.cart}
            </h1>

            <div className="grid grid-cols-3 gap-10 mt-12">
                {blogCards.map((item, i) => (
                    <Blog blog={item} key={i} />
                ))}
            </div>
        </div>
    );
}
