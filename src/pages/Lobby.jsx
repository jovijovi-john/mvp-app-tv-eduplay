import { RiHourglassFill, RiPlayCircleFill } from "react-icons/ri"
import LogoEduplay from "../assets/logo_eduplay.png"
import { FaUser } from "react-icons/fa6"
import { useEffect, useState } from "react";
import { socket } from "../services/socket";
import { useNavigate } from "react-router-dom";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pin = String(getRandomInt(1000, 9999));

// const pin = "1234";
localStorage.setItem("pin", pin);

export default function Lobby() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate("");

  useEffect(() => {

    socket.emit("create-room", {
      pin,
    })

    socket.on("send-users-room", (data) => {
      const usersArray = Object.values(data.users);
      console.log(data)
      setUsers(usersArray);
    });

    socket.on("disconnection", (data) => {
      const usersArray = Object.values(data.users);
      setUsers(usersArray);
    });

    return () => {
      socket.off("send-users-room");
      socket.off("disconnection");
    };
  }, [])

  function handleStartQuiz() {
    socket.emit("start-quiz", {
      pin
    })

    navigate("/Cenario3", {
      state: {
        pin
      }
    })
  }

  return (
    <div className="flex flex-col h-full w-full ">
      <header className="p-4 bg-white grid grid-cols-3">
        <img src={LogoEduplay} alt="" />

        <div className="grid place-items-center font-bold text-5xl text-sky-600">PIN {pin}</div>

        <div className="flex h-full w-full items-center justify-end">
          <div className="rounded-full w-20 h-20 bg-sky-500 text-white text-4xl font-bold grid place-items-center">{users.length}</div>
        </div>
      </header>

      <main className="bg-sky-500 h-full w-full p-12 flex flex-col gap-y-8">

        <header>
          <RiHourglassFill size={96} color="white" className="mx-auto" />
          <span className="text-2xl font-semibold text-white">
            Aguardando jogadores...
          </span>
        </header>

        <main className="flex flex-col  h-full">
          <div className="flex gap-8 flex-wrap justify-center">
            {users.map((user) => (
              <div className="flex gap-x-4 items-center bg-white p-4 rounded-2xl min-w-56" key={user.nickname}>
                <div className="bg-sky-500 rounded-full p-4">
                  <FaUser size={36} color="white" />
                </div>
                <span className="font-medium text-2xl text-sky-600">{user.nickname}</span>
              </div>
            ))}
          </div>

          <button onClick={handleStartQuiz} type="button" className="flex mx-auto mt-auto items-center justify-between rounded-xl p-3 gap-x-2 bg-white hover:bg-zinc-100">
            <RiPlayCircleFill size={48} className="text-sky-600" />

            <span className=" text-sky-600 text-2xl font-medium ">INICIAR</span>
          </button>
        </main>
      </main>

      <footer className="h-12 w-full bg-white"></footer>
    </div>
  )
}
