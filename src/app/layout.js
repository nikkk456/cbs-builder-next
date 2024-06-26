import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: "CBS Builder",
  description: "Generated by create next app",
};

export default function RootLayout({ children, herosection, about, location, highlight, price, amenities, floorplan, footer, gallery, footerend, callbutton }) {
  return (
    <html lang="en">
      <body >
        {children}
        {herosection}
        {about}
        {location}
        {highlight}
        {price}
        {amenities}
        {floorplan}
        {gallery}
        {footer}
        {footerend}
        {callbutton}
      </body>
    </html>
  );
}
