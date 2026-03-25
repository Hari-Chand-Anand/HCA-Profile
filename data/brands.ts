export type IconName = "globe" | "instagram" | "facebook" | "linkedin";

export type Platform = {
  name: string;
  url: string;
  icon: IconName;
};

export type Brand = {
  id: string;
  name: string;
  logoUrl: string;
  platforms: Platform[];
};

export const brands: Brand[] = [
  {
    id: "hca",
    name: "Hari Chand Anand & Co.",
    logoUrl: "https://www.grouphca.com/cdn/shop/files/logo_1_280x.png?v=1722238275",
    platforms: [
      { name: "Website", url: "https://www.grouphca.com/", icon: "globe" },
      { name: "Instagram", url: "https://www.instagram.com/hca.co/", icon: "instagram" },
      { name: "Facebook", url: "https://www.facebook.com/DukeSewingMachines", icon: "facebook" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/hcaco/posts/?feedView=all",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "duke",
    name: "Duke",
    logoUrl: "https://dukesewing.com/wp-content/uploads/2024/01/duke-106x31.png",
    platforms: [
      { name: "Website", url: "https://dukesewing.com/", icon: "globe" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/duke_sewing_machine/",
        icon: "instagram",
      },
      { name: "Facebook", url: "https://www.facebook.com/DukeSewingMachine/", icon: "facebook" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/duke-garment-machinery/?viewAsMember=true",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "dukejia",
    name: "Dukejia",
    logoUrl: "https://dukejia.com/images/dukejia.png",
    platforms: [
      { name: "Website", url: "https://dukejia.com/", icon: "globe" },
      { name: "Instagram", url: "https://www.instagram.com/dukejia_/", icon: "instagram" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61584332922013",
        icon: "facebook",
      },
      { name: "LinkedIn", url: "#", icon: "linkedin" },
    ],
  },
];