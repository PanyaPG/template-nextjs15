"use client";
import { observer } from "mobx-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDictionary } from "../../../i18n/dictionaryContext";
import { i18n } from "../../../i18n/i18n.config";

const Home = () => {
  const dictionary = useDictionary();
  const { lang } = useParams();

  return (
    <div>
      <h1>Index page</h1>
      <p>Current locale: {lang}</p>
      <p>Default locale: {i18n.defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(lang)}</p>
      <p>Configured dict: {dictionary?.products?.cart}</p>

      <Link href="/gsp">To getStaticProps page</Link>
      <br />

      <Link href="/gsp/first">To dynamic getStaticProps page</Link>
      <br />

      <Link href="/gssp">To getServerSideProps page</Link>
      <br />
    </div>
  );
};

export default observer(Home);
