import ContactCSS from "../pages-style/Contact.module.css";

function Contacts() {
  return (
    <>
      <div className={ContactCSS.contactContainer}>
        <h2>What’s Next?</h2>
        <h1>Get In Touch</h1>
        <p>
          I am  actively looking for any new opportunities these days, my inbox
          is always open. Whether you have an opportunity, s question or just want to say hi,
          hope up and shoot me a message on my email, mobile or social accounts.
          I will be happy to be get your messages!
        </p>
        <button><a href="mailto:abbas.ali.khan2943@gmail.com">Say Hello</a></button>
      </div>
    </>
  );
}
export default Contacts;
