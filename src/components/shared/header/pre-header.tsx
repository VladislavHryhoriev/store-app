import { LINKS } from "@/constants/header/links";
import { Link } from "@/i18n/routing";
import { pagesConfig } from "@/pages.config";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Container from "../container";

export const PreHeader = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between py-2">
          <div>
            <Link href={pagesConfig.home}>
              <h1>My Store</h1>
            </Link>
          </div>
          <div className="flex gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-sky-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTelegramPlane />
              </a>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-fit">
                  <SelectValue placeholder="RU" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ru">RU</SelectItem>
                  <SelectItem value="ua">UA</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
