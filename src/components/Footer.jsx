import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="c-200 body-font">
        <div className="md:lg:px-5 py-24 mx-auto flex md:items-center w-11/12 lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-fit flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <p className="text-6xl font-medium c-200">Srivardhan</p>
            <p className="mt-2 text-sm c-100 font-medium pl-1">
              Always curious to learn new things...
            </p>
          </div>
          <div className="flex-grow flex justify-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold c-200 tracking-widest text-sm mb-3 uppercase">
                Social
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    className="c-400"
                    to="https://linkedin.com/in/srivardhan-vuthuru"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    className="c-400"
                    to="https://twitter.com/srivardhan_24_"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    className="c-400"
                    to="https://www.instagram.com/srivardhan24_"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold c-200 tracking-widest text-sm mb-3 uppercase">
                codes
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    className="c-400"
                    to="https://codepen.io/Vuthuru-Srivardhan"
                    target="_blank"
                  >
                    CodePen
                  </Link>
                </li>
                <li>
                  <Link
                    className="c-400"
                    to="https://github.com/Srivardhan12"
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
              </nav>
            </div>
            <div>
              <h2 className="font-bold c-200 tracking-widest text-sm mb-3 uppercase">
                Contact
              </h2>
              <span className="c-400">vuthurusrivardhan@gmail.com</span>
              {/* <form ref={form} onSubmit={sendEmail}>
                            <textarea name="message" placeholder='message' className='textarea' onChange={((e) => { setMessage(e.target.value); setStatus("send") })} /><br />
                            <input type="text" name="user_name" placeholder='name' className='email-username' onChange={((e) => { setEmail(e.target.value); setStatus("send") })} />
                            <input type="email" name="user_email" placeholder='mail@gmail.com' className='email-useremail' onChange={((e) => { setName(e.target.value); setStatus("send") })} /><br />
                            <button type="submit" value="Send" className='btn c-200 uppercase font-semibold'>{status}</button>
                        </form> */}
            </div>
          </div>
        </div>
        <div className="c-200 bg-opacity-75">
          <div className="container mx-auto py-4 px-5">
            <p
              className="c-200 text-xs font-medium sm:text-left uppercase"
              style={{ textAlign: "center" }}
            >
              Designed and Developed by srivardhan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
