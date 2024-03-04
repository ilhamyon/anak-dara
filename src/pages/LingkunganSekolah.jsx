import BG from "../assets/bg-sekolah-set.jpg"
import Tangga from "../assets/tangga-sekolah.png"
import ZebraCross from "../assets/zebra-cross.png"
import MainBola from "../assets/main-bola.png"
import Sepeda from "../assets/sepeda.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function LingkunganSekolah() {
  const [visible, setVisible] = useState(false);
  const [modalContentId, setModalContentId] = useState(null);

  const handleOpenModal = (id) => {
    setModalContentId(id);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setModalContentId(null); // Reset modal content id when modal is closed
  };
  return (
    <div className="my-0 mx-auto min-h-full w-full flex justify-center max-w-screen-sm" style={{maxWidth: "480px"}}>
      <section className="relative w-[480px] h-[728px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-[155px] ml-[167px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Tangga")} width={80} src={Tangga} />
        </div>
        <div className="absolute mt-[268px] ml-[290px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("ZebraCross")} width={80} src={ZebraCross} />
        </div>
        <div className="absolute mt-[436px] ml-[225px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MainBola")} width={110} src={MainBola} />
        </div>
        <div className="absolute mt-[440px] ml-[90px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Sepeda")} width={95} src={Sepeda} />
        </div>
        <div className="absolute bottom-2 right-0 mr-4 hover:drop-shadow-4xl">
          <Link to="/beranda">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 36 36"><path fill="currentColor" d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19" className="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          </Link>
        </div>
      </section>
      <Modal
        title=""
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Tutup
          </Button>
        ]}
      >
        <div className="mt-6">
          {modalContentId === "Tangga" &&
            <div>
              Materi Tangga
            </div>
          }

          {modalContentId === "ZebraCross" &&
            <div>
              Materi Zebra Cross
            </div>
          }

          {modalContentId === "MainBola" &&
            <div>
              Materi Main Bola
            </div>
          }

          {modalContentId === "Sepeda" &&
            <div>
              Materi Sepeda
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default LingkunganSekolah