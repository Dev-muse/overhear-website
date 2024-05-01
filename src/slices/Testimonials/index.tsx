import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Reviews } from './Reviews'
/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Reviews slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default Testimonials;
