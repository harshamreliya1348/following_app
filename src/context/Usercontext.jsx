import { createContext } from "react";

export const userdetail = createContext();
const Usercontext = (props) => {
  const userdetails = [
    {
      img: "https://d2j2uxe7jasn0r.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/IMG_8502-3_thumb.jpg",
      uname: "ms.jonty",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 20,
    },

    {
      img: "https://thumb.photo-ac.com/de/de9f22a44c65874c74c70af1cee1ff33_t.jpeg",
      uname: "misri",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 120,
    },
    {
      img: "https://thumb.photo-ac.com/15/157289eb8a913a09117492c8544cd5d8_w.jpeg",
      uname: "mansa",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 99,
    },

    {
      img: "https://img.magnific.com/premium-photo/smile-marketing-businessman-happy-coworking-office-corporate-agency-ready-excited-portrait-employee-working-desk-with-commitment-creativity-happiness-work_590464-107137.jpg?semt=ais_hybrid&w=740&q=80",
      uname: "myoni",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 12,
    },
    {
      img: "https://thumbs.dreamstime.com/b/motivated-african-american-male-employee-lost-thought-workplace-happy-motivated-african-american-businessman-glasses-look-178923393.jpg",
      uname: "nori",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 20,
    },

    {
      img: "https://thumbs.dreamstime.com/b/portrait-biracial-male-employee-glasses-posing-workplace-headshot-smiling-stand-forefront-look-camera-happy-confident-172667085.jpg",
      uname: "herri",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 120,
    },
    {
      img: "https://media.gettyimages.com/id/2211953029/photo/confident-professional-woman-standing-against-city-skyline-in-office.jpg?s=612x612&w=gi&k=20&c=Zw99nEdsS8pb8dpf9ExqUx1Rav33p67mw-b2TwNHeYg=",
      uname: "hans",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 99,
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPJN0E84K0BDHFVLiwMxAAKdzQ2aNkiOg2I1Evc7i2hTDETLdPQcV5_1i&s=10",
      uname: "kayio",
      details: "Lorem ipsum dolor sit amet consectetur.",
      followers: 12,
    },
  ];
  return (
    <div>
      <userdetail.Provider value={[userdetails]}>
        {props.children}
      </userdetail.Provider>
    </div>
  );
};

export default Usercontext;
