export type Customer = {
  title: string;
  img: string; // path from /public
};

const customers: Customer[] = [
  { title: "Client A", img: "/CustomerImages/Diago_Logo.png" },
  { title: "Client B", img: "/CustomerImages/Forwessun_Logo.png" },
  { title: "Client D", img: "/CustomerImages/Schenk_Logo.png" },
  { title: "Client E", img: "/CustomerImages/Tutela_Photopea.png" },
  { title: "Client F", img: "/CustomerImages/Suttons_Photopea_2.png" },
  { title: "Client G", img: "/CustomerImages/McQueens_Dairies_Logo.png" },
  { title: "Client H", img: "/CustomerImages/Honeywell_Logo.png" },
  { title: "Client I", img: "/CustomerImages/Sodexo_Photopea_3.png" },
  { title: "Client J", img: "/CustomerImages/THG_Photopea.png" },
  { title: "Client K", img: "/CustomerImages/Kalzip_BW_Logo.WEBP" },
  // add as many as you like
];

export default customers;
