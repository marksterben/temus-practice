import styles from "../styles/components/Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>CONTACT US</p>
        <p className={styles.big}>WE{`'`}RE READY TO UNLOCK VALUE FOR YOU</p>
        <p>
          80 Pasir Panjang Road, #22-81, <br />
          Mapletree Business City, Singapore 117372
        </p>
        <p>contactus@temus.com</p>
      </div>
      <div>
        <form>
          <label htmlFor="fname">FISRT NAME</label>
          <input type="text" id="fname" />

          <label htmlFor="lname">LAST NAME</label>
          <input type="text" id="lname" />

          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" />

          <label htmlFor="subject">SUBJECT</label>
          <input type="text" id="SUBJECT" />

          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" style={{ height: "200px" }}></textarea>

          <button type="button">GET IN TOUCH</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
