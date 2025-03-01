import LogoIcon from "@/components/ui/logo-icon";
import Container from "../container";

const Footer = () => {
  return (
    <footer>
      <div className="bg-zinc-800 py-4">
        <Container>
          <div>
            <div>
              <LogoIcon />
            </div>
            <div>
              <p>© 2023. Все права защищены</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
