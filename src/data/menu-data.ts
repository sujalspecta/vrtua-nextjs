import home_demo_1 from "@/assets/img/banner/home1-vr.png";
import { StaticImageData } from "next/image";

interface MenuType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  img_dropdown?: boolean;
  sub_menus?: {
      link: string;
      title: string;
      demo_img?: StaticImageData;
  } [];
}

// menu data
const menu_data:MenuType[] = [
	{
		id: 1,
		title: "Home",
		link: "#",
		has_dropdown: false,
		img_dropdown: true,
		sub_menus: [
      { link: "/", title: "Main Home", demo_img: home_demo_1 }
    ],
	},
	{
		id: 2,
		title: "About Us",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Services",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service", title: "Services" },
			{ link: "/service-details", title: "Services Details" },
		],
	},
	{
		id: 4,
		title: "Pages",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/team", title: "Team" },
			{ link: "/pricing", title: "Pricing" },
			{ link: "/faqs", title: "Faq" },
			{ link: "/contact", title: "Contact Us" },
		],
	},
	{
		id: 5,
		title: "Blog",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Blog" },
			{ link: "/blog-details", title: "Blog Details" },
		],
	},
	{
		id: 6,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
