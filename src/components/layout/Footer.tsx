export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Brisa Digital — Todos los derechos reservados
    </footer>
  );
}