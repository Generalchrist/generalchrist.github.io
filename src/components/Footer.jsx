import styles from "../style"
import { logo } from "../assets/images"
import { footerLinks } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* <img src={logo} alt="mert patlar logo" className="w-[64px] h-[64px] object-contain" /> */}
        <p className={`${styles.paragraph} text-[13px] mt-4 max-w-[470px] `}>Thank you for visiting my website! If you have any questions
          or would like to collaborate on a project, please don't hesitate
          to reach out to me. You can find my contact information in the
          socials section above. Have a great day!</p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <a key={link.name} href={link.link}>
                  <li className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary
                                cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                  >
                    {link.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  </section>
)

export default Footer