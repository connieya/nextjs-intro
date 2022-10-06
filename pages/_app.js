import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hi~~</span>
      <style jsx global>{`
        a {
          color: green;
        }
      `}</style>
    </div>
  );
}
