import map from "../../asset/images/spurthiMap.png";
import computer from "../../asset/images/computer.jpg";

export const carousels = [
  {
    id: 1,
    title: "Our Quality Philosophy",
    text: `The overlay CSS property specifies whether an element appearing in the top layer is actually rendered in the top
        layer. This property is only relevant within a list of transition-property values, and only if allow-discrete.`,
    image: computer,
    hasButton: true,
    buttonLabel: "Know More",
  },
  {
    id: 2,
    title: "Our Manufaturing Location",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: map,
    hasButton: true,
    buttonLabel: "Explore",
  },
  {
    id: 2,
    title: "Our Lorem Ipsum",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    image: computer,
    hasButton: false,
    buttonLabel: "More",
  },
];
