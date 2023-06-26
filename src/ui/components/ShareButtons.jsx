import { LinkedinShareButton, TwitterShareButton, FacebookShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';
import icmail from "../../assets/icemail.svg"
import icfacebook from "../../assets/icfacebook.svg"
import iclinkedin from "../../assets/iclinkedin.svg"
import ictwitter from "../../assets/ictwitter.svg"
import icwhatsapp from "../../assets/icwhatsapp.svg"
import clipboard from "../../assets/clipboard.png"
import cerrar from "../../assets/cerrar.png"
export const ShareButtons = ({ url, title, handleClick }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div onClick={handleClick} className="fixed z-10 inset-0 flex items-center justify-center bg-terciary bg-opacity-50 ">

      <div onClick={e => e.stopPropagation()} className="bg-white p-5 h-36 w-screen rounded-xxl shadow-lg">
        <div className='mb-4 flex justify-between items-center'>
        <p className="text-xs font-bold text-darkBlue">
            Compartir en RRSS
          </p>
         
          <p onClick={handleClick}> <img src={cerrar} alt="" srcset="" style={{ width: "20px", height: "20px" }}/></p>
        </div>
        <div  className='flex justify-between items-center'>

        <FacebookShareButton url={url} quote={title}>
            <img src={icfacebook} alt="" srcset="" style={{ width: "50px", height: "50px" }}/>
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <img src={ictwitter} alt="" srcset="" style={{ width: "50px", height: "50px" }}/>
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
            <img src={icwhatsapp} alt="" srcset="" style={{ width: "50px", height: "50px" }}/>
          </WhatsappShareButton>

          <LinkedinShareButton url={url} title={title}>
            <img src={iclinkedin} alt="" srcset="" style={{ width: "50px", height: "50px" }}/>
          </LinkedinShareButton>    

          <EmailShareButton url={url} subject={title} body="¡Entra a este enlace!">
            <img src={icmail} alt="" srcset=""  style={{ width: "50px", height: "50px" }}/>
          </EmailShareButton>

          <button onClick={copyToClipboard}>
          <img src={clipboard} alt="" srcset="" style={{ width: "50px", height: "50px" }}/>
          </button>
        </div>
      </div>
    </div>
  );
};


