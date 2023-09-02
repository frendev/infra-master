import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="relative mt-28 flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}
