import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddPokemon() {
  return (
    <div>
      <Header />
      <div className="flex flex-row h-[100%] mx-20 my-10 gap-20 p-10">
        <div className="h-52 w-72">
          <Image
            width={200}
            height={200}
            className="rounded-lg"
            src="/frame 1.png"
            alt="user-profile-img"
          />
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col gap-2 rounded-lg p-10 shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)]">
            <span className="text-2xl font-semibold text-red-600">
              Informasi Umum
            </span>
            <div className="flex flex-col gap-2">
              <span>Nomor</span>
              <span className="font-semibold">#1</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Nama</span>
              <span className="font-semibold">Nama</span>
            </div>
            <form action="" className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <label>Types</label>
                <div className="flex flex-row border-[1px] border-slate-200 h-14 justify-between">
                  <input
                    name="types"
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs outline-none border-none focus:outline-none"
                  />
                  <details className="dropdown mb-32">
                    <summary className="m-1 btn">
                      <BsChevronDown />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[32em] right-[30em]">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label>Types</label>
                <div className="flex flex-row border-[1px] border-slate-200 h-14 justify-between">
                  <input
                    name="types"
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs outline-none border-none focus:outline-none"
                  />
                  <details className="dropdown mb-32">
                    <summary className="m-1 btn">
                      <BsChevronDown />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[32em] right-0">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label>Types</label>
                <div className="flex flex-row border-[1px] border-slate-200 h-14 justify-between">
                  <input
                    name="types"
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs outline-none border-none focus:outline-none"
                  />
                  <details className="dropdown mb-32">
                    <summary className="m-1 btn">
                      <BsChevronDown />
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[32em] right-0">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-2 rounded-lg py-5 px-10 shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] w-full">
            <span>Evolution</span>
            <div
              className="btn bg-red-600 text-white hover:bg-red-700"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <AiOutlinePlus size={20} color="#fff" />
              <span>Tambah</span>
            </div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="modal-action m-0">
                  <form method="dialog">
                    <button className="btn">X</button>
                  </form>
                </div>

                {/* Add Evolution */}
                <div className="form-control gap-10 mt-5">
                  <label className="label cursor-pointer flex flex-row items-center gap-2 shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] rounded-sm px-5">
                    <Image
                      width={90}
                      height={90}
                      className="rounded-lg"
                      src="/frame 1.png"
                      alt="user-profile-img"
                    />
                    <div>
                      <div className="text-sm">#1</div>
                      <div className="text-red-600 font-semibold">
                        Bulbasaur
                      </div>
                      <div className="flex flex-row gap-5">
                        <div className="h-8 flex items-center rounded-sm text-white text-md p-2 bg-red-400">
                          Grass
                        </div>
                        <div className="h-8 flex items-center rounded-sm text-white text-md p-2 bg-red-400">
                          Poison
                        </div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      className="checkbox rounded-full border-red-500 checkbox-error"
                    />
                  </label>
                <div className="flex self-center gap-10">
                  <button className="btn bg-transparent w-20 text-sm border-[1px] border-red-600 text-red-600 font-semibold hover:border-red-700 hover:text-red-700 hover:bg-transparent">
                    Batal
                  </button>
                  <button className="btn bg-[#a8a8a8] w-20 text-sm text-white hover:bg-[#646464]">
                    Tambah
                  </button>
                </div>
                </div>
              </div>
            </dialog>
          </div>
          <div className="flex self-end gap-10">
            <button className="btn bg-transparent w-32 border-[1px] border-red-600 text-red-600 font-semibold hover:border-red-700 hover:text-red-700 hover:bg-transparent">
              Batal
            </button>
            <button className="btn bg-[#a8a8a8] w-32 text-white hover:bg-[#646464]">
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
