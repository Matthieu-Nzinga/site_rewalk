import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dvh6uj9l2",
  },
});

export const logo = cld.image("rewalk/logo");
logo.resize(fill().width(60).height(60));

export const one = cld.image("rewalk/apres/carrousel1");
export const two = cld.image("rewalk/apres/carrousel2");
export const theer = cld.image("rewalk/apres/carrousel3");
export const slide3 = cld.image("rewalk/slide3");
export const slider2 = cld.image("rewalk/slider2");
export const slide4 = cld.image("rewalk/slide4");
export const slide1 = cld.image("rewalk/slide1");

export const myImage = cld.image("rewalk/slider2");
export const arrieurPlan = cld.image("rewalk/arrieurPlan-2");

export const nonProjet = cld.image("rewalk/nonProjet");
export const nonProjet1 = cld.image("rewalk/nonProjet1");

export const nzingaImage = cld.image("rewalk/nzingaImage");


