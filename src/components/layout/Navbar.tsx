import { site } from "src/content/site";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 max-w-6xl mx-auto">
      <h1 className="font-bold text-xl">TuMarca.dev</h1>
      <h1>{site.name}</h1>
      <div className="space-x-6">
        <a href="/">Inicio</a>
        <a href="/services">Servicios</a>
        <a href="/contact">Contacto</a>
      </div>
    </nav>
  );
}