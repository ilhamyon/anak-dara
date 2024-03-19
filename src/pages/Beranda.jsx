import BG from "../assets/bg-home.jpg"
import Apel from "../assets/apel.png"
import Bola from "../assets/bola.png"
import Tas from "../assets/tanda-tas.png"
import Boneka from "../assets/boneka.png"
import Nyebrang from "../assets/nyebrang.png"
import Sepeda from "../assets/tanda-sepeda.png"
import Toilet from "../assets/tanda-toilet.png"
import OrangLuka from "../assets/orang-luka.png"
import Buku from "../assets/buku.png"
import Lampu from "../assets/lampu.png"
import WA from "../assets/konsultasi.png"
import VideoJenisCedera from "../assets/Jenis Cedera.mp4"
import VideoCaraMenyebrang from "../assets/Cara menyebrang.mp4"
import VideoPencegahanCedera from "../assets/Pencegahan Cedera.mp4"
import VideoPertolonganLukaBakar from "../assets/Pertolongan Luka Bakar.mp4"
import VideoPertolonganLukaLecet from "../assets/pertolongan pertama luka lecet dirumah.mp4"
import VideoSepeda from "../assets/Video sepeda.mp4"
import { useState } from "react"
import { Button, Modal } from "antd"
import { Link } from "react-router-dom"

function Beranda() {
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
    <>
        <div className="my-0 mx-auto min-h-full w-full flex items-center justify-center max-w-screen-sm" style={{maxWidth: "480px"}}>
            <section className="relative w-[480px] h-[290px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
                <div className="absolute mt-[155px] ml-2 cursor-pointer hover:drop-shadow-3xl">
                    <Link to="/ruang-kelas">
                        <img width={65} src={Tas} />
                    </Link>
                </div>
                <div className="absolute mt-[164px] ml-[310px] cursor-pointer hover:drop-shadow-3xl">
                    <img onClick={() => handleOpenModal("JenisCedera")} width={30} src={Lampu} />
                </div>
                <div className="absolute mt-[110px] ml-[325px] cursor-pointer hover:drop-shadow-3xl">
                    <img onClick={() => handleOpenModal("CaraNyebrang")} width={30} src={Nyebrang} />
                </div>
                <div className="absolute mt-[114px] ml-[285px] cursor-pointer hover:drop-shadow-3xl">
                    <img onClick={() => handleOpenModal("Sepeda")} width={35} src={Sepeda} />
                </div>
                <div className="absolute mt-[159px] opacity-80 ml-[165px] cursor-pointer hover:drop-shadow-3xl">
                    <img onClick={() => handleOpenModal("PerawatanLuka")} width={32} src={OrangLuka} />
                </div>
                <div className="absolute mt-[163px] ml-[78px] cursor-pointer hover:drop-shadow-3xl">
                    <Link to="/dapur">
                        <img width={22} src={Apel} />
                    </Link>
                </div>
                <div className="absolute mt-[63px] ml-[60px] cursor-pointer hover:drop-shadow-3xl">
                    <Link to="/ruang-keluarga">
                        <img width={30} src={Boneka} />
                    </Link>
                </div>
                <div className="absolute mt-[80px] ml-[32px] cursor-pointer hover:drop-shadow-3xl">
                    <Link to="/lingkungan-sekolah">
                        <img width={25} src={Bola} />
                    </Link>
                </div>
                <div className="absolute mt-[80px] ml-[3px] cursor-pointer hover:drop-shadow-3xl">
                    <Link to="/kamar-mandi">
                        <img width={25} src={Toilet} />
                    </Link>
                </div>
                <div className="absolute mt-[115px] ml-[53px] cursor-pointer hover:drop-shadow-3xl">
                    <img onClick={() => handleOpenModal("MateriPencegahanLuka")} width={25} src={Buku} />
                </div>
                <div className="absolute mt-[229px] opacity-80 ml-[309px] cursor-pointer hover:drop-shadow-3xl">
                    <a href="https://wa.me/6281217104559?text=Halo%20Ners%2C%20Saya%20ingin%20konsultasi!" target="_blank">
                        <img width={42} src={WA} />
                    </a>
                </div>
            </section>
        </div>
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
                {modalContentId === "MateriPencegahanLuka" &&
                    <div>
                        <div className="flex justify-center px-4">
                            <video width="100%" height="auto" controls>
                                <source src={VideoPencegahanCedera} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                }

                {modalContentId === "PerawatanLuka" &&
                    <div>
                        <div className="flex flex-col justify-center px-4">
                            <video width="100%" height="auto" controls>
                                <source src={VideoPertolonganLukaLecet} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h3 className="text-xl font-bold mb-10">Perawatan Luka Lecet</h3>

                            <video width="100%" height="auto" controls>
                                <source src={VideoPertolonganLukaBakar} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h3 className="text-xl font-bold">Perawatan Luka Bakar</h3>
                        </div>
                    </div>
                }

                {modalContentId === "Sepeda" &&
                    <div>
                        <div className="flex justify-center px-4">
                            <video width="100%" height="auto" controls>
                                <source src={VideoSepeda} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                }

                {modalContentId === "CaraNyebrang" &&
                    <div>
                        <div className="flex justify-center px-4">
                            <video width="100%" height="auto" controls>
                                <source src={VideoCaraMenyebrang} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                }

                {modalContentId === "JenisCedera" &&
                    <div>
                        <div className="flex justify-center px-4">
                            <video width="100%" height="auto" controls>
                                <source src={VideoJenisCedera} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                }
            </div>
        </Modal>
    </>
  )
}

export default Beranda