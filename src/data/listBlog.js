import img_1 from "../asset/blog/1.jpg";
import img_2 from "../asset/blog/2.jpg";
import img_3 from "../asset/blog/3.jpg";
import img_4 from "../asset/blog/4.jpg";
import img_5 from "../asset/blog/5.jpg";
import img_6 from "../asset/blog/6.jpg";
import img_7 from "../asset/blog/7.jpg";
import img_8 from "../asset/blog/8.jpg";

const blogs = [
  {
    title: "How to take care of your fish",
    img: img_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
  {
    title: "How to take care of your fish",
    img: img_8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quaerat maxime saepe quasi unde nulla totam molestiae natus accusantium corporis vitae, rerum alias. Cumque quis aut sunt! Laboriosam, blanditiis?",
  },
];

const getAllBlog = () => blogs;
const getBlogs = (count) => {
  const max = blogs.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return blogs.slice(start, start + count);
};

const blogData = {
  getBlogs,
  getAllBlog,
};

export default blogData;
