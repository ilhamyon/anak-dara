import BG from "../assets/bg-dapur.jpg"
import Kompor from "../assets/kompor.png"
import AirHangat from "../assets/air-hangat.png"
import TempatSampah from "../assets/tempat-sampah.png"
import MakananKemasan from "../assets/makanan-kemasan.png"
import Pisau from "../assets/pisau.png"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function DapurSet() {
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
      <section className="relative w-[390px] h-[768px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
        <div className="absolute mt-[160px] ml-10 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Kompor")} src={Kompor} />
        </div>
        <div className="absolute mt-[134px] ml-60 cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("AirHangat")} src={AirHangat} />
        </div>
        <div className="absolute mt-[266px] ml-[5px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("TempatSampah")} src={TempatSampah} />
        </div>
        <div className="absolute mt-[545px] ml-[238px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("MakananKemasan")} src={MakananKemasan} />
        </div>
        <div className="absolute mt-[540px] opacity-80 ml-[110px] cursor-pointer hover:drop-shadow-3xl">
          <img onClick={() => handleOpenModal("Pisau")} src={Pisau} />
        </div>
        <div className="absolute bottom-0 right-0 mr-4 hover:drop-shadow-4xl">
          <Link to="/ruang-keluarga">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512"><path fill="currentColor" d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v72c0 9.6-5.7 18.2-14.5 22"/></svg>
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
          {modalContentId === "Kompor" &&
            <div>
              Materi Kompor
            </div>
          }

          {modalContentId === "AirHangat" &&
            <div>
              Materi Air Hangat
            </div>
          }

          {modalContentId === "MakananKemasan" &&
            <div>
              Materi Makanan Kemasan
            </div>
          }

          {modalContentId === "TempatSampah" &&
            <div>
              Materi Tempat Sampah
            </div>
          }

          {modalContentId === "Pisau" &&
            <div>
              Materi Pisau
            </div>
          }
        </div>
      </Modal>
    </div>
  )
}

export default DapurSet