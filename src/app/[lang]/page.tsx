"use client";
import { observer } from "mobx-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDictionary } from "../../../src/i18n/dictionaryContext";
import { i18n } from "../../../src/i18n/i18n.config";
import { Path } from "../../types/path.enum";
import appViewModel from "./app.viewmodel";

const Home = () => {
  const dictionary = useDictionary();
  const { lang } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!appViewModel.isPassLogin) {
      router.push(Path.Login);
    }
  }, []);

  if (!appViewModel.isPassLogin) return;

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
