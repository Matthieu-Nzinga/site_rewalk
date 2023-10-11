import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dvh6uj9l2",
  },
});

export const logo = cld.image("rewalk/logo");
logo.resize(fill().width(60).height(60));
