import { useRef } from "react";
import styles  from './styles.module.css'

// leaving these here you know you can tweak stuff further
const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: "rgba(0,0,0,0)",
  removeContainer: true,
};

export function CardImg() {
  const cardRef = useRef<HTMLElement>(null);

  const prepareURL = async () => {
    const cardElement = cardRef.current;

    if (!cardElement) return;

    try {
      // lazy load this package
      const html2canvas = await import(
        /* webpackPrefetch: true */ "html2canvas"
      );

      const result = await html2canvas.default(cardElement, options);

      const asURL = result.toDataURL("image/jpeg");
      // as far as I know this is a quick and dirty solution
      const anchor = document.createElement("a");
      anchor.href = asURL;
      anchor.download = "your-card.jpeg";
      anchor.click();
      anchor.remove();
     // maybe this part should set state with `setURLData(asURL)`
     // and when that's set to something you show the download button 
     // which has `href=URLData`, so that people can click on it
    } catch (reason) {
      console.log(reason);
    }
  };

  return (
    <div>
      <button onClick={prepareURL}>Download</button>

      <article className={ styles.container } ref={cardRef}>
        <h2>Mew</h2>

        <p># 151</p>
        {/* had to add `images: { domains: ["raw.githubusercontent.com"], }` to my next.config.js */}
      </article>
    </div>
  );
}