import BG from "../assets/ruang-kelas-set.jpg"
import MejaRusak from "../assets/meja-rusak.png"
import Kabel from "../assets/kabel.png"
import LantaiLicin from "../assets/lantai-licin.png"
import AnakLari from "../assets/anak-lari.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function KelasSet() {
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
      <section className="relative w-[480px] h-[768px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-[275px] ml-48 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MejaRusak")} width={135} src={MejaRusak} />
        </div>
        <div className="absolute mt-[214px] ml-80 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Kabel")} width={70} src={Kabel} />
        </div>
        <div className="absolute mt-[566px] ml-[165px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("AnakLari")} width={170} src={AnakLari} />
        </div>
        <div className="absolute mt-[665px] ml-[20px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("LantaiLicin")} width={150} src={LantaiLicin} />
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
          {modalContentId === "MejaRusak" &&
            <div>
              Materi Meja Rusak
            </div>
          }

          {modalContentId === "Kabel" &&
            <div>
              Materi Kabel Berantakan
            </div>
          }

          {modalContentId === "AnakLari" &&
            <div>
              Materi Anak Lari
            </div>
          }

          {modalContentId === "LantaiLicin" &&
            <div>
              Materi Lantai Licin
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default KelasSet