import BG from "../assets/bg-wc.jpg"
import LantaiBasah from "../assets/lantai-basah.png"
import MesinCuci from "../assets/mesin-cuci.png"
import SabunLantai from "../assets/sabun-lantai.png"
import Botol from "../assets/botol.png"
import LantaiRusak from "../assets/lantai-rusak.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function WcSet() {
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
      <section className="relative w-[480px] h-[790px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-80 ml-44 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("LantaiBasah")} src={LantaiBasah} />
        </div>
        <div className="absolute mt-[560px] ml-4 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MesinCuci")} src={MesinCuci} />
        </div>
        <div className="absolute mt-[465px] ml-[200px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("SabunLantai")} src={SabunLantai} />
        </div>
        <div className="absolute mt-[513px] ml-[340px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Botol")} src={Botol} />
        </div>
        <div className="absolute mt-[735px] opacity-80 ml-[265px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("LantaiRusak")} src={LantaiRusak} />
        </div>
        <div className="absolute bottom-2 right-2 hover:drop-shadow-4xl">
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
          {modalContentId === "LantaiBasah" &&
            <div>
              Materi Lantai Basah
            </div>
          }

          {modalContentId === "MesinCuci" &&
            <div>
              Materi Mesin Cuci
            </div>
          }

          {modalContentId === "Botol" &&
            <div>
              Materi Botol
            </div>
          }

          {modalContentId === "SabunLantai" &&
            <div>
              Materi Sabun Lantai
            </div>
          }

          {modalContentId === "LantaiRusak" &&
            <div>
              Materi Lantai Rusak
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default WcSet