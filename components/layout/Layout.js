import Footer from "./Footer";
import TopNav from "./TopNav";

function Layout({ children }) {
  return (
    <div className="">
      <TopNav />
      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
