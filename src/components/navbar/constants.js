import { pageRoutes } from "@/routes/routes";

export const spurtiIndustriesNavbars = [
  {
    id: 1,
    path: pageRoutes.home,
    label: "Home",
    isActive: true,
  },
  {
    id: 2,
    path: pageRoutes.aboutus,
    label: "About Us",
    isActive: false,
  },
  {
    id: 3,
    path: pageRoutes.products,
    label: "Products",
    isActive: false,
  },
  {
    id: 4,
    path: pageRoutes.contactus,
    label: "Contact Us",
    isActive: false,
  },
];
